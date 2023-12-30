import styled, { css } from "styled-components";
import * as _var from "../../../styles/variables";

const Images = styled.div`
  position: relative;
  display: flex;
  gap: ${_var.space_L};

  @media ${_var.device.tablet_max} {
    gap: ${_var.space_M};
  }

  @media ${_var.device.mobileL_max} {
    gap: ${_var.space_S};
  }
`;

export default function ProductImages({ children }) {
  return <Images>{children}</Images>;
}
