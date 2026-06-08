import { useState } from "react";
import "../CSS/ImageSlider.css";

import ArrowLeft from "../icons/linker-pfeil.png";
import ArrowRight from "../icons/rechter-pfeil.png";

type ImageSliderProps = {
  imageUrls: string[];
};

export function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  return (
    <div style={{ width: "100%", aspectRatio: "16 / 9", position: "relative" }}>
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        {imageUrls.map((url) => (
          <img
            key={url}
            src={url}
            className="imgSliderImg"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>

      <button className="imgSliderBtnLeft" onClick={showPrevImage}>
        <img src={ArrowLeft} className="imgSliderArrow" />
      </button>

      <button className="imgSliderBtnRight" onClick={showNextImage}>
        <img src={ArrowRight} className="imgSliderArrow" />
      </button>

      <div
        style={{
          position: "absolute",
          bottom: "2%",
          display: "flex",
          justifySelf: "center",
          gap: "10px",
        }}
      >
        {imageUrls.map((_, index) => (
          <button
            className="imgSliderSlider"
            onClick={() => setImageIndex(index)}
            style={{ background: index === imageIndex ? "white" : "" }}
          ></button>
        ))}
      </div>
    </div>
  );
}
