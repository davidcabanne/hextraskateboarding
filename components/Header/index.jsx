import React, { useState, useEffect, useContext } from "react";
import { MouseContext } from "@/context/mouseContext";
// import useScrollDir from "@/hooks/useScrollDir";
import useScrollPosition from "@/hooks/useScrollPosition";

import styled from "styled-components";
import * as _var from "@/styles/variables";

import NavLink from "./NavLink";
import Logo from "./Logo";

const lightTheme = "rgba(255, 255, 255, 0.25)";
const darkTheme = "rgba(0, 0, 0, 0.75)";

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
    background: ${(props) => (props.$theme ? lightTheme : darkTheme)};
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

const Nav = styled.nav`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${_var.space_M};
  padding-bottom: ${_var.space_M};
  margin: 0px ${_var.space_L};
  z-index: 1;

  @media ${_var.device.tablet_max} {
    padding-top: ${_var.space_S};
    padding-bottom: ${_var.space_S};
    margin: 0px ${_var.space_M};
  }

  @media ${_var.device.mobileL_max} {
    padding-top: ${_var.space_S};
    padding-bottom: ${_var.space_S};
    margin: 0px ${_var.space_S};
  }
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${_var.space_M};
  list-style: none;

  & a {
    cursor: none;
  }
`;

const Svg = styled.svg`
  opacity: 0;
  transform: rotate(0deg);
  transition: ${_var.cubicBezier};
  transition-property: opacity, transform;
  transition-delay: 150ms, 0ms;

  &.active {
    transform: rotate(180deg);
  }
`;

export default function Header({ handleRenderTheme, theme }) {
  const [hasScrolled, setHasScrolled] = useState(false);

  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (scrollPosition > 0) {
      setHasScrolled(true);
    }
    if (scrollPosition === 0) {
      setHasScrolled(false);
    }
  }, [scrollPosition]);

  return (
    <Container $theme={theme} className={hasScrolled ? "active" : ""}>
      <Nav>
        <NavLinks>
          <NavLink link="/">
            <Logo theme={theme} />
          </NavLink>
          <NavLink link="lookbook">Lookbook</NavLink>
          <NavLink link="boards">Boards</NavLink>
        </NavLinks>
        <Svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => handleRenderTheme(theme)}
          className={theme ? "active" : ""}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <path d="m12 22c5.5228475 0 10-4.4771525 10-10s-4.4771525-10-10-10-10 4.4771525-10 10 4.4771525 10 10 10zm0-1.5v-17c4.6944204 0 8.5 3.80557963 8.5 8.5 0 4.6944204-3.8055796 8.5-8.5 8.5z" />
        </Svg>
      </Nav>
    </Container>
  );
}
