import styled from "styled-components";
import * as _var from "@/styles/variables";

import Logo from "./Logo";

const Container = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 900;
`;

const Nav = styled.nav`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${_var.space_L};
  margin: 0px ${_var.space_L};
  mix-blend-mode: difference;
`;

export default function Header() {
  return (
    <Container>
      <Nav>
        <Logo />
        <span>DARK MODE</span>
      </Nav>
    </Container>
  );
}
