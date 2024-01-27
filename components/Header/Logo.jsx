import React from "react";
import styled, { css } from "styled-components";
import * as _var from "@/styles/variables";

const Svg = styled.svg`
  width: 32px;
  height: 40px;
  fill: ${(props) => (props.$theme ? _var.mono_000 : _var.mono_010)};
  transition: fill 200ms ${_var.cubicBezier};

  @media ${_var.device.tablet_max} {
    fill: ${(props) => (props.$theme ? _var.mono_010 : _var.mono_000)};

    ${(props) =>
      props.$logoMobile &&
      css`
        fill: ${(props) => (props.$theme ? _var.mono_000 : _var.mono_001)};
      `}
  }
`;

export default function Logo({ theme, logoMobile }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 461.6 529.8"
      $theme={theme}
      $logoMobile={logoMobile}
      aria-label="hextra skateboarding homepage"
    >
      <path
        d="M270.1,301.9c7.9,64.4,36.6,126.7,86,176.1l-51.8,51.8c-31.1-31.1-55.6-66.4-73.5-104
        c-17.9,37.6-42.4,72.9-73.5,104L105.4,478c49.4-49.4,78.1-111.7,86-176.1H270.1z M52.4,425c88.4-88.4,88.4-231.7,0-320.1L0,157.2
        c59.5,59.5,59.5,155.9,0,215.3L52.4,425L52.4,425z M409.2,425c-88.4-88.4-88.4-231.7,0-320.1l52.4,52.4
        c-59.5,59.5-59.5,155.9,0,215.3L409.2,425L409.2,425z M191.4,227.9c-7.9-64.4-36.6-126.7-86-176.1L157.2,0
        c31.1,31.1,55.6,66.4,73.5,104c17.9-37.6,42.4-72.9,73.5-104l51.8,51.8c-49.4,49.4-78.1,111.7-86,176.1H191.4L191.4,227.9z"
      />
    </Svg>
  );
}
