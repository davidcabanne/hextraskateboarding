import styled, { css } from "styled-components";
import * as _var from "@/styles/variables";

export const H1 = styled.h1`
  font-size: 48px;
  font-weight: 600;
  line-height: 0.9;
  text-transform: capitalize;

  @media ${_var.device.tablet_max} {
    font-size: 40px;
  }
  @media ${_var.device.mobileL_max} {
    font-size: 32px;
  }
`;

export const H2 = styled.h2`
  font-size: 40px;
  font-weight: 400;
  line-height: 1.25;

  @media ${_var.device.tablet_max} {
    font-size: 32px;
  }
  @media ${_var.device.mobileL_max} {
    font-size: 24px;
  }
`;

export const H3 = styled.h3`
  font-size: 32px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 1.3;

  @media ${_var.device.tablet_max} {
    font-size: 24px;
  }
  @media ${_var.device.mobileL_max} {
    font-size: 20px;
  }
`;

export const H4 = styled.h4`
  font-size: 24px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0;

  @media ${_var.device.tablet_max} {
    font-size: 20px;
  }
  @media ${_var.device.mobileL_max} {
    font-size: 16px;
  }
`;

export const H5 = styled.h5`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.45;
  letter-spacing: 0;

  @media ${_var.device.tablet_max} {
    font-size: 16px;
  }
  @media ${_var.device.mobileL_max} {
    font-size: 14px;
  }
`;
