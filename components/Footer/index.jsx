import React, { useContext } from "react";
import { MouseContext } from "../../context/mouseContext";

import Link from "next/link";
import styled, { css } from "styled-components";
import * as _var from "../../styles/variables";

import { H5 } from "../typefaces";
import Logo from "../Header/Logo";

const Container = styled.footer`
  display: grid;
  grid-template-columns: 304px 1fr 304px;
  background: ${_var.mono_000};
  color: ${_var.mono_010};
  padding: ${_var.space_L};

  ${(props) =>
    props.$footerLight &&
    css`
      background: ${(props) => (props.$theme ? _var.mono_010 : _var.mono_000)};
      transition: background 200ms ${_var.cubicBezier};

      & div > a > svg {
        fill: ${(props) => (props.$theme ? _var.mono_000 : _var.mono_010)};
      }
    `}

  @media ${_var.device.tablet_max} {
    grid-template-columns: 1fr;
    padding-bottom: ${_var.space_L};
  }

  & span:nth-child(1) {
    justify-self: start;
    padding-top: ${_var.space_S};
    order: 1;

    @media ${_var.device.tablet_max} {
      justify-self: center;
      order: 2;
      padding-top: ${_var.space_S};
    }
  }

  & div:nth-child(2) {
    justify-self: center;
    order: 2;
    & a {
      cursor: none;
    }

    @media ${_var.device.tablet_max} {
      order: 1;

      & a {
        cursor: pointer;
      }
    }
  }

  & span:nth-child(3) {
    justify-self: end;
    padding-top: ${_var.space_S};
    order: 3;

    @media ${_var.device.tablet_max} {
      justify-self: center;
      padding-top: ${_var.space_S};
    }
  }
`;

export default function Footer({ footerLight, theme }) {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <Container $footerLight={footerLight} $theme={theme}>
      <span>
        <H5
          style={{
            color:
              footerLight && theme ? `${_var.mono_000}` : `${_var.mono_010}`,
          }}
        >
          Hextra Skateboarding
        </H5>
      </span>
      <div>
        <Link
          href="/"
          aria-label="home"
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <Logo />
        </Link>
      </div>
      <span>
        <H5
          style={{
            color:
              footerLight && theme ? `${_var.mono_000}` : `${_var.mono_010}`,
          }}
        >
          contact@hextraskateboarding.com
        </H5>
      </span>
    </Container>
  );
}
