import styled, { css } from "styled-components";
import * as _var from "../../styles/variables";

import { H5 } from "../typefaces";
import Logo from "../Header/Logo";

const Container = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: ${_var.mono_000};
  color: ${_var.mono_010};
  padding: ${_var.space_L};

  & span:nth-child(1) {
    justify-self: start;
    padding-top: ${_var.space_S};
  }

  & div:nth-child(2) {
    justify-self: center;
  }

  & span:nth-child(3) {
    justify-self: end;
    padding-top: ${_var.space_S};
  }
`;

export default function Footer() {
  return (
    <Container>
      <span>
        <H5>Hextra Skateboarding</H5>
      </span>
      <div>
        <Logo light />
      </div>
      <span>
        <H5>contact@hextraskateboarding.com</H5>
      </span>
    </Container>
  );
}
