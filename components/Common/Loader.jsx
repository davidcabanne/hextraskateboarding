import React, { useEffect, useState, useRef } from "react";

import Image from "next/image";
import styled, { keyframes } from "styled-components";
import * as _var from "@/styles/variables";

import useWindowWidth from "@/hooks/useWindowWidth";

import hextraLoaderImg from "../../public/hextraLoader.jpg";
import hextraLoaderImgB from "../../public/hextraLoaderB.jpg";

const animationDuration = 700;
const animationDelay = 2500;
const animationLength = animationDuration + animationDelay;

const videoDesktop = "hextraLoader.mp4";
const videoLaptop = "hextraLoaderLaptop.mp4";
const videoTablet = "hextraLoaderTablet.mp4";

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
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.$theme === true ? _var.mono_010 : _var.mono_000};
  pointer-events: none;
  overflow-y: hidden;
  z-index: 910;

  &.active {
    animation: ${containerLoad} ${animationDuration}ms linear forwards;
    animation-delay: ${animationDelay}ms;
  }
`;

const Video = styled.video`
  position: absolute;
  width: 100%;
  height: auto;
  max-width: 50vw;
  background: rgba(0, 0, 0, 0);
  filter: ${(props) => (props.$theme === true ? "invert(0)" : "invert(1)")};
  transform: scale(0.5);

  &.active {
    animation: ${videoLoad} ${animationDelay}ms ${_var.cubicBezier} forwards;
  }

  @media ${_var.device.tablet_max} {
    max-width: 90vw;
  }
`;

const Placeholder = styled(Image)`
  position: relative;
  width: 100%;
  transform: scale(0.25);
  z-index: -1;

  &.inactive {
    display: none;
  }

  @media ${_var.device.tablet_max} {
    max-width: 90vw;
  }
`;

export default function Loader({ theme }) {
  const videoRef = useRef(null);
  const [bodyActive, setBodyActive] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const innerWidth = useWindowWidth();

  useEffect(() => {
    if (document.body !== undefined) {
      setBodyActive(true);
    }
  }, [bodyActive]);

  useEffect(() => {
    if (bodyActive) {
      videoRef.current.addEventListener("loadedmetadata", function () {
        setIsLoaded(true);
      });
    }
  }, [bodyActive]);

  useEffect(() => {
    if (bodyActive) {
      document.body.classList.add("menuActive");
      let videoSrc;

      if (innerWidth >= 1024) {
        videoSrc = videoDesktop;
      }
      if (innerWidth < 1024 && innerWidth >= 786) {
        videoSrc = videoLaptop;
      }
      if (innerWidth < 768) {
        videoSrc = videoTablet;
      }

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
    <Container $theme={theme} className={isLoaded ? "active" : ""}>
      <Placeholder
        src={theme === true ? hextraLoaderImg : hextraLoaderImgB}
        fill
        sizes="100%"
        alt="Hextra Skateboarding motion design"
        className={isLoaded ? "inactive" : ""}
      />
      <Video
        ref={videoRef}
        $theme={theme}
        autoPlay
        muted
        playsInline
        preload="metadata"
        poster="/hextraLoader.jpg"
        className={isLoaded ? "active" : ""}
      >
        <source src="" type="video/mp4" />
      </Video>
    </Container>
  );
}
