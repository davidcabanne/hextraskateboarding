import React, { useState, useEffect, useContext } from "react";
import { MouseContext } from "@/context/mouseContext";

import Link from "next/link";
import styled from "styled-components";
import * as _var from "@/styles/variables";

const CustomLink = styled(Link)`
  color: inherit;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  line-height: 0;
`;

export default function NavLink({ children, link }) {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <CustomLink
      href={link}
      style={{ cursor: "none" }}
      onMouseEnter={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler("")}
    >
      {children}
    </CustomLink>
  );
}
