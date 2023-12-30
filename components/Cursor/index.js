import React, { useContext } from "react";
import styled from "styled-components";
import * as _var from "../../styles/variables";
import useMousePosition from "../../hooks/useMousePosition";
import { MouseContext } from "../../context/mouseContext";

const animationDuration = "150ms";

const Svg = styled.svg`
  position: fixed;
  width: 32px;
  height: 32px;
  z-index: 911;
  pointer-events: none;
  fill: black;
  border: 1px solid black;
  border-radius: 64px;
  transform-origin: center;
  transform: translate(-16px, -16px) rotate(0deg) scale(1);
  -webkit-transition-duration: ${animationDuration};
  transition-duration: ${animationDuration};
  -webkit-transition-timing-function: ${_var.cubicBezier};
  transition-timing-function: ${_var.cubicBezier};
  transition: ${animationDuration} ${_var.cubicBezier};
  transition-property: fill, transform;
  will-change: transform;

  &.active {
    fill: white;
    transform: translate(-16px, -16px) rotate(90deg) scale(1.2);
  }
`;

const Cursor = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 32 32"
      width="32px"
      height="32px"
      style={{ left: `${x}px`, top: `${y}px` }}
      className={cursorType === "hovered" ? "active" : ""}
    >
      <g>
        <circle className="st0" cx="16" cy="16" r="16" />
        <path
          style={{ fill: "white", mixBlendMode: "difference" }}
          d="M17.2,17.2c0.2,2,1.2,4,2.8,5.6l-1.6,1.6c-1-1-1.8-2.2-2.4-3.4c-0.6,1.2-1.4,2.4-2.4,3.4L12,22.8
		c1.6-1.6,2.6-3.6,2.8-5.6C14.8,17.2,17.2,17.2,17.2,17.2z M10.2,21.2c2.8-2.8,2.8-7.4,0-10.2l-1.6,1.6c2,2,2,5,0,6.8L10.2,21.2
		L10.2,21.2z M21.8,21.2c-2.8-2.8-2.8-7.4,0-10.2l1.6,1.6c-2,2-2,5,0,6.8L21.8,21.2L21.8,21.2z M14.8,14.8c-0.2-2-1.2-4-2.8-5.6
		l1.6-1.6c1,1,1.8,2,2.4,3.2c0.6-1.2,1.4-2.4,2.4-3.4L20,9.2c-1.6,1.6-2.4,3.6-2.8,5.6H14.8L14.8,14.8z"
        />
      </g>
    </Svg>
  );
};

export default Cursor;
