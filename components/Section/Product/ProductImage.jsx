import Image from "next/image";

import styled, { css } from "styled-components";
import * as _var from "../../../styles/variables";

const Placeholder = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 0.67;

  & img {
    width: 100%;
    height: 100%;
  }

  @media ${_var.device.tablet_max} {
    max-width: 100%;
  }
`;

export default function ProductImages({ img }) {
  return (
    <Placeholder>
      <Image src={img} fill placeholder="blur" alt="Picture of the author" />
    </Placeholder>
  );
}
