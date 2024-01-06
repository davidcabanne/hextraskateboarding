import React, { useState, useRef, useEffect, useContext } from "react";
import { MouseContext } from "@/context/mouseContext";
import useElementOnScreen from "@/hooks/useElementOnScreen";

import Image from "next/image";
import styled, { css } from "styled-components";
import * as _var from "@/styles/variables";

const Placeholder = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  max-width: 100vh;
  aspect-ratio: 1.33;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  ${_var.revealAnimation}

  & img {
    cursor: none;
    z-index: 1;
    opacity: 1;
    transition: opacity 500ms ${_var.cubicBezier};

    @media ${_var.device.tablet_max} {
      cursor: pointer;
    }

    &.active {
      opacity: 0;
      pointer-events: none;
    }
  }

  & iframe {
    z-index: 0;
    aspect-ratio: 16 / 9;
  }

  & img,
  iframe {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

const Iframe = styled.iframe`
  border: 0;
`;

export default function VideoPlaceholder({ data }) {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  // HOOK
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: _var.rootMargin,
    threshold: _var.threshold,
  });

  const { title, src, img, alt } = data;

  useEffect(() => {
    if (isPlaying && playerRef?.current) {
      playerRef.current.src = playerRef.current.src += "?rel=0&autoplay=1";
    }
  }, [isPlaying]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <Placeholder ref={containerRef} className={isVisible ? "active" : ""}>
      <Image
        src={img}
        fill
        placeholder="blur"
        style={{ objectFit: "cover" }}
        alt={alt}
        onClick={(event) => handlePlay(event)}
        className={isPlaying ? "active" : ""}
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      />
      {isVisible && (
        <Iframe
          ref={playerRef}
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
        />
      )}
    </Placeholder>
  );
}
