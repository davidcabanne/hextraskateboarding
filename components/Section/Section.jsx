import React from "react";
import Image from "next/image";
import useElementOnScreen from "../../hooks/useElementOnScreen";

import styled, { css } from "styled-components";
import * as _var from "../../styles/variables";

import Placeholder from "./Placeholder";

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
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

  ${(props) =>
    props.$fullScreen &&
    css`
      padding: ${_var.space_L} 0px;

      @media ${_var.device.tablet_max} {
        min-height: 50vh;
        min-height: 50svh;
        padding: ${_var.space_M} 0px;
      }

      @media ${_var.device.mobileL_max} {
        padding: ${_var.space_S} 0px;
      }
    `}

  ${(props) =>
    props.$fullPage &&
    css`
      padding: 0px;

      @media ${_var.device.tablet_max} {
        padding: 0px;
      }
      @media ${_var.device.mobileL_max} {
        padding: 0px;
      }
    `}

  ${(props) =>
    props.$footer &&
    css`
      padding: ${_var.space_L} 0px 0px 0px;

      @media ${_var.device.tablet_max} {
        min-height: 50vh;
        min-height: 50svh;
        padding: 0px;
      }
    `}
`;

const Text = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${_var.space_XL};
  z-index: 1;

  @media ${_var.device.tablet_max} {
    padding: ${_var.space_L};
  }
  @media ${_var.device.mobileL_max} {
    padding: ${_var.space_M};
  }

  & h2 {
    color: ${(props) => props.$textColor};
    text-align: right;
    background: none;
  }
`;

export default function Section({
  children,
  fullScreen,
  fullPage,
  footer,
  footerFade,
  img,
  reveal,
  fadeIn,
  textColor,
  objectPosition,
}) {
  // HOOK
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: _var.rootMargin,
    threshold: _var.threshold,
  });
  return (
    <Container
      ref={containerRef}
      $fullScreen={fullScreen}
      $fullPage={fullPage}
      $footer={footer}
      $reveal={reveal}
      $fadeIn={fadeIn}
      className={isVisible ? "active" : ""}
    >
      <Placeholder
        footer={footer}
        footerFade={footerFade}
        objectPosition={objectPosition}
      >
        <Text $textColor={textColor}>{children}</Text>
        <Image
          src={img}
          fill
          style={{ objectFit: "cover" }}
          placeholder="blur"
          alt="Picture of the author"
        />
      </Placeholder>
    </Container>
  );
}
