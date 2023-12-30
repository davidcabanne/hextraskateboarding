import useElementOnScreen from "../../../hooks/useElementOnScreen";

import styled, { css } from "styled-components";
import * as _var from "../../../styles/variables";

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${_var.space_XS};
  align-items: ${(props) => (props.$alignRight ? "flex-end" : "flex-start")};
  text-align: ${(props) => (props.$alignRight ? "end" : "start")};
  padding: ${_var.space_L} ${_var.space_L} 0px ${_var.space_L};

  ${_var.revealAnimation}

  & h2 {
    max-width: 24ch;
  }

  @media ${_var.device.tablet_max} {
    align-items: flex-start;
    text-align: start;
    padding: ${_var.space_M} 0px;
  }
  @media ${_var.device.mobileL_max} {
    padding: ${_var.space_S} 0px;
  }
`;

export default function VideoText({ children, alignRight }) {
  // HOOK
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: _var.rootMargin,
    threshold: _var.threshold,
  });
  return (
    <Text
      ref={containerRef}
      $alignRight={alignRight}
      className={isVisible ? "active" : ""}
    >
      {children}
    </Text>
  );
}
