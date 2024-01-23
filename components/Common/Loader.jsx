import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import * as _var from "@/styles/variables";

const animationDuration = 700;
const animationDelay = 2500;
const animationLength = animationDuration + animationDelay;

const videoSrc = "hextraLoader.mp4";

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
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.$theme === true ? _var.mono_010 : _var.mono_000};
  animation: ${containerLoad} ${animationDuration}ms linear forwards;
  animation-delay: ${animationDelay}ms;
  pointer-events: none;
  overflow-y: hidden;
  z-index: 910;
`;

const Video = styled.video`
  position: relative;
  width: 100%;
  height: auto;
  max-width: 50vw;
  background: rgba(0, 0, 0, 0);
  filter: ${(props) => (props.$theme === true ? "invert(0)" : "invert(1)")};
  animation: ${videoLoad} ${animationDelay}ms ${_var.cubicBezier} forwards;

  @media ${_var.device.tablet_max} {
    max-width: 90vw;
  }
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
      videoRef.current.src = videoSrc;
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }

    const timeoutId = setTimeout(() => {
      document.body.classList.remove("menuActive");
    }, animationLength);

    return () => clearTimeout(timeoutId);
  }, [bodyActive]);

  return (
    <Container $theme={theme}>
      <Video
        ref={videoRef}
        $theme={theme}
        autoPlay
        muted
        playsInline
        preload="metadata"
        poster="/hextraLoader.jpg"
      >
        <source src={videoSrc} type="video/mp4" />
      </Video>
    </Container>
  );
}
