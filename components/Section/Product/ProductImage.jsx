import Image from "next/image";

import styled, { css } from "styled-components";
import * as _var from "../../../styles/variables";

const Placeholder = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100%;
  aspect-ratio: 2 / 3;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function ProductImages({ img }) {
  return (
    <Placeholder>
      <Image
        src={img}
        placeholder="blur"
        style={{ objectFit: "cover" }}
        alt="Picture of the author"
      />
    </Placeholder>
  );
}
