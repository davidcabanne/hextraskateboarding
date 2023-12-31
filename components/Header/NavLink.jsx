import React, { useContext } from "react";
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

  ${(props) => props.mobileMenuLink && css``}

  &.active {
    border-bottom: 1px solid
      ${(props) => (props.$theme ? _var.mono_000 : _var.mono_010)};
  }
`;

export default function NavLink({
  children,
  link,
  active,
  theme,
  mobileMenuLink,
}) {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <CustomLink
      href={link}
      style={{ cursor: "none" }}
      className={active ? "active" : ""}
      onMouseEnter={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler("")}
      $theme={theme}
      mobileMenuLink={mobileMenuLink}
    >
      {children}
    </CustomLink>
  );
}
