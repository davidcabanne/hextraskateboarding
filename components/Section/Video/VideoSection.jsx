import React from "react";

import styled, { css } from "styled-components";
import * as _var from "../../../styles/variables";

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${_var.space_L};

  @media ${_var.device.tablet_max} {
    padding: ${_var.space_M} ${_var.space_M};
  }
  @media ${_var.device.mobileL_max} {
    padding: ${_var.space_S} ${_var.space_S} ${_var.space_M} ${_var.space_S};
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100vh;
`;

export default function VideoSection({ children }) {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}
