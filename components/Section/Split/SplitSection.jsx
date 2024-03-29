import React from "react";
import Image from "next/image";
import useElementOnScreen from "../../../hooks/useElementOnScreen";

import styled, { css } from "styled-components";
import * as _var from "../../../styles/variables";

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr min-content 1fr min-content;
  gap: ${_var.space_L};
  padding: ${_var.space_L};

  ${_var.revealAnimation}

  @supports (-moz-appearance: none) {
    display: grid;
    grid-template-columns: 1fr 88px 1fr 88px;
  }

  @media ${_var.device.laptop_max} {
    grid-template-columns: 1fr;
    gap: ${_var.space_M};
    padding: ${_var.space_M};
  }
  @media ${_var.device.mobileL_max} {
    gap: ${_var.space_S};
    padding: ${_var.space_S};
  }
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100vh;

  @media ${_var.device.laptop_max} {
    height: 100%;
  }

  & img {
    width: 100%;
    height: 100vh;

    max-height: 100vh;

    @media ${_var.device.laptop_max} {
      height: 50vh;
      max-height: 50vh;
    }
  }
`;

const Svg = styled.svg`
  height: 100%;
  max-height: 100vh;

  @media ${_var.device.laptop_max} {
    display: none;
  }
`;

const SvgMobile = styled.svg`
  display: none;

  height: 100%;
  max-height: 100vh;

  @media ${_var.device.laptop_max} {
    display: block;
    max-height: 50vh;
  }
`;

export default function SplitSection({ imgs }) {
  const leftImg = imgs[0].img;
  const leftAlt = imgs[0].alt;
  const rightImg = imgs[1].img;
  const rightAlt = imgs[1].alt;

  // HOOK
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: _var.rootMargin,
    threshold: _var.threshold,
  });
  return (
    <Container ref={containerRef} className={isVisible ? "active" : ""}>
      <SvgMobile
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 500 47.6"
      >
        <g>
          <path
            d="M7.5,30.4v16.4H0v-46h17.5c10.4,0,15.6,4.9,15.6,14.6c0,6.5-2.5,11-7.5,13.3l7.6,18H25l-6.7-16.4L7.5,30.4L7.5,30.4z
		 M25.4,15.5c0-5.5-2.6-8.3-7.9-8.3h-10V24h10.1c2.7,0,4.7-0.8,5.9-2.3C24.8,20.1,25.4,18,25.4,15.5z"
          />
          <path d="M41.7,46.8v-46h7.5v46H41.7z" />
          <path
            d="M76.7,32.5h-9.4v14.3h-7.5v-46h16.9c10.4,0,15.7,5.1,15.7,15.4c0,5.3-1.3,9.3-3.9,12.1C85.8,31.1,81.9,32.5,76.7,32.5z
		 M67.3,26h9.3c5.4,0,8.1-3.3,8.1-9.8c0-3.1-0.7-5.4-1.9-6.8c-1.3-1.4-3.3-2.1-6.1-2.1h-9.3V26H67.3z"
          />
          <path d="M110.2,7.4V0.8h33.6v6.6h-13v39.3h-7.5V7.4H110.2z" />
          <path d="M177.4,46.8V26.9h-19.9v19.9H150v-46h7.5v19.6h19.9V0.8h7.5v46H177.4z" />
          <path d="M195.6,46.8v-46h29v6.5H203v13h17.5v6.4H203v13.4h21.6v6.6h-29V46.8z" />
          <path
            d="M261.3,6.6c-5.7,0-8.5,2-8.5,6c0,2.1,0.7,3.5,2,4.4s4.3,1.9,8.9,3.2c4.6,1.3,7.8,2.8,9.7,4.6c1.9,1.8,2.8,4.6,2.8,8.4
		c0,4.8-1.4,8.4-4.1,10.8c-2.8,2.4-6.5,3.6-11.3,3.6c-3.8,0-8-0.4-12.6-1.3l-2.4-0.5l0.7-6c6,0.8,10.7,1.2,13.8,1.2
		c5.6,0,8.3-2.5,8.3-7.4c0-1.9-0.6-3.3-1.9-4.3c-1.3-0.9-4.1-1.9-8.5-3c-4.4-1.1-7.7-2.6-9.8-4.5s-3.2-5-3.2-9.1
		c0-4.2,1.4-7.3,4.1-9.4c2.7-2.1,6.5-3.2,11.3-3.2c3.4,0,7.5,0.4,12.2,1.2l2.4,0.4l-0.6,6C268.3,6.9,263.9,6.6,261.3,6.6z"
          />
          <path d="M280,7.4V0.8h33.6v6.6h-13v39.3h-7.5V7.4H280z" />
          <path
            d="M327.4,30.4v16.4h-7.5v-46h17.5c10.4,0,15.6,4.9,15.6,14.6c0,6.5-2.5,11-7.5,13.3l7.6,18h-8.2l-6.7-16.4L327.4,30.4
		L327.4,30.4z M345.3,15.5c0-5.5-2.6-8.3-7.9-8.3h-10V24h10.1c2.7,0,4.7-0.8,5.9-2.3C344.7,20.1,345.3,18,345.3,15.5z"
          />
          <path d="M361.5,46.8v-46h29v6.5H369v13h17.5v6.4H369v13.4h21.6v6.6h-29.1V46.8z" />
          <path d="M398.8,46.8v-46h29v6.5h-21.6v13h17.6v6.4h-17.5v13.4h21.6v6.6h-29.1V46.8z" />
          <path d="M431.7,7.4V0.8h33.6v6.6h-13v39.3h-7.5V7.4H431.7z" />
          <path
            d="M485.1,6.6c-5.7,0-8.5,2-8.5,6c0,2.1,0.7,3.5,2,4.4c1.3,0.9,4.3,1.9,8.9,3.2c4.6,1.3,7.8,2.8,9.7,4.6
		c1.9,1.7,2.8,4.5,2.8,8.3c0,4.8-1.4,8.4-4.1,10.8c-2.8,2.4-6.5,3.6-11.3,3.6c-3.8,0-8-0.4-12.6-1.3l-2.4-0.5l0.7-6
		c6,0.8,10.7,1.2,13.8,1.2c5.6,0,8.3-2.5,8.3-7.4c0-1.9-0.6-3.3-1.9-4.3c-1.3-0.9-4.1-1.9-8.5-3s-7.7-2.6-9.8-4.5
		c-2.1-1.9-3.2-5-3.2-9.1c0-4.2,1.4-7.3,4.1-9.4c2.8-2.1,6.5-3.2,11.3-3.2c3.4,0,7.5,0.4,12.2,1.2l2.4,0.4l-0.6,6
		C492.1,6.9,487.7,6.6,485.1,6.6z"
          />
        </g>
      </SvgMobile>
      <Placeholder key={leftImg.src}>
        <Image
          src={leftImg}
          alt={leftAlt}
          placeholder="blur"
          style={{ objectFit: "cover" }}
          className="order"
        />
      </Placeholder>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 47.5 500"
      >
        <g>
          <path
            d="M30.4,492.5h16.4v7.5h-46v-17.5c0-10.4,4.9-15.6,14.6-15.6c6.5,0,11,2.5,13.3,7.5l18-7.6v8.2l-16.4,6.7V492.5z M15.5,474.6
		c-5.5,0-8.3,2.6-8.3,7.9v10H24v-10.1c0-2.7-0.8-4.7-2.3-5.9C20.1,475.2,18,474.6,15.5,474.6z"
          />
          <path d="M46.8,458.3h-46v-7.5h46V458.3z" />
          <path
            d="M32.5,423.3v9.4h14.3v7.5h-46v-16.9c0-10.4,5.1-15.7,15.4-15.7c5.3,0,9.3,1.3,12.1,3.9C31.1,414.2,32.5,418.1,32.5,423.3z
		 M26,432.7v-9.3c0-5.4-3.3-8.1-9.8-8.1c-3.1,0-5.4,0.7-6.8,1.9c-1.4,1.3-2.1,3.3-2.1,6.1v9.3H26z"
          />
          <path d="M7.4,389.8H0.8v-33.6h6.6v13h39.3v7.5H7.4V389.8z" />
          <path d="M46.8,322.6H26.9v19.9h19.9v7.5h-46v-7.5h19.6v-19.9H0.8v-7.5h46V322.6z" />
          <path d="M46.8,304.4h-46v-29h6.5v21.6h13v-17.5h6.4v17.5h13.4v-21.6h6.6V304.4z" />
          <path
            d="M6.6,238.7c0,5.7,2,8.5,6,8.5c2.1,0,3.5-0.7,4.4-2c0.9-1.3,1.9-4.3,3.2-8.9c1.3-4.6,2.8-7.8,4.6-9.7
		c1.8-1.9,4.6-2.8,8.4-2.8c4.8,0,8.4,1.4,10.8,4.1c2.4,2.8,3.6,6.5,3.6,11.3c0,3.8-0.4,8-1.3,12.6l-0.5,2.4l-6-0.7
		c0.8-6,1.2-10.7,1.2-13.8c0-5.6-2.5-8.3-7.4-8.3c-1.9,0-3.3,0.6-4.3,1.9c-0.9,1.3-1.9,4.1-3,8.5c-1.1,4.4-2.6,7.7-4.5,9.8
		c-1.9,2.1-5,3.2-9.1,3.2c-4.2,0-7.3-1.4-9.4-4.1c-2.1-2.7-3.2-6.5-3.2-11.3c0-3.4,0.4-7.5,1.2-12.2l0.4-2.4l6,0.6
		C6.9,231.7,6.6,236.1,6.6,238.7z"
          />
          <path d="M7.4,220H0.8v-33.6h6.6v13h39.3v7.5H7.4V220z" />
          <path
            d="M30.4,172.6h16.4v7.5h-46v-17.5c0-10.4,4.9-15.6,14.6-15.6c6.5,0,11,2.5,13.3,7.5l18-7.6v8.2l-16.4,6.7V172.6z M15.5,154.7
		c-5.5,0-8.3,2.6-8.3,7.9v10H24v-10.1c0-2.7-0.8-4.7-2.3-5.9C20.1,155.3,18,154.7,15.5,154.7z"
          />
          <path d="M46.8,138.5h-46v-29h6.5V131h13v-17.5h6.4V131h13.4v-21.6h6.6V138.5z" />
          <path d="M46.8,101.2h-46v-29h6.5v21.6h13V76.2h6.4v17.5h13.4V72.1h6.6V101.2z" />
          <path d="M7.4,68.3H0.8V34.7h6.6v13h39.3v7.5H7.4V68.3z" />
          <path
            d="M6.6,14.9c0,5.7,2,8.5,6,8.5c2.1,0,3.5-0.7,4.4-2c0.9-1.3,1.9-4.3,3.2-8.9c1.3-4.6,2.8-7.8,4.6-9.7C26.5,0.9,29.3,0,33.1,0
		c4.8,0,8.4,1.4,10.8,4.1c2.4,2.8,3.6,6.5,3.6,11.3c0,3.8-0.4,8-1.3,12.6l-0.5,2.4l-6-0.7c0.8-6,1.2-10.7,1.2-13.8
		c0-5.6-2.5-8.3-7.4-8.3c-1.9,0-3.3,0.6-4.3,1.9c-0.9,1.3-1.9,4.1-3,8.5c-1.1,4.4-2.6,7.7-4.5,9.8c-1.9,2.1-5,3.2-9.1,3.2
		c-4.2,0-7.3-1.4-9.4-4.1C1.1,24.1,0,20.4,0,15.6c0-3.4,0.4-7.5,1.2-12.2L1.6,1l6,0.6C6.9,7.9,6.6,12.3,6.6,14.9z"
          />
        </g>
      </Svg>

      <SvgMobile
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 500 47.6"
      >
        <g>
          <path d="M0,46.8v-46h13l14,39.4h1V0.8h7.5v46H22.7L8.4,7.3H7.5v39.5H0z" />
          <path
            d="M77.7,41.9c-2.8,3.7-7.7,5.6-14.6,5.6s-11.8-1.9-14.6-5.7s-4.2-9.7-4.2-17.8s1.4-14.1,4.2-18.1C51.3,2,56.1,0,63,0
		s11.7,2,14.5,5.9s4.2,10,4.2,18.1C81.8,32.1,80.4,38.1,77.7,41.9z M54.4,37c1.5,2.6,4.4,4,8.7,4s7.2-1.3,8.7-3.9
		c1.5-2.6,2.3-7,2.3-13.1s-0.8-10.6-2.3-13.3c-1.5-2.8-4.4-4.2-8.6-4.2s-7.1,1.4-8.7,4.2c-1.6,2.8-2.4,7.2-2.4,13.3
		C52.1,30,52.8,34.4,54.4,37z"
          />
          <path d="M85.4,7.4V0.7H119v6.7h-13v39.4h-7.5V7.4C98.5,7.4,85.4,7.4,85.4,7.4z" />
          <path d="M136.1,7.4V0.7h33.6v6.7h-13v39.4h-7.5V7.4C149.2,7.4,136.1,7.4,136.1,7.4z" />
          <path d="M203.5,46.8V26.9h-19.9v19.9h-7.5v-46h7.5v19.6h19.9V0.8h7.5v46C211,46.8,203.5,46.8,203.5,46.8z" />
          <path d="M221.8,46.8v-46h29v6.5h-21.6v13h17.5v6.4h-17.5v13.5h21.6v6.6H221.8z" />
          <path
            d="M291.2,32.5h-9.4v14.3h-7.5v-46h16.9c10.4,0,15.7,5.2,15.7,15.5c0,5.3-1.3,9.3-3.9,12.1C300.3,31.1,296.4,32.5,291.2,32.5z
		 M281.8,26h9.3c5.4,0,8.1-3.3,8.1-9.8c0-3.1-0.7-5.4-1.9-6.9c-1.3-1.4-3.3-2.1-6.1-2.1h-9.3V26H281.8z"
          />
          <path d="M340.1,46.8h-25.8v-46h7.5v39.3h18.3V46.8z" />
          <path d="M342.5,46.8l11.4-46h14.9l11.4,46h-7.5l-2.5-9.9h-17.7l-2.5,9.9H342.5z M359.7,7L354,30.3h14.7L363.1,7H359.7z" />
          <path d="M387,46.8v-46h13l14,39.4h1V0.8h7.5v46h-12.8L395.4,7.3h-0.9v39.5H387z" />
          <path d="M433.4,46.8v-46h29v6.5h-21.6v13h17.5v6.4h-17.5v13.5h21.6v6.6H433.4z" />
          <path d="M466.4,7.4V0.7H500v6.7h-13v39.4h-7.5V7.4C479.5,7.4,466.4,7.4,466.4,7.4z" />
        </g>
      </SvgMobile>
      <Placeholder key={rightImg.src}>
        <Image
          src={rightImg}
          alt={rightAlt}
          placeholder="blur"
          style={{ objectFit: "cover" }}
        />
      </Placeholder>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 47.5 500"
      >
        <g>
          <path d="M0.7,0h46v13L7.3,27v1h39.4v7.5h-46V22.7L40.2,8.4V7.5H0.7V0z" />
          <path
            d="M5.6,77.7C1.9,74.9,0,70,0,63.1c0-6.9,1.9-11.8,5.7-14.6c3.8-2.8,9.7-4.2,17.8-4.2c8.1,0,14.1,1.4,18.1,4.2
		c3.9,2.8,5.9,7.6,5.9,14.5c0,6.9-2,11.7-5.9,14.5c-3.9,2.8-10,4.2-18.1,4.2C15.4,81.8,9.4,80.4,5.6,77.7z M10.5,54.4
		c-2.6,1.5-4,4.4-4,8.7c0,4.3,1.3,7.2,3.9,8.7c2.6,1.5,7,2.3,13.1,2.3s10.6-0.8,13.3-2.3c2.8-1.5,4.2-4.4,4.2-8.6
		c0-4.2-1.4-7.1-4.2-8.7c-2.8-1.6-7.2-2.4-13.3-2.4C17.5,52.1,13.1,52.8,10.5,54.4z"
          />
          <path d="M40.1,85.4h6.7V119h-6.7v-13H0.7v-7.5h39.4V85.4z" />
          <path d="M40.1,136.1h6.7v33.6h-6.7v-13H0.7v-7.5h39.4V136.1z" />
          <path d="M0.7,203.5h19.9v-19.9H0.7v-7.5h46v7.5H27.1v19.9h19.6v7.5h-46V203.5z" />
          <path d="M0.7,221.8h46v29h-6.5v-21.6h-13v17.5h-6.4v-17.5H7.3v21.6H0.7V221.8z" />
          <path
            d="M15,291.2v-9.4H0.7v-7.5h46v16.9c0,10.4-5.2,15.7-15.5,15.7c-5.3,0-9.3-1.3-12.1-3.9C16.4,300.3,15,296.4,15,291.2z
		 M21.5,281.8v9.3c0,5.4,3.3,8.1,9.8,8.1c3.1,0,5.4-0.7,6.9-1.9c1.4-1.3,2.1-3.3,2.1-6.1v-9.3H21.5z"
          />
          <path d="M0.7,340.1v-25.8h46v7.5H7.4v18.3H0.7z" />
          <path d="M0.7,342.5l46,11.4v14.9l-46,11.4v-7.5l9.9-2.5v-17.7L0.7,350V342.5z M40.5,359.7L17.2,354v14.7l23.3-5.6V359.7z" />
          <path d="M0.7,387h46v13L7.3,414v1h39.4v7.5h-46v-12.8l39.5-14.3v-0.9H0.7V387z" />
          <path d="M0.7,433.4h46v29h-6.5v-21.6h-13v17.5h-6.4v-17.5H7.3v21.6H0.7V433.4z" />
          <path d="M40.1,466.4h6.7V500h-6.7v-13H0.7v-7.5h39.4V466.4z" />
        </g>
      </Svg>
    </Container>
  );
}
