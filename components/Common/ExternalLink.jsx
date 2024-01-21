import React, { useContext } from "react";
import { MouseContext } from "@/context/mouseContext";

import styled, { css } from "styled-components";
import * as _var from "@/styles/variables";

const CustomLink = styled.a`
  text-decoration: none;
  cursor: none;

  @media ${_var.device.tablet_max} {
    cursor: pointer;
  }
`;

export default function NavLink({ link, children }) {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <CustomLink
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler("")}
    >
      {children}
    </CustomLink>
  );
}
