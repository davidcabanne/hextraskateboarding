import React, { useContext } from "react";
import { MouseContext } from "@/context/mouseContext";

import styled, { css } from "styled-components";
import * as _var from "@/styles/variables";
import NavLink from "../Header/NavLink";
import { H2 } from "@/components/typefaces";

const Container = styled(NavLink)`
  color: inherit;
  cursor: none;
  text-decoration-color: ${(props) =>
    props.$theme ? _var.mono_000 : _var.mono_010};

  @media ${_var.device.tablet_max} {
    cursor: pointer;
  }
`;

export default function ButtonPrimary({ theme, link, ariaLabel }) {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <Container link={link} aria-label={ariaLabel} $theme={theme}>
        <H2
          style={{ fontStyle: "italic", textTransform: 'none', textDecoration: "underline" }}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          En savoir plus
        </H2>
    </Container>
  );
}
