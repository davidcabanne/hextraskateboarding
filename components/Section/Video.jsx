import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styled, { css } from "styled-components";
import * as _var from "../../styles/variables";

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${_var.space_L} calc((${_var.space_L} * 4));

  @media ${_var.device.tablet_max} {
    padding: ${_var.space_M} ${_var.space_M};
  }
  @media ${_var.device.mobileL_max} {
    padding: ${_var.space_S} ${_var.space_S} ${_var.space_M} ${_var.space_S};
  }
`;

const Placeholder = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1 / 1;

  & img {
    cursor: pointer;
    z-index: 1;
    opacity: 1;
    transition: opacity 500ms ${_var.cubicBezier};

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

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${_var.space_XS};
  align-items: ${(props) => (props.$alignRight ? "flex-end" : "flex-start")};
  text-align: ${(props) => (props.$alignRight ? "end" : "start")};
  padding: ${_var.space_L} ${_var.space_L} 0px ${_var.space_L};

  & h2 {
    max-width: 24ch;
  }

  @media ${_var.device.tablet_max} {
    align-items: flex-start;
    text-align: start;
    padding: ${_var.space_M} 0px;
  }
  @media ${_var.device.mobileL_max} {
    padding: ${_var.space_S} 0px;
  }
`;

export default function Video({ children, data, alignRight }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

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
    <Container>
      <Placeholder>
        <Image
          src={img}
          fill
          placeholder="blur"
          style={{ objectFit: "cover" }}
          alt={alt}
          onClick={(event) => handlePlay(event)}
          className={isPlaying ? "active" : ""}
        />
        <Iframe
          ref={playerRef}
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
        />
      </Placeholder>

      <Text $alignRight={alignRight}>{children}</Text>
    </Container>
  );
}
