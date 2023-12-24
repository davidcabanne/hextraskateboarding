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
  text-align: ${(props) => (props.$alignRight ? "end" : "start")};
  padding: ${_var.space_L} ${_var.space_L} 0px ${_var.space_L};
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
          alt="Picture of the author"
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
