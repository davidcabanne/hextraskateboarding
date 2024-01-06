import React, { useContext } from "react";
import { MouseContext } from "@/context/mouseContext";

import Link from "next/link";
import styled, { css } from "styled-components";
import * as _var from "@/styles/variables";
import { H2 } from "@/components/typefaces";

const Container = styled(Link)`
  color: inherit;
  cursor: none;
  text-decoration-color: ${(props) =>
    props.$theme ? _var.mono_000 : _var.mono_010};
  & h2 {
    font-style: italic;
  }

  @media ${_var.device.tablet_max} {
    cursor: pointer;
  }
`;

export default function ButtonPrimary({ theme, link, ariaLabel }) {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <Container href={link} aria-label={ariaLabel} $theme={theme}>
      <H2
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        En savoir plus
      </H2>
    </Container>
  );
}
