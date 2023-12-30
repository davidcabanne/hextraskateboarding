import Image from "next/image";
import useElementOnScreen from "../../../hooks/useElementOnScreen";

import styled, { css } from "styled-components";
import * as _var from "../../../styles/variables";

const Placeholder = styled.div`
  width: 100%;
  max-width: 600px;
  aspect-ratio: 2 / 3;

  ${_var.revealAnimation}
  transition-delay: ${(props) => (props.$index === 0 ? "0ms" : "10ms")};

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function ProductImages({ img, index }) {
  // HOOK
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: _var.rootMargin,
    threshold: _var.threshold,
  });
  return (
    <Placeholder
      ref={containerRef}
      className={isVisible ? "active" : ""}
      $index={index}
    >
      <Image
        src={img}
        placeholder="blur"
        style={{ objectFit: "cover" }}
        alt="Picture of the author"
      />
    </Placeholder>
  );
}
