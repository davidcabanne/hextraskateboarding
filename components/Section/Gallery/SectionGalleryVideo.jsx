import React, { useContext } from "react";
import Image from "next/image";
import { MouseContext } from "@/context/mouseContext";
import useElementOnScreen from "@/hooks/useElementOnScreen";

import styled, { css } from "styled-components";
import * as _var from "@/styles/variables";
import { H1, H2 } from "@/components/typefaces";

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
    grid-template-columns: minmax(100px, 1fr);
  }
`;

const ExtLink = styled.a`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: none;

  @media ${_var.device.tablet_max} {
    cursor: pointer;
  }

  & h2 {
    margin-top: ${_var.space_S};
    font-weight: 600;
    border-bottom: 4px solid transparent;
    transition: 200ms ${_var.cubicBezier};
    transition-property: border-bottom;
    transition-delay: 50ms;
  }

  & h1 {
    text-transform: uppercase;
    opacity: 0;
    transition: 300ms ${_var.cubicBezier};
    transition-property: opacity;
    transition-delay: 100ms;
  }

  & div {
    overflow: hidden;

    & img {
      filter: grayscale(0);
      transform: scale(1);
      transition: 300ms ${_var.cubicBezier};
      transition-property: filter, transform;
      transition-delay: 100ms;
    }

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: ${_var.darkTheme};
      opacity: 0;
      pointer-events: none;
      transition: 300ms ${_var.cubicBezier};
      transition-property: opacity;
    }
  }

  &:hover {
    & div > img {
      filter: grayscale(1);
      transform: scale(1.025);
    }

    & h2 {
      border-bottom: 4px solid
        ${(props) => (props.$theme ? _var.mono_000 : _var.mono_010)};
    }

    & h1 {
      opacity: 1;
    }

    & div::after {
      opacity: 1;
    }
  }
`;

export default function SectionGalleryVideo({ theme, data, reveal, fadeIn }) {
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
          <ExtLink
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            $theme={theme}
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <Placeholder flexCenter>
              <H1>Watch</H1>
              <Image
                src={item.img}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                style={{ objectFit: "cover" }}
                alt={item.alt}
              />
            </Placeholder>
            <H2>{item.title}</H2>
          </ExtLink>
        ))}
      </Gallery>
    </Container>
  );
}
