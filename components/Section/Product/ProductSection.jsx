import React from "react";
import styled, { css } from "styled-components";
import * as _var from "../../../styles/variables";

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: ${(props) => (props.$alignRight ? "flex-end" : "flex-start")};
  padding: ${_var.space_L};

  @media ${_var.device.tablet_max} {
    align-items: flex-start;
    padding: ${_var.space_M};
  }
  @media ${_var.device.mobileL_max} {
    padding: ${_var.space_S};
    align-items: flex-start;
  }
`;

export default function ProductSection({ children, alignRight }) {
  return <Container $alignRight={alignRight}>{children}</Container>;
}
