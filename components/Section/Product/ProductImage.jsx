import Image from "next/image";

import styled, { css } from "styled-components";
import * as _var from "../../../styles/variables";

const Placeholder = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 13 / 18;

  & img {
    width: 100%;
    height: 100%;
  }
`;

export default function ProductImages({ img }) {
  return (
    <Placeholder>
      <Image
        src={img}
        placeholder="blur"
        alt="Picture of the author"
        fill
        sizes="100%"
      />
    </Placeholder>
  );
}
