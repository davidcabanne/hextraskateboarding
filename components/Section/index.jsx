import React from "react";
import Image from "next/image";
import styled, { css } from "styled-components";
import * as _var from "../../styles/variables";

import Placeholder from "./Placeholder";

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${_var.space_L};

  @media ${_var.device.tablet_max} {
    padding: ${_var.space_M};
  }

  @media ${_var.device.mobileL_max} {
    padding: ${_var.space_S};
  }

  ${(props) =>
    props.$fullScreen &&
    css`
      padding: ${_var.space_L} 0px;

      @media ${_var.device.tablet_max} {
        min-height: 50vh;
        min-height: 50dvh;
        padding: ${_var.space_M} 0px;
      }

      @media ${_var.device.mobileL_max} {
        padding: ${_var.space_S} 0px;
      }
    `}

  ${(props) =>
    props.$footer &&
    css`
      padding: ${_var.space_L} 0px 0px 0px;

      @media ${_var.device.tablet_max} {
        min-height: 50vh;
        min-height: 50dvh;
        padding: 0px;
      }
    `}
`;

export default function Section({ fullScreen, footer, img }) {
  return (
    <Container $fullScreen={fullScreen} $footer={footer}>
      <Placeholder footer={footer}>
        <Image
          src={img}
          fill
          style={{ objectFit: "cover" }}
          placeholder="blur"
          alt="Picture of the author"
        />
      </Placeholder>
    </Container>
  );
}
