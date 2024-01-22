import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import * as _var from "@/styles/variables";

const animationDuration = 700;
const animationDelay = 2500;
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
transform: scale(0.5);
}
${"25%"} {
transform: scale(1);
}
${"50%"} {
opacity: 1;
transform: scale(1);
}
${"85%"} {
opacity: 1;
transform: translateY(0px) scale(1);
}
${"100%"} {
opacity: 0;
transform: translateY(16px) scale(0.25);
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
  width: 100%;
  max-width: 50vw;
  animation: ${videoLoad} ${animationDelay}ms ${_var.cubicBezier} forwards;
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
      videoRef.current.pause();
      videoRef.current.play();
    }

    const timeoutId = setTimeout(() => {
      document.body.classList.remove("menuActive");
    }, animationLength);

    return () => clearTimeout(timeoutId);
  }, [bodyActive]);

  return (
    <Container $theme={theme}>
      <Video ref={videoRef} preload="true" muted playsInline autoPlay>
        <source src="/hextraLoader.mp4" type="video/mp4" />
      </Video>
    </Container>
  );
}
