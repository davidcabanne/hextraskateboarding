import React, { useContext } from "react";
import { usePathname } from "next/navigation";

import { MouseContext } from "@/context/mouseContext";

import styled from "styled-components";
import * as _var from "@/styles/variables";

import NavLink from "./NavLink";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const Container = styled.div`
  @media ${_var.device.tablet_min} {
    display: none;
  }
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${_var.space_S};
  padding-bottom: ${_var.space_S};
  margin: 0px ${_var.space_M};
  z-index: 1;

  @media ${_var.device.mobileL_max} {
    padding-top: ${_var.space_S};
    padding-bottom: ${_var.space_S};
    margin: 0px ${_var.space_S};
  }
`;

const Header = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CallToActions = styled.div`
  display: flex;
  gap: ${_var.space_S};
  background: ${(props) =>
    props.$theme ? `${_var.lightTheme}` : `${_var.darkTheme}`};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: ${_var.space_S} ${_var.space_S};
  border-radius: ${_var.space_L};
  transition: 200ms ${_var.cubicBezier};
  transition-property: background;

  &.active {
    background: transparent;
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
  }
`;

const Menu = styled.div`
  position: fixed;
  inset: 0;
  opacity: 0;
  background: ${(props) =>
    props.$theme ? `${_var.lightTheme}` : `${_var.darkTheme}`};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: -1;
  transition: 200ms ${_var.cubicBezier};
  transition-property: opacity;
  pointer-events: none;

  &.active {
    opacity: 1;
  }
`;

const NavLinks = styled.ul`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 88px ${_var.space_M} ${_var.space_M} ${_var.space_M};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: ${_var.space_M};
  list-style: none;

  /* & a {
    cursor: none;

    @media ${_var.device.tablet_max} {
      cursor: pointer;
    }
  } */
`;

const Svg = styled.svg`
  opacity: 1;
  transform: rotate(0deg);
  transition: ${_var.cubicBezier};
  transition-property: opacity, transform;
  transition-delay: 150ms, 0ms;

  &.active {
    transform: rotate(180deg);
  }

  @media ${_var.device.tablet_max} {
    cursor: pointer;
  }
`;

export default function NavDesktop({
  handleRenderTheme,
  theme,
  menuActive,
  handleMenu,
}) {
  const pathname = usePathname();

  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <Container>
      <Header>
        <NavLink link="/" theme={theme}>
          <Logo theme={theme} />
        </NavLink>
        <CallToActions $theme={theme} className={menuActive ? "active" : ""}>
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
          <MobileMenu
            theme={theme}
            menuActive={menuActive}
            handleMenu={handleMenu}
          />
        </CallToActions>
      </Header>
      <Menu $theme={theme} className={menuActive ? "active" : ""}>
        <NavLinks>
          <NavLink
            link="/"
            active={`${pathname}` === "/"}
            theme={theme}
            mobileMenuLink
            menuActive={menuActive}
            index={0}
          >
            Home
          </NavLink>
          <NavLink
            link="lookbook"
            active={`${pathname}` === "/lookbook"}
            theme={theme}
            mobileMenuLink
            menuActive={menuActive}
            index={0}
          >
            Lookbook
          </NavLink>
          <NavLink
            link="skateboards"
            active={`${pathname}` === "/skateboards"}
            theme={theme}
            mobileMenuLink
            menuActive={menuActive}
            index={1}
          >
            Skateboards
          </NavLink>
          <NavLink
            link="videos"
            active={`${pathname}` === "/videos"}
            theme={theme}
            mobileMenuLink
            menuActive={menuActive}
            index={2}
          >
            Videos
          </NavLink>
        </NavLinks>
      </Menu>
    </Container>
  );
}
