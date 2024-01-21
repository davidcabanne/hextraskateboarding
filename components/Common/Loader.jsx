import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import * as _var from "@/styles/variables";

const animationDuration = 500;
const animationDelay = 6000;
const animationLength = animationDuration + animationDelay;

const containerLoad = keyframes`
${"0%"} {
display: flex;
opacity: 1;
}
${"99%"} {
display: flex;
opacity: 0;
}
${"100%"} {
display: none;
opacity: 0;
}
`;

const videoLoad = keyframes`
${"0%"} {
opacity: 0;
}
${"100%"} {
opacity: 1;
}
`;

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.$theme ? _var.mono_000 : _var.mono_010)};
  opacity: 1;
  animation: ${containerLoad} ${animationDuration}ms linear forwards;
  animation-delay: ${animationDelay}ms;
  pointer-events: none;
  overflow-y: hidden;
  z-index: 910;
`;

const Video = styled.video`
  width: 50%;
  animation: ${videoLoad} 1000ms ${_var.cubicBezier} forwards;
`;

export default function Loader({ theme }) {
  const videoRef = useRef(null);
  const [bodyActive, setBodyActive] = useState(false);

  useEffect(() => {
    if (document.body !== undefined) {
      setBodyActive(true);
    }
  }, [bodyActive]);

  useEffect(() => {
    if (bodyActive) {
      document.body.classList.add("menuActive");
      videoRef.current.playbackRate = 1.25;
      videoRef.current.play();
    }

    const timeoutId = setTimeout(() => {
      document.body.classList.remove("menuActive");
    }, animationLength);

    return () => clearTimeout(timeoutId);
  }, [bodyActive]);

  return (
    <Container $theme={theme}>
      <Video ref={videoRef} playsInline muted preload="true">
        <source src="/hextraLoader.mp4" type="video/mp4" />
      </Video>
    </Container>
  );
}
