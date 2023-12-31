import styled, { css } from "styled-components";
import * as _var from "../../../styles/variables";

import useElementOnScreen from "../../../hooks/useElementOnScreen";

const Images = styled.div`
  position: relative;
  display: flex;
  gap: ${_var.space_L};

  ${_var.revealAnimation}

  @media ${_var.device.tablet_max} {
    gap: ${_var.space_M};
  }

  @media ${_var.device.mobileL_max} {
    gap: ${_var.space_S};
  }
`;

export default function ProductImages({ children }) {
  // HOOK
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: _var.rootMargin,
    threshold: _var.threshold,
  });
  return (
    <Images ref={containerRef} className={isVisible ? "active" : ""}>
      {children}
    </Images>
  );
}
