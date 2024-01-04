import React, { useContext } from "react";
import Image from "next/image";
import { MouseContext } from "@/context/mouseContext";
import useElementOnScreen from "@/hooks/useElementOnScreen";

import styled, { css } from "styled-components";
import * as _var from "@/styles/variables";
import { H2 } from "@/components/typefaces";

import Placeholder from "../Placeholder";

const Container = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${_var.space_L};

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
  @media ${_var.device.tablet_max} {
    padding: ${_var.space_M};
  }
  @media ${_var.device.mobileL_max} {
    padding: ${_var.space_S};
  }
`;

const Gallery = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${_var.space_L};

  & div {
    aspect-ratio: 1.33;
  }
  @media ${_var.device.tablet_max} {
    grid-template-columns: 1fr;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h2 {
    margin-top: ${_var.space_S};
    font-weight: 600;
  }
`;

export default function SectionGalleryVideo({ data, reveal, fadeIn }) {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

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
      <Gallery>
        {data.map((item) => (
          <Wrapper key={item.title}>
            <Placeholder>
              <Image
                src={item.img}
                fill
                style={{ objectFit: "cover" }}
                placeholder="blur"
                alt={item.alt}
                onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
              />
            </Placeholder>
            <H2>{item.title}</H2>
          </Wrapper>
        ))}
      </Gallery>
    </Container>
  );
}
