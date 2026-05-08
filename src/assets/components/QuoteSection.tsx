import "./QuoteSection.css";

import { useEffect } from "react";

function QuoteSection() {
  useEffect(() => {
    const starter = document.getElementById("starterQuote");
    const top = document.querySelector(".top");
    const middle = document.querySelector(".middle");
    const bottom = document.querySelector(".bottom");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // sofort
            setTimeout(() => {
              bottom?.classList.add("show");
            }, 100);

            // nach 100ms
            setTimeout(() => {
              middle?.classList.add("show");
            }, 200);

            // nach 200ms
            setTimeout(() => {
              top?.classList.add("show");
            }, 300);
          }
        });
      },
      { threshold: 0 },
    );

    if (starter) {
      observer.observe(starter);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="quoteSection">
      <div className="quoteMask top">
        <span className="quote">
          <strong>Anyone</strong> can build a website.
        </span>
      </div>

      <div className="quoteMask middle">
        <span className="quote">
          But an experience is something you <em>feel</em>.
        </span>
      </div>

      <div id="starterQuote" className="quoteMask bottom">
        <span className="quote">
          Not just something you <strong>see</strong>.
        </span>
      </div>
    </section>
  );
}
export default QuoteSection;
