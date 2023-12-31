import React, { useContext } from "react";
import { usePathname } from "next/navigation";

import { MouseContext } from "@/context/mouseContext";

import styled from "styled-components";
import * as _var from "@/styles/variables";

import NavLink from "./NavLink";
import Logo from "./Logo";

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${_var.space_M};
  padding-top: ${_var.space_M};
  padding-bottom: ${_var.space_M};
  margin: 0px ${_var.space_L};
  z-index: 1;

  @media ${_var.device.tablet_max} {
    display: none;
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

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${_var.space_M};
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

export default function NavDesktop({ handleRenderTheme, theme }) {
  const pathname = usePathname();

  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <Container>
      <NavLink
        link="/"
        theme={theme}
        aria-label="Hextra Skateboarding Homepage"
      >
        <Logo theme={theme} />
      </NavLink>
      <Nav>
        <NavLinks>
          <li>
            <NavLink
              link="lookbook"
              active={`${pathname}` === "/lookbook"}
              theme={theme}
            >
              Lookbook
            </NavLink>
          </li>
          <li>
            <NavLink
              link="skateboards"
              active={`${pathname}` === "/skateboards"}
              theme={theme}
            >
              Skateboards
            </NavLink>
          </li>
          <li>
            <NavLink
              link="videos"
              active={`${pathname}` === "/videos"}
              theme={theme}
            >
              Videos
            </NavLink>
          </li>
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
          aria-label={theme ? "Toggle light mode" : "Toggle dark mode"}
        >
          <path d="m12 22c5.5228475 0 10-4.4771525 10-10s-4.4771525-10-10-10-10 4.4771525-10 10 4.4771525 10 10 10zm0-1.5v-17c4.6944204 0 8.5 3.80557963 8.5 8.5 0 4.6944204-3.8055796 8.5-8.5 8.5z" />
        </Svg>
      </Nav>
    </Container>
  );
}
