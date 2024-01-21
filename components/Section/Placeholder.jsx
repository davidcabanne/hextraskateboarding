import React from "react";
import styled, { css } from "styled-components";
import * as _var from "../../styles/variables";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: inherit;
  min-height: inherit;

  & img {
    object-position: ${(props) => (props.$objectPosition ? "top" : "")};
  }

  ${(props) =>
    props.$footerFade &&
    css`
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 256px;
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
      }
    `}

  ${(props) =>
    props.$flexCenter &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;

      & h1 {
        color: ${_var.mono_010};
        background: none;
        z-index: 10;
      }
    `}
`;

export default function Placeholder({
  footerFade,
  flexCenter,
  objectPosition,
  children,
}) {
  return (
    <Container
      $footerFade={footerFade}
      $flexCenter={flexCenter}
      $objectPosition={objectPosition}
    >
      {children}
    </Container>
  );
}
