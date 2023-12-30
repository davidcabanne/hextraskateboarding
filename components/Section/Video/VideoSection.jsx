import React from "react";

import styled, { css } from "styled-components";
import * as _var from "../../../styles/variables";

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${_var.space_L} calc((${_var.space_L} * 4));

  @media ${_var.device.tablet_max} {
    padding: ${_var.space_M} ${_var.space_M};
  }
  @media ${_var.device.mobileL_max} {
    padding: ${_var.space_S} ${_var.space_S} ${_var.space_M} ${_var.space_S};
  }
`;

export default function VideoSection({ children }) {
  return <Container>{children}</Container>;
}
