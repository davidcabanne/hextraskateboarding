import React from "react";
import Image from "next/image";
import styled, { css } from "styled-components";
import * as _var from "../../styles/variables";

import Placeholder from "./Placeholder";
import { H1, H2 } from "../typefaces";

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

  ${(props) =>
    props.$fullScreen &&
    css`
      padding: ${_var.space_L} 0px;
    `}

  ${(props) =>
    props.$footer &&
    css`
      padding: ${_var.space_L} 0px 0px 0px;
    `}
`;

const Group = styled.div`
  position: absolute;
  top: ${_var.space_L};
  right: 0;
  display: flex;
  flex-direction: column;
  gap: ${_var.space_S};
  max-width: 75ch;
  padding: calc(${_var.space_L} * 2);
  color: ${_var.mono_010};
  z-index: 1;
`;

export default function Section({ fullScreen, footer, img }) {
  const handleRenderFooter = () => {
    return (
      <Group>
        <H1>Hextra Skateboarding</H1>
        <H2>
          Du skate, des ondes positives et des produits responsables fabriqués
          localement, en France.
        </H2>
      </Group>
    );
  };

  return (
    <Container $fullScreen={fullScreen} $footer={footer}>
      {footer && handleRenderFooter()}
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
