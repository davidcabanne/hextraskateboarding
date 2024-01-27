import React, { useContext } from "react";
import { MouseContext } from "../../context/mouseContext";

import Link from "next/link";
import styled, { css, keyframes } from "styled-components";
import * as _var from "../../styles/variables";

import { H5 } from "../typefaces";
import Logo from "../Header/Logo";

const Container = styled.footer`
  background: ${_var.mono_000};

  ${(props) =>
    props.$footerLight &&
    css`
      background: ${(props) => (props.$theme ? _var.mono_010 : _var.mono_000)};
      transition: background 200ms ${_var.cubicBezier};
    `}
`;

const slider = keyframes`
0% {
transform: translateX(0vw);
}
100% {
  transform: translateX(-105vw);
}
`;

const Slider = styled.div`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  padding: ${_var.space_XXL} 0px;

  @media ${_var.device.tablet_max} {
    padding: ${_var.space_XL} 0px;
  }

  & div {
    display: flex;
    flex-wrap: nowrap;
    gap: 5vw;
    animation: ${slider} 10000ms linear infinite;
  }

  & svg {
    min-width: 100vw;
    fill: white;

    ${(props) =>
      props.$footerLight &&
      css`
        fill: ${(props) => (props.$theme ? _var.mono_000 : _var.mono_010)};
        transition: fill 200ms ${_var.cubicBezier};
      `}
  }
`;

const Contact = styled.div`
  display: grid;
  grid-template-columns: 304px 1fr 304px;
  color: ${_var.mono_010};
  padding: 0px ${_var.space_L} ${_var.space_L} ${_var.space_L};

  ${(props) =>
    props.$footerLight &&
    css`
      & div > a > svg {
        fill: ${(props) => (props.$theme ? _var.mono_000 : _var.mono_010)};
      }
    `}

  @media ${_var.device.tablet_max} {
    grid-template-columns: 1fr;
    padding-bottom: 0px ${_var.space_L} ${_var.space_L} ${_var.space_L};
  }

  & span:nth-child(1) {
    justify-self: start;
    padding-top: ${_var.space_S};
    order: 1;

    @media ${_var.device.tablet_max} {
      justify-self: center;
      order: 2;
      padding-top: ${_var.space_S};
    }
  }

  & div:nth-child(2) {
    justify-self: center;
    order: 2;
    & a {
      cursor: none;
    }

    @media ${_var.device.tablet_max} {
      order: 1;

      & a {
        cursor: pointer;
      }
    }
  }

  & span:nth-child(3) {
    justify-self: end;
    padding-top: ${_var.space_S};
    order: 3;

    @media ${_var.device.tablet_max} {
      justify-self: center;
      padding-top: ${_var.space_S};
    }
  }
`;

export default function Footer({ footerLight, theme }) {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <Container $footerLight={footerLight} $theme={theme}>
      <Slider $footerLight={footerLight} $theme={theme}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 908.17 91.49"
          >
            <g>
              <g>
                <path d="M41.18,68.93V38.88H7.39v30.05H0V2.5h7.39v29.76h33.79V2.5h7.3v66.43H41.18z" />
                <path
                  d="M95.71,62.98l2.78-0.29l0.19,5.66c-7.3,1.02-13.54,1.54-18.72,1.54c-6.91,0-11.81-2-14.69-6
			c-2.88-4-4.32-10.22-4.32-18.67c0-16.83,6.69-25.25,20.06-25.25c6.46,0,11.3,1.81,14.5,5.42c3.2,3.62,4.8,9.3,4.8,17.04
			l-0.38,5.47H68.26c0,5.31,0.96,9.25,2.88,11.81c1.92,2.56,5.26,3.84,10.03,3.84C85.93,63.55,90.78,63.36,95.71,62.98z
			 M93.12,42.14c0-5.89-0.94-10.05-2.83-12.48c-1.89-2.43-4.96-3.65-9.22-3.65c-4.26,0-7.46,1.28-9.6,3.84
			c-2.15,2.56-3.25,6.66-3.31,12.29H93.12z"
                />
                <path
                  d="M106.37,20.93h7.87l11.71,18.82l11.71-18.82h7.87l-15.26,23.81l15.17,24.19h-7.87l-11.62-18.72l-11.71,18.72h-7.87
			l15.07-24L106.37,20.93z"
                />
                <path
                  d="M179.42,27.17h-15.26v22.94c0,5.5,0.4,9.12,1.2,10.85c0.8,1.73,2.7,2.59,5.71,2.59l8.54-0.58l0.48,5.95
			c-4.29,0.7-7.55,1.06-9.79,1.06c-4.99,0-8.45-1.22-10.37-3.65c-1.92-2.43-2.88-7.07-2.88-13.92V27.17h-6.82v-6.24h6.82V6.24h7.1
			v14.69h15.26V27.17z"
                />
                <path
                  d="M188.25,68.93v-48h7.1v6.53c5.57-3.84,11.42-6.37,17.57-7.58v7.3c-2.69,0.51-5.49,1.31-8.4,2.4
			c-2.91,1.09-5.14,2.05-6.67,2.88l-2.4,1.25v35.23H188.25z"
                />
                <path
                  d="M255.36,35.42V60c0.19,2.37,2.05,3.78,5.57,4.22l-0.29,5.66c-5.06,0-8.87-1.28-11.42-3.84
			c-5.76,2.56-11.52,3.84-17.28,3.84c-4.42,0-7.78-1.25-10.08-3.74c-2.3-2.5-3.46-6.08-3.46-10.75c0-4.67,1.18-8.11,3.55-10.32
			c2.37-2.21,6.08-3.57,11.14-4.08l15.07-1.44v-4.13c0-3.26-0.71-5.6-2.11-7.01c-1.41-1.41-3.33-2.11-5.76-2.11
			c-5.12,0-10.43,0.32-15.94,0.96l-2.98,0.29l-0.29-5.47c7.04-1.41,13.28-2.11,18.72-2.11c5.44,0,9.39,1.25,11.86,3.74
			C254.12,26.21,255.36,30.11,255.36,35.42z M225.79,55.01c0,5.89,2.43,8.83,7.3,8.83c4.35,0,8.64-0.74,12.86-2.21l2.21-0.77V45.02
			l-14.21,1.34c-2.88,0.26-4.96,1.09-6.24,2.5C226.43,50.27,225.79,52.32,225.79,55.01z"
                />
                <path
                  d="M310.27,7.97c-9.6,0-14.4,3.62-14.4,10.85c0,4.03,1.1,6.8,3.31,8.3c2.21,1.5,6.69,3.01,13.44,4.51
			c6.75,1.5,11.53,3.46,14.35,5.86c2.82,2.4,4.22,6.35,4.22,11.86c0,13.63-7.07,20.45-21.22,20.45c-4.67,0-10.53-0.54-17.57-1.63
			l-3.46-0.48l0.77-6.14c8.7,1.15,15.33,1.73,19.87,1.73c9.47,0,14.21-4.45,14.21-13.34c0-3.58-1.04-6.16-3.12-7.73
			c-2.08-1.57-5.97-2.9-11.66-3.98c-7.49-1.6-12.8-3.66-15.94-6.19c-3.14-2.53-4.7-6.77-4.7-12.72c0-11.9,7.14-17.86,21.41-17.86
			c4.67,0,10.27,0.48,16.8,1.44l3.26,0.48l-0.67,6.24C320.28,8.51,313.98,7.97,310.27,7.97z"
                />
                <path
                  d="M349.91,68.93h-7.2V0h7.2v40.7l7.49-0.38l13.73-19.39h8.16l-15.65,22.08l16.32,25.92h-8.16l-14.3-22.27l-7.58,0.29V68.93z
			"
                />
                <path
                  d="M422.3,35.42V60c0.19,2.37,2.05,3.78,5.57,4.22l-0.29,5.66c-5.06,0-8.87-1.28-11.42-3.84
			c-5.76,2.56-11.52,3.84-17.28,3.84c-4.42,0-7.78-1.25-10.08-3.74c-2.3-2.5-3.46-6.08-3.46-10.75c0-4.67,1.18-8.11,3.55-10.32
			c2.37-2.21,6.08-3.57,11.14-4.08l15.07-1.44v-4.13c0-3.26-0.71-5.6-2.11-7.01c-1.41-1.41-3.33-2.11-5.76-2.11
			c-5.12,0-10.43,0.32-15.94,0.96l-2.98,0.29l-0.29-5.47c7.04-1.41,13.28-2.11,18.72-2.11c5.44,0,9.39,1.25,11.86,3.74
			C421.07,26.21,422.3,30.11,422.3,35.42z M392.73,55.01c0,5.89,2.43,8.83,7.3,8.83c4.35,0,8.64-0.74,12.86-2.21l2.21-0.77V45.02
			l-14.21,1.34c-2.88,0.26-4.96,1.09-6.24,2.5C393.37,50.27,392.73,52.32,392.73,55.01z"
                />
                <path
                  d="M461.37,27.17h-15.26v22.94c0,5.5,0.4,9.12,1.2,10.85c0.8,1.73,2.7,2.59,5.71,2.59l8.54-0.58l0.48,5.95
			c-4.29,0.7-7.55,1.06-9.79,1.06c-4.99,0-8.45-1.22-10.37-3.65c-1.92-2.43-2.88-7.07-2.88-13.92V27.17h-6.82v-6.24H439V6.24h7.1
			v14.69h15.26V27.17z"
                />
                <path
                  d="M502.84,62.98l2.78-0.29l0.19,5.66c-7.3,1.02-13.54,1.54-18.72,1.54c-6.91,0-11.81-2-14.69-6
			c-2.88-4-4.32-10.22-4.32-18.67c0-16.83,6.69-25.25,20.06-25.25c6.46,0,11.29,1.81,14.5,5.42c3.2,3.62,4.8,9.3,4.8,17.04
			l-0.38,5.47h-31.68c0,5.31,0.96,9.25,2.88,11.81c1.92,2.56,5.26,3.84,10.03,3.84C493.06,63.55,497.91,63.36,502.84,62.98z
			 M500.25,42.14c0-5.89-0.95-10.05-2.83-12.48c-1.89-2.43-4.96-3.65-9.22-3.65c-4.26,0-7.46,1.28-9.6,3.84
			c-2.14,2.56-3.25,6.66-3.31,12.29H500.25z"
                />
                <path
                  d="M539.9,19.97c6.46,0,10.99,1.84,13.58,5.52c2.59,3.68,3.89,10.13,3.89,19.34c0,9.22-1.62,15.7-4.85,19.44
			c-3.23,3.74-9.17,5.62-17.81,5.62c-2.69,0-7.14-0.26-13.34-0.77l-2.69-0.29V0h7.1v23.33C530.65,21.09,535.35,19.97,539.9,19.97z
			 M534.62,63.46c6.27,0,10.42-1.42,12.43-4.27c2.02-2.85,3.02-7.66,3.02-14.45c0-6.78-0.8-11.54-2.4-14.26
			c-1.6-2.72-4.45-4.08-8.54-4.08c-3.71,0-7.52,0.7-11.42,2.11l-1.92,0.67v33.79C529.94,63.3,532.89,63.46,534.62,63.46z"
                />
                <path
                  d="M567.06,44.83c0-8.77,1.57-15.1,4.7-19.01c3.13-3.9,8.43-5.86,15.89-5.86c7.46,0,12.74,1.95,15.84,5.86
			c3.1,3.9,4.66,10.24,4.66,19.01c0,8.77-1.47,15.14-4.42,19.1c-2.94,3.97-8.32,5.95-16.13,5.95c-7.81,0-13.18-1.98-16.13-5.95
			C568.54,59.97,567.06,53.6,567.06,44.83z M574.46,44.69c0,7.01,0.85,11.92,2.54,14.74c1.69,2.82,5.25,4.22,10.66,4.22
			s8.94-1.39,10.61-4.18c1.66-2.78,2.5-7.69,2.5-14.74c0-7.04-0.93-11.89-2.78-14.54c-1.86-2.66-5.3-3.98-10.32-3.98
			c-5.02,0-8.48,1.33-10.37,3.98C575.4,32.85,574.46,37.68,574.46,44.69z"
                />
                <path
                  d="M653.75,35.42V60c0.19,2.37,2.05,3.78,5.57,4.22l-0.29,5.66c-5.06,0-8.87-1.28-11.42-3.84
			c-5.76,2.56-11.52,3.84-17.28,3.84c-4.42,0-7.78-1.25-10.08-3.74c-2.3-2.5-3.46-6.08-3.46-10.75c0-4.67,1.18-8.11,3.55-10.32
			c2.37-2.21,6.08-3.57,11.14-4.08l15.07-1.44v-4.13c0-3.26-0.71-5.6-2.11-7.01c-1.41-1.41-3.33-2.11-5.76-2.11
			c-5.12,0-10.43,0.32-15.94,0.96l-2.98,0.29l-0.29-5.47c7.04-1.41,13.28-2.11,18.72-2.11c5.44,0,9.39,1.25,11.86,3.74
			C652.52,26.21,653.75,30.11,653.75,35.42z M624.18,55.01c0,5.89,2.43,8.83,7.3,8.83c4.35,0,8.64-0.74,12.86-2.21l2.21-0.77V45.02
			l-14.21,1.34c-2.88,0.26-4.96,1.09-6.24,2.5C624.82,50.27,624.18,52.32,624.18,55.01z"
                />
                <path
                  d="M667.96,68.93v-48h7.1v6.53c5.57-3.84,11.42-6.37,17.57-7.58v7.3c-2.69,0.51-5.49,1.31-8.4,2.4
			c-2.91,1.09-5.14,2.05-6.67,2.88l-2.4,1.25v35.23H667.96z"
                />
                <path
                  d="M736.79,0v68.93h-7.1v-3.26c-4.93,2.82-9.79,4.22-14.59,4.22c-2.56,0-4.8-0.32-6.72-0.96s-3.71-1.79-5.38-3.46
			c-3.46-3.46-5.18-9.84-5.18-19.15s1.55-16.03,4.66-20.16c3.1-4.13,8.24-6.19,15.41-6.19c3.71,0,7.65,0.42,11.81,1.25V0H736.79z
			 M711.83,62.78c1.15,0.45,2.64,0.67,4.46,0.67c1.82,0,3.87-0.3,6.14-0.91c2.27-0.61,4.05-1.2,5.33-1.78l1.92-0.86V27.36
			c-4.1-0.77-7.91-1.15-11.42-1.15c-4.86,0-8.26,1.55-10.18,4.66c-1.92,3.1-2.88,7.92-2.88,14.45c0,7.43,1.12,12.42,3.36,14.98
			C709.59,61.5,710.68,62.34,711.83,62.78z"
                />
                <path d="M750.71,10.08V1.73h7.2v8.35H750.71z M750.71,68.93v-48h7.2v48H750.71z" />
                <path
                  d="M778.93,68.93h-7.2v-48h7.1v3.36c5.18-2.88,10.14-4.32,14.88-4.32c6.4,0,10.7,1.73,12.91,5.18s3.31,9.6,3.31,18.43v25.34
			h-7.1V43.78c0-6.66-0.66-11.22-1.97-13.68c-1.31-2.46-4.11-3.7-8.4-3.7c-2.05,0-4.21,0.3-6.48,0.91c-2.27,0.61-4.02,1.2-5.23,1.78
			l-1.82,0.86V68.93z"
                />
                <path
                  d="M841.81,91.49c-7.68,0-13.04-1.04-16.08-3.12c-3.04-2.08-4.56-5.87-4.56-11.38c0-2.62,0.58-4.75,1.73-6.38
			c1.15-1.63,3.1-3.47,5.86-5.52c-1.79-1.22-2.69-3.42-2.69-6.62c0-1.09,0.8-3.1,2.4-6.05l0.86-1.54c-5.06-2.3-7.58-7.14-7.58-14.5
			c0-10.94,5.98-16.42,17.95-16.42c3.07,0,5.92,0.32,8.54,0.96l1.44,0.29l14.21-0.38v6.14l-9.12-0.19c2.11,2.11,3.17,5.31,3.17,9.6
			c0,6.02-1.49,10.22-4.46,12.62c-2.98,2.4-7.66,3.6-14.06,3.6c-1.73,0-3.3-0.13-4.7-0.38c-1.15,2.82-1.73,4.64-1.73,5.47
			c0,1.98,0.61,3.22,1.82,3.7s4.9,0.72,11.04,0.72c6.14,0,10.56,0.96,13.25,2.88c2.69,1.92,4.03,5.66,4.03,11.23
			C863.12,86.4,856.02,91.49,841.81,91.49z M828.28,76.42c0,3.39,0.94,5.74,2.83,7.06c1.89,1.31,5.38,1.97,10.46,1.97
			s8.74-0.71,10.94-2.11c2.21-1.41,3.31-3.76,3.31-7.06c0-3.3-0.8-5.42-2.4-6.38c-1.6-0.96-4.74-1.44-9.41-1.44l-10.37-0.48
			c-2.11,1.54-3.54,2.88-4.27,4.03C828.64,73.15,828.28,74.62,828.28,76.42z M828.95,36.38c0,3.78,0.85,6.46,2.54,8.06
			c1.7,1.6,4.5,2.4,8.4,2.4c3.9,0,6.69-0.8,8.35-2.4c1.66-1.6,2.5-4.3,2.5-8.11c0-3.81-0.83-6.51-2.5-8.11
			c-1.67-1.6-4.45-2.4-8.35-2.4c-3.9,0-6.7,0.82-8.4,2.45C829.8,29.9,828.95,32.61,828.95,36.38z"
                />
              </g>
              <g>
                <polygon points="869.73,3.04 876.02,3.04 876.02,21.43 879.26,21.43 879.26,3.04 885.5,3.04 885.5,0 869.73,0 		" />
                <polygon
                  points="903.21,0 897.78,16.2 892.35,0 887.39,0 887.39,21.43 890.66,21.43 890.66,4.71 896.15,20.69 899.41,20.69
			904.9,4.71 904.9,21.43 908.17,21.43 908.17,0 		"
                />
              </g>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 908.17 91.49"
          >
            <g>
              <g>
                <path d="M41.18,68.93V38.88H7.39v30.05H0V2.5h7.39v29.76h33.79V2.5h7.3v66.43H41.18z" />
                <path
                  d="M95.71,62.98l2.78-0.29l0.19,5.66c-7.3,1.02-13.54,1.54-18.72,1.54c-6.91,0-11.81-2-14.69-6
			c-2.88-4-4.32-10.22-4.32-18.67c0-16.83,6.69-25.25,20.06-25.25c6.46,0,11.3,1.81,14.5,5.42c3.2,3.62,4.8,9.3,4.8,17.04
			l-0.38,5.47H68.26c0,5.31,0.96,9.25,2.88,11.81c1.92,2.56,5.26,3.84,10.03,3.84C85.93,63.55,90.78,63.36,95.71,62.98z
			 M93.12,42.14c0-5.89-0.94-10.05-2.83-12.48c-1.89-2.43-4.96-3.65-9.22-3.65c-4.26,0-7.46,1.28-9.6,3.84
			c-2.15,2.56-3.25,6.66-3.31,12.29H93.12z"
                />
                <path
                  d="M106.37,20.93h7.87l11.71,18.82l11.71-18.82h7.87l-15.26,23.81l15.17,24.19h-7.87l-11.62-18.72l-11.71,18.72h-7.87
			l15.07-24L106.37,20.93z"
                />
                <path
                  d="M179.42,27.17h-15.26v22.94c0,5.5,0.4,9.12,1.2,10.85c0.8,1.73,2.7,2.59,5.71,2.59l8.54-0.58l0.48,5.95
			c-4.29,0.7-7.55,1.06-9.79,1.06c-4.99,0-8.45-1.22-10.37-3.65c-1.92-2.43-2.88-7.07-2.88-13.92V27.17h-6.82v-6.24h6.82V6.24h7.1
			v14.69h15.26V27.17z"
                />
                <path
                  d="M188.25,68.93v-48h7.1v6.53c5.57-3.84,11.42-6.37,17.57-7.58v7.3c-2.69,0.51-5.49,1.31-8.4,2.4
			c-2.91,1.09-5.14,2.05-6.67,2.88l-2.4,1.25v35.23H188.25z"
                />
                <path
                  d="M255.36,35.42V60c0.19,2.37,2.05,3.78,5.57,4.22l-0.29,5.66c-5.06,0-8.87-1.28-11.42-3.84
			c-5.76,2.56-11.52,3.84-17.28,3.84c-4.42,0-7.78-1.25-10.08-3.74c-2.3-2.5-3.46-6.08-3.46-10.75c0-4.67,1.18-8.11,3.55-10.32
			c2.37-2.21,6.08-3.57,11.14-4.08l15.07-1.44v-4.13c0-3.26-0.71-5.6-2.11-7.01c-1.41-1.41-3.33-2.11-5.76-2.11
			c-5.12,0-10.43,0.32-15.94,0.96l-2.98,0.29l-0.29-5.47c7.04-1.41,13.28-2.11,18.72-2.11c5.44,0,9.39,1.25,11.86,3.74
			C254.12,26.21,255.36,30.11,255.36,35.42z M225.79,55.01c0,5.89,2.43,8.83,7.3,8.83c4.35,0,8.64-0.74,12.86-2.21l2.21-0.77V45.02
			l-14.21,1.34c-2.88,0.26-4.96,1.09-6.24,2.5C226.43,50.27,225.79,52.32,225.79,55.01z"
                />
                <path
                  d="M310.27,7.97c-9.6,0-14.4,3.62-14.4,10.85c0,4.03,1.1,6.8,3.31,8.3c2.21,1.5,6.69,3.01,13.44,4.51
			c6.75,1.5,11.53,3.46,14.35,5.86c2.82,2.4,4.22,6.35,4.22,11.86c0,13.63-7.07,20.45-21.22,20.45c-4.67,0-10.53-0.54-17.57-1.63
			l-3.46-0.48l0.77-6.14c8.7,1.15,15.33,1.73,19.87,1.73c9.47,0,14.21-4.45,14.21-13.34c0-3.58-1.04-6.16-3.12-7.73
			c-2.08-1.57-5.97-2.9-11.66-3.98c-7.49-1.6-12.8-3.66-15.94-6.19c-3.14-2.53-4.7-6.77-4.7-12.72c0-11.9,7.14-17.86,21.41-17.86
			c4.67,0,10.27,0.48,16.8,1.44l3.26,0.48l-0.67,6.24C320.28,8.51,313.98,7.97,310.27,7.97z"
                />
                <path
                  d="M349.91,68.93h-7.2V0h7.2v40.7l7.49-0.38l13.73-19.39h8.16l-15.65,22.08l16.32,25.92h-8.16l-14.3-22.27l-7.58,0.29V68.93z
			"
                />
                <path
                  d="M422.3,35.42V60c0.19,2.37,2.05,3.78,5.57,4.22l-0.29,5.66c-5.06,0-8.87-1.28-11.42-3.84
			c-5.76,2.56-11.52,3.84-17.28,3.84c-4.42,0-7.78-1.25-10.08-3.74c-2.3-2.5-3.46-6.08-3.46-10.75c0-4.67,1.18-8.11,3.55-10.32
			c2.37-2.21,6.08-3.57,11.14-4.08l15.07-1.44v-4.13c0-3.26-0.71-5.6-2.11-7.01c-1.41-1.41-3.33-2.11-5.76-2.11
			c-5.12,0-10.43,0.32-15.94,0.96l-2.98,0.29l-0.29-5.47c7.04-1.41,13.28-2.11,18.72-2.11c5.44,0,9.39,1.25,11.86,3.74
			C421.07,26.21,422.3,30.11,422.3,35.42z M392.73,55.01c0,5.89,2.43,8.83,7.3,8.83c4.35,0,8.64-0.74,12.86-2.21l2.21-0.77V45.02
			l-14.21,1.34c-2.88,0.26-4.96,1.09-6.24,2.5C393.37,50.27,392.73,52.32,392.73,55.01z"
                />
                <path
                  d="M461.37,27.17h-15.26v22.94c0,5.5,0.4,9.12,1.2,10.85c0.8,1.73,2.7,2.59,5.71,2.59l8.54-0.58l0.48,5.95
			c-4.29,0.7-7.55,1.06-9.79,1.06c-4.99,0-8.45-1.22-10.37-3.65c-1.92-2.43-2.88-7.07-2.88-13.92V27.17h-6.82v-6.24H439V6.24h7.1
			v14.69h15.26V27.17z"
                />
                <path
                  d="M502.84,62.98l2.78-0.29l0.19,5.66c-7.3,1.02-13.54,1.54-18.72,1.54c-6.91,0-11.81-2-14.69-6
			c-2.88-4-4.32-10.22-4.32-18.67c0-16.83,6.69-25.25,20.06-25.25c6.46,0,11.29,1.81,14.5,5.42c3.2,3.62,4.8,9.3,4.8,17.04
			l-0.38,5.47h-31.68c0,5.31,0.96,9.25,2.88,11.81c1.92,2.56,5.26,3.84,10.03,3.84C493.06,63.55,497.91,63.36,502.84,62.98z
			 M500.25,42.14c0-5.89-0.95-10.05-2.83-12.48c-1.89-2.43-4.96-3.65-9.22-3.65c-4.26,0-7.46,1.28-9.6,3.84
			c-2.14,2.56-3.25,6.66-3.31,12.29H500.25z"
                />
                <path
                  d="M539.9,19.97c6.46,0,10.99,1.84,13.58,5.52c2.59,3.68,3.89,10.13,3.89,19.34c0,9.22-1.62,15.7-4.85,19.44
			c-3.23,3.74-9.17,5.62-17.81,5.62c-2.69,0-7.14-0.26-13.34-0.77l-2.69-0.29V0h7.1v23.33C530.65,21.09,535.35,19.97,539.9,19.97z
			 M534.62,63.46c6.27,0,10.42-1.42,12.43-4.27c2.02-2.85,3.02-7.66,3.02-14.45c0-6.78-0.8-11.54-2.4-14.26
			c-1.6-2.72-4.45-4.08-8.54-4.08c-3.71,0-7.52,0.7-11.42,2.11l-1.92,0.67v33.79C529.94,63.3,532.89,63.46,534.62,63.46z"
                />
                <path
                  d="M567.06,44.83c0-8.77,1.57-15.1,4.7-19.01c3.13-3.9,8.43-5.86,15.89-5.86c7.46,0,12.74,1.95,15.84,5.86
			c3.1,3.9,4.66,10.24,4.66,19.01c0,8.77-1.47,15.14-4.42,19.1c-2.94,3.97-8.32,5.95-16.13,5.95c-7.81,0-13.18-1.98-16.13-5.95
			C568.54,59.97,567.06,53.6,567.06,44.83z M574.46,44.69c0,7.01,0.85,11.92,2.54,14.74c1.69,2.82,5.25,4.22,10.66,4.22
			s8.94-1.39,10.61-4.18c1.66-2.78,2.5-7.69,2.5-14.74c0-7.04-0.93-11.89-2.78-14.54c-1.86-2.66-5.3-3.98-10.32-3.98
			c-5.02,0-8.48,1.33-10.37,3.98C575.4,32.85,574.46,37.68,574.46,44.69z"
                />
                <path
                  d="M653.75,35.42V60c0.19,2.37,2.05,3.78,5.57,4.22l-0.29,5.66c-5.06,0-8.87-1.28-11.42-3.84
			c-5.76,2.56-11.52,3.84-17.28,3.84c-4.42,0-7.78-1.25-10.08-3.74c-2.3-2.5-3.46-6.08-3.46-10.75c0-4.67,1.18-8.11,3.55-10.32
			c2.37-2.21,6.08-3.57,11.14-4.08l15.07-1.44v-4.13c0-3.26-0.71-5.6-2.11-7.01c-1.41-1.41-3.33-2.11-5.76-2.11
			c-5.12,0-10.43,0.32-15.94,0.96l-2.98,0.29l-0.29-5.47c7.04-1.41,13.28-2.11,18.72-2.11c5.44,0,9.39,1.25,11.86,3.74
			C652.52,26.21,653.75,30.11,653.75,35.42z M624.18,55.01c0,5.89,2.43,8.83,7.3,8.83c4.35,0,8.64-0.74,12.86-2.21l2.21-0.77V45.02
			l-14.21,1.34c-2.88,0.26-4.96,1.09-6.24,2.5C624.82,50.27,624.18,52.32,624.18,55.01z"
                />
                <path
                  d="M667.96,68.93v-48h7.1v6.53c5.57-3.84,11.42-6.37,17.57-7.58v7.3c-2.69,0.51-5.49,1.31-8.4,2.4
			c-2.91,1.09-5.14,2.05-6.67,2.88l-2.4,1.25v35.23H667.96z"
                />
                <path
                  d="M736.79,0v68.93h-7.1v-3.26c-4.93,2.82-9.79,4.22-14.59,4.22c-2.56,0-4.8-0.32-6.72-0.96s-3.71-1.79-5.38-3.46
			c-3.46-3.46-5.18-9.84-5.18-19.15s1.55-16.03,4.66-20.16c3.1-4.13,8.24-6.19,15.41-6.19c3.71,0,7.65,0.42,11.81,1.25V0H736.79z
			 M711.83,62.78c1.15,0.45,2.64,0.67,4.46,0.67c1.82,0,3.87-0.3,6.14-0.91c2.27-0.61,4.05-1.2,5.33-1.78l1.92-0.86V27.36
			c-4.1-0.77-7.91-1.15-11.42-1.15c-4.86,0-8.26,1.55-10.18,4.66c-1.92,3.1-2.88,7.92-2.88,14.45c0,7.43,1.12,12.42,3.36,14.98
			C709.59,61.5,710.68,62.34,711.83,62.78z"
                />
                <path d="M750.71,10.08V1.73h7.2v8.35H750.71z M750.71,68.93v-48h7.2v48H750.71z" />
                <path
                  d="M778.93,68.93h-7.2v-48h7.1v3.36c5.18-2.88,10.14-4.32,14.88-4.32c6.4,0,10.7,1.73,12.91,5.18s3.31,9.6,3.31,18.43v25.34
			h-7.1V43.78c0-6.66-0.66-11.22-1.97-13.68c-1.31-2.46-4.11-3.7-8.4-3.7c-2.05,0-4.21,0.3-6.48,0.91c-2.27,0.61-4.02,1.2-5.23,1.78
			l-1.82,0.86V68.93z"
                />
                <path
                  d="M841.81,91.49c-7.68,0-13.04-1.04-16.08-3.12c-3.04-2.08-4.56-5.87-4.56-11.38c0-2.62,0.58-4.75,1.73-6.38
			c1.15-1.63,3.1-3.47,5.86-5.52c-1.79-1.22-2.69-3.42-2.69-6.62c0-1.09,0.8-3.1,2.4-6.05l0.86-1.54c-5.06-2.3-7.58-7.14-7.58-14.5
			c0-10.94,5.98-16.42,17.95-16.42c3.07,0,5.92,0.32,8.54,0.96l1.44,0.29l14.21-0.38v6.14l-9.12-0.19c2.11,2.11,3.17,5.31,3.17,9.6
			c0,6.02-1.49,10.22-4.46,12.62c-2.98,2.4-7.66,3.6-14.06,3.6c-1.73,0-3.3-0.13-4.7-0.38c-1.15,2.82-1.73,4.64-1.73,5.47
			c0,1.98,0.61,3.22,1.82,3.7s4.9,0.72,11.04,0.72c6.14,0,10.56,0.96,13.25,2.88c2.69,1.92,4.03,5.66,4.03,11.23
			C863.12,86.4,856.02,91.49,841.81,91.49z M828.28,76.42c0,3.39,0.94,5.74,2.83,7.06c1.89,1.31,5.38,1.97,10.46,1.97
			s8.74-0.71,10.94-2.11c2.21-1.41,3.31-3.76,3.31-7.06c0-3.3-0.8-5.42-2.4-6.38c-1.6-0.96-4.74-1.44-9.41-1.44l-10.37-0.48
			c-2.11,1.54-3.54,2.88-4.27,4.03C828.64,73.15,828.28,74.62,828.28,76.42z M828.95,36.38c0,3.78,0.85,6.46,2.54,8.06
			c1.7,1.6,4.5,2.4,8.4,2.4c3.9,0,6.69-0.8,8.35-2.4c1.66-1.6,2.5-4.3,2.5-8.11c0-3.81-0.83-6.51-2.5-8.11
			c-1.67-1.6-4.45-2.4-8.35-2.4c-3.9,0-6.7,0.82-8.4,2.45C829.8,29.9,828.95,32.61,828.95,36.38z"
                />
              </g>
              <g>
                <polygon points="869.73,3.04 876.02,3.04 876.02,21.43 879.26,21.43 879.26,3.04 885.5,3.04 885.5,0 869.73,0 		" />
                <polygon
                  points="903.21,0 897.78,16.2 892.35,0 887.39,0 887.39,21.43 890.66,21.43 890.66,4.71 896.15,20.69 899.41,20.69
			904.9,4.71 904.9,21.43 908.17,21.43 908.17,0 		"
                />
              </g>
            </g>
          </svg>
        </div>
      </Slider>
      <Contact $footerLight={footerLight} $theme={theme}>
        <span>
          <H5
            style={{
              color:
                footerLight && theme ? `${_var.mono_000}` : `${_var.mono_010}`,
            }}
          >
            Hextra Skateboarding
          </H5>
        </span>
        <div>
          <Link
            href="/"
            aria-label="home"
            onMouseEnter={() => cursorChangeHandler("hovered")}
            onMouseLeave={() => cursorChangeHandler("")}
          >
            <Logo />
          </Link>
        </div>
        <span>
          <H5
            style={{
              color:
                footerLight && theme ? `${_var.mono_000}` : `${_var.mono_010}`,
            }}
          >
            contact@hextraskateboarding.com
          </H5>
        </span>
      </Contact>
    </Container>
  );
}
