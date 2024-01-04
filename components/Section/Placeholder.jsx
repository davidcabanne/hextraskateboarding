import React from "react";
import styled, { css } from "styled-components";
import * as _var from "../../styles/variables";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: inherit;
  min-height: inherit;

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
`;

export default function Placeholder({ footer, footerFade, children }) {
  return <Container $footerFade={footerFade}>{children}</Container>;
}
