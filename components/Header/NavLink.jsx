import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import { MouseContext } from "@/context/mouseContext";

import Link from "next/link";
import styled, { css } from "styled-components";
import * as _var from "@/styles/variables";

const CustomLink = styled(Link)`
  color: inherit;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  line-height: 1.2;
  color: ${(props) => (props.$theme ? _var.mono_000 : _var.mono_010)};
  cursor: none;

  @media ${_var.device.tablet_max} {
    cursor: pointer;
  }

  ${(props) =>
    props.$mobileMenuLink &&
    css`
      font-size: 40px;
      pointer-events: ${(props) => (props.$menuActive ? "auto" : "none")};
    `}

  &.active {
    border-bottom: 1.5px solid
      ${(props) => (props.$theme ? _var.mono_000 : _var.mono_010)};

    ${(props) =>
      props.$mobileMenuLink &&
      css`
        border-bottom: 4px solid
          ${(props) => (props.$theme ? _var.mono_000 : _var.mono_010)};
      `}
  }
`;

export default function NavLink({
  children,
  link,
  active,
  theme,
  mobileMenuLink,
  menuActive,
  index,
}) {
  const [isNavigating, setIsNavigating] = useState(false);

  const router = useRouter();

  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const handleClick = (event, link) => {
    event.preventDefault();

    if (link === "/" && router.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setIsNavigating(true);
      document.body.classList.add("page-exit-transition");

      setTimeout(() => {
        router.push(link);
      }, 1000);
    }
  };

  useEffect(() => {
    document.body.classList.remove("page-exit-transition");
  }, []);

  return (
    <CustomLink
      href={link}
      className={active ? "active" : ""}
      onMouseEnter={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler("")}
      $theme={theme}
      $mobileMenuLink={mobileMenuLink}
      $menuActive={menuActive}
      $index={index}
      onClick={(event) => handleClick(event, link)}
    >
      {children}
    </CustomLink>
  );
}
