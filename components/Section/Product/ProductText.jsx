import useElementOnScreen from "../../../hooks/useElementOnScreen";

import styled, { css } from "styled-components";
import * as _var from "../../../styles/variables";

const Text = styled.div`
  display: flex;
  flex-direction: column;

  gap: ${_var.space_XS};
  text-align: ${(props) => (props.$alignRight ? "start" : "end")};
  padding: ${_var.space_L} ${_var.space_L} 0px ${_var.space_L};
  max-width: 68ch;

  ${_var.revealAnimation}

  @media ${_var.device.tablet_max} {
    text-align: start;
    padding: ${_var.space_M} 0;
    max-width: 50ch;
  }

  @media ${_var.device.mobileL_max} {
    text-align: start;
    padding: ${_var.space_S} 0px;
  }
`;

export default function ProductText({ children, alignRight }) {
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
