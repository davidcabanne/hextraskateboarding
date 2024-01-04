import React from "react";
import Image from "next/image";
import useElementOnScreen from "@/hooks/useElementOnScreen";

import styled, { css } from "styled-components";
import * as _var from "@/styles/variables";

import Placeholder from "../Placeholder";

const Container = styled.section`
  position: relative;
  width: 100%;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1.61 / 1;

  & img {
    height: 100%;
  }

  ${(props) =>
    props.$reveal &&
    css`
      ${_var.revealAnimation}
    `}
  ${(props) =>
    props.$fadeIn &&
    css`
      ${_var.fadeInAnimation}
    `}
`;

export default function SectionGalleryPage({ img, reveal, fadeIn }) {
  // HOOK
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: _var.rootMargin,
    threshold: _var.threshold,
  });
  return (
    <Container
      ref={containerRef}
      $reveal={reveal}
      $fadeIn={fadeIn}
      className={isVisible ? "active" : ""}
    >
      {/* <Placeholder> */}
      <Image
        src={img.src}
        fill
        style={{ objectFit: "cover" }}
        placeholder="blur"
        alt={img.alt}
      />
      {/* </Placeholder> */}
    </Container>
  );
}
