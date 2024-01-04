import React, { useContext } from "react";

import { MouseContext } from "@/context/mouseContext";

import styled from "styled-components";
import * as _var from "@/styles/variables";

const Container = styled.div`
  position: relative;
  z-index: 9999;
  cursor: pointer;

  & div {
    text-align: center;
    color: ${(props) => (props.$theme ? _var.mono_000 : _var.mono_010)};
    font-weight: 600;
    text-transform: uppercase;
    width: 48px;
  }
`;

export default function MobileMenu({ theme, menuActive, handleMenu }) {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <Container
      $theme={theme}
      onMouseEnter={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler("")}
      onClick={() => handleMenu()}
    >
      <div>{menuActive ? "Close" : "Menu"}</div>
    </Container>
  );
}
