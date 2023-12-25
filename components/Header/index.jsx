import styled from "styled-components";
import * as _var from "@/styles/variables";

import Logo from "./Logo";

const Container = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 900;
`;

const Nav = styled.nav`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${_var.space_M};
  padding-bottom: ${_var.space_M};
  margin: 0px ${_var.space_L};
  z-index: 1;

  @media ${_var.device.tablet_max} {
    padding-top: ${_var.space_S};
    padding-bottom: ${_var.space_S};
    margin: 0px ${_var.space_M};
  }

  @media ${_var.device.mobileL_max} {
    padding-top: ${_var.space_S};
    padding-bottom: ${_var.space_S};
    margin: 0px ${_var.space_S};
  }
`;

export default function Header() {
  return (
    <Container>
      <Nav>
        <Logo header />
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m12 22c5.5228475 0 10-4.4771525 10-10s-4.4771525-10-10-10-10 4.4771525-10 10 4.4771525 10 10 10zm0-1.5v-17c4.6944204 0 8.5 3.80557963 8.5 8.5 0 4.6944204-3.8055796 8.5-8.5 8.5z"
            fill="#212121"
          />
        </svg>
      </Nav>
    </Container>
  );
}
