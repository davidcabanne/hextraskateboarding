import React, { useState, useEffect } from "react";

import useScrollPosition from "@/hooks/useScrollPosition";
import useWindowWidth from "@/hooks/useWindowWidth";

import styled from "styled-components";
import * as _var from "@/styles/variables";

import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Container = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 900;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0;
    background: ${(props) =>
      props.$theme ? `${_var.lightTheme}` : `${_var.darkTheme}`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: 200ms ${_var.cubicBezier};
    transition-property: opacity, background;
    transition-duration: 350ms, 200ms;
    transition-delay: 200ms, 0ms;
  }

  & nav > svg {
    opacity: 0;
    pointer-events: none;
    transition-duration: 75ms, 250ms;
  }

  &.active {
    &::after {
      opacity: 1;
      transition-delay: 10ms, 0ms;
    }

    & nav > svg {
      opacity: 1;
      pointer-events: auto;
      transition-duration: 300ms, 250ms;
      transition-delay: 260ms, 0ms;
    }
  }
`;

export default function Header({ handleRenderTheme, theme }) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const innerWidth = useWindowWidth();

  const handleMenu = () => {
    setMenuActive(!menuActive);
  };

  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (innerWidth >= 770 && menuActive) {
      setMenuActive(false);
    }
  }, [innerWidth]);

  useEffect(() => {
    const body = document.body;
    if (menuActive) {
      body.classList.add("menuActive");
    } else {
      body.classList.remove("menuActive");
    }
  }, [menuActive]);

  useEffect(() => {
    if (scrollPosition > 0 && innerWidth >= 770) {
      setHasScrolled(true);
    }
    if (scrollPosition === 0 && innerWidth >= 770) {
      setHasScrolled(false);
    }
  }, [scrollPosition, innerWidth]);

  return (
    <Container $theme={theme} className={hasScrolled ? "active" : ""}>
      <NavDesktop theme={theme} handleRenderTheme={handleRenderTheme} />
      <NavMobile
        theme={theme}
        menuActive={menuActive}
        handleMenu={handleMenu}
        handleRenderTheme={handleRenderTheme}
      />
    </Container>
  );
}
