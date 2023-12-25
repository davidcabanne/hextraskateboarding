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

  @media ${_var.device.tablet_max} {
    grid-template-columns: 1fr;
    padding-bottom: ${_var.space_XL};
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

    @media ${_var.device.tablet_max} {
      order: 1;
    }
  }

  & span:nth-child(3) {
    justify-self: end;
    padding-top: ${_var.space_S};
    order: 3;

    @media ${_var.device.tablet_max} {
      justify-self: center;
      padding-top: ${_var.space_L};
    }
  }
`;

export default function Footer() {
  return (
    <Container>
      <span>
        <H5>Hextra Skateboarding</H5>
      </span>
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <span>
        <H5>contact@hextraskateboarding.com</H5>
      </span>
    </Container>
  );
}
