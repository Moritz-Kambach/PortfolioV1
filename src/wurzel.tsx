import { useRef, useEffect, useCallback } from "react";

// ─────────────────────────────────────────────
// TYPEN
// ─────────────────────────────────────────────

interface RootPath {
  id: string;
  /** Scroll-Fortschritt (0–1) bei dem dieser Pfad startet */
  start: number;
  /** Scroll-Fortschritt (0–1) bei dem dieser Pfad endet */
  end: number;
}

// ─────────────────────────────────────────────
// KONFIGURATION — hier anpassen
// ─────────────────────────────────────────────

/** Gesamthöhe des unsichtbaren Scrollraums in px.
 *  Mehr = langsameres Wachstum beim Scrollen. */
const SCROLL_HEIGHT = 2400;

/** Höhe des sichtbaren Fensters in px. */
const VIEWPORT_HEIGHT = 500;

/** Alle animierten Pfade mit ihrem Wachstumsfenster (start/end ∈ [0, 1]). */
const ROOT_PATHS: RootPath[] = [
  // Hauptwurzel
  { id: "p-trunk", start: 0.0, end: 0.1 },
  // 4 Hauptäste (gleichzeitig)
  { id: "p-b1", start: 0.1, end: 0.25 },
  { id: "p-b2", start: 0.1, end: 0.25 },
  { id: "p-b3", start: 0.1, end: 0.25 },
  { id: "p-b4", start: 0.1, end: 0.25 },
  // Seitenäste
  { id: "p-s1a", start: 0.25, end: 0.45 },
  { id: "p-s1b", start: 0.25, end: 0.45 },
  { id: "p-s2a", start: 0.28, end: 0.48 },
  { id: "p-s2b", start: 0.28, end: 0.48 },
  { id: "p-s3a", start: 0.28, end: 0.48 },
  { id: "p-s3b", start: 0.28, end: 0.48 },
  { id: "p-s4a", start: 0.25, end: 0.45 },
  { id: "p-s4b", start: 0.25, end: 0.45 },
  // Haarwurzeln
  { id: "p-t1", start: 0.48, end: 0.72 },
  { id: "p-t2", start: 0.5, end: 0.74 },
  { id: "p-t3", start: 0.52, end: 0.76 },
  { id: "p-t4", start: 0.54, end: 0.78 },
  { id: "p-t5", start: 0.54, end: 0.78 },
  { id: "p-t6", start: 0.52, end: 0.76 },
  { id: "p-t7", start: 0.5, end: 0.74 },
  { id: "p-t8", start: 0.48, end: 0.72 },
];

// ─────────────────────────────────────────────
// HELPER
// ─────────────────────────────────────────────

/** Clamp t auf [0, 1], dann sanfte Ease-In-Out-Kurve. */
function easeInOut(t: number): number {
  const c = Math.max(0, Math.min(1, t));
  return c < 0.5 ? 2 * c * c : -1 + (4 - 2 * c) * c;
}

/** Lokalen Fortschritt eines Pfades berechnen. */
function localProgress(global: number, start: number, end: number): number {
  return easeInOut((global - start) / (end - start));
}

/** Phasenbeschriftung basierend auf globalem Fortschritt. */
function getPhaseLabel(p: number): string {
  if (p < 0.05) return "Scrolle, um das Wachstum zu verfolgen ↓";
  if (p < 0.28) return "Hauptwurzel verzweigt sich...";
  if (p < 0.55) return "Seitenäste erkunden den Boden...";
  if (p < 0.8) return "Haarwurzeln erschließen die Tiefe...";
  return "Wurzelsystem vollständig ✓";
}

// ─────────────────────────────────────────────
// SVG-TEILKOMPONENTEN
// ─────────────────────────────────────────────

/** Hilfsprop für animierte Pfade */
interface AnimatedPathProps extends React.SVGProps<SVGPathElement> {
  pathId: string;
}

function AnimatedPath({ pathId, ...rest }: AnimatedPathProps) {
  return (
    <path
      id={pathId}
      fill="none"
      strokeLinecap="round"
      pathLength={100}
      strokeDasharray={100}
      strokeDashoffset={100} // JavaScript überschreibt das zur Laufzeit
      {...rest}
    />
  );
}

// ─────────────────────────────────────────────
// HAUPTKOMPONENTE
// ─────────────────────────────────────────────

export default function RootSystem() {
  const containerRef = useRef<HTMLDivElement>(null);

  // ── Scroll-Handler ──────────────────────────
  const handleScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const maxScroll = el.scrollHeight - el.clientHeight;
    const progress = maxScroll > 0 ? el.scrollTop / maxScroll : 0;

    // Jeden registrierten Pfad animieren
    ROOT_PATHS.forEach(({ id, start, end }) => {
      const path = el.querySelector<SVGPathElement>(`#${id}`);
      if (!path) return;
      const t = localProgress(progress, start, end);
      path.setAttribute("stroke-dashoffset", String(100 - t * 100));
    });

    // Verzweigungsknoten
    const nodeSplit = el.querySelector<SVGCircleElement>("#node-split");
    if (nodeSplit) {
      nodeSplit.setAttribute(
        "opacity",
        String(Math.max(0, Math.min(1, (progress - 0.1) / 0.05))),
      );
    }

    // Wurzelspitzen
    const tips = el.querySelector<SVGGElement>("#tips");
    if (tips) {
      tips.setAttribute(
        "opacity",
        String(Math.max(0, Math.min(1, (progress - 0.75) / 0.08))),
      );
    }

    // Phasenlabel
    const label = el.querySelector<SVGTextElement>("#progress-label");
    if (label) label.textContent = getPhaseLabel(progress);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initialzustand setzen
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // ── Render ──────────────────────────────────
  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: VIEWPORT_HEIGHT,
        overflowY: "scroll",
        position: "relative",
        border: "1px solid #c8a87a",
        borderRadius: 12,
        background: "#02080b",
        cursor: "ns-resize",
      }}
    >
      {/* Unsichtbarer Scrollraum */}
      <div
        style={{ width: "100%", height: SCROLL_HEIGHT, position: "relative" }}
      >
        {/* Sticky SVG — bleibt oben sichtbar */}
        <svg
          id="root-svg"
          viewBox="0 0 700 500"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "sticky",
            top: 0,
            left: 0,
            width: "100%",
            height: VIEWPORT_HEIGHT,
            display: "block",
          }}
        >
          {/* ── Hauptwurzel ── */}
          <AnimatedPath
            pathId="p-trunk"
            d="M350 82 C350 105 350 140 350 185"
            stroke="#6b4226"
            strokeWidth={9}
          />

          {/* Verzweigungsknoten */}
          <circle
            id="node-split"
            cx={350}
            cy={185}
            r={8}
            fill="#6b4226"
            opacity={0}
          />

          {/* ── 4 Hauptäste ── */}
          <AnimatedPath
            pathId="p-b1"
            d="M350 185 C338 212 295 235 242 268"
            stroke="#7a5038"
            strokeWidth={5.5}
          />
          <AnimatedPath
            pathId="p-b2"
            d="M350 185 C344 218 328 252 312 288"
            stroke="#7a5038"
            strokeWidth={5.5}
          />
          <AnimatedPath
            pathId="p-b3"
            d="M350 185 C356 218 372 252 388 288"
            stroke="#7a5038"
            strokeWidth={5.5}
          />
          <AnimatedPath
            pathId="p-b4"
            d="M350 185 C362 212 405 235 458 268"
            stroke="#7a5038"
            strokeWidth={5.5}
          />

          {/* ── Seitenäste ── */}
          <AnimatedPath
            pathId="p-s1a"
            d="M242 268 C220 288 188 302 155 322"
            stroke="#8b6245"
            strokeWidth={3}
          />
          <AnimatedPath
            pathId="p-s1b"
            d="M242 268 C232 292 226 318 218 345"
            stroke="#8b6245"
            strokeWidth={3}
          />
          <AnimatedPath
            pathId="p-s2a"
            d="M312 288 C296 310 278 330 258 358"
            stroke="#8b6245"
            strokeWidth={3}
          />
          <AnimatedPath
            pathId="p-s2b"
            d="M312 288 C318 315 315 340 308 368"
            stroke="#8b6245"
            strokeWidth={3}
          />
          <AnimatedPath
            pathId="p-s3a"
            d="M388 288 C395 315 396 340 392 368"
            stroke="#8b6245"
            strokeWidth={3}
          />
          <AnimatedPath
            pathId="p-s3b"
            d="M388 288 C402 310 422 330 442 358"
            stroke="#8b6245"
            strokeWidth={3}
          />
          <AnimatedPath
            pathId="p-s4a"
            d="M458 268 C468 292 472 318 482 345"
            stroke="#8b6245"
            strokeWidth={3}
          />
          <AnimatedPath
            pathId="p-s4b"
            d="M458 268 C478 286 508 302 538 322"
            stroke="#8b6245"
            strokeWidth={3}
          />
        </svg>
      </div>
    </div>
  );
}
