import React, { useState, useEffect } from "react";
import Image from "next/image";
import styled, { css } from "styled-components";
import * as _var from "@/styles/variables";
import { H1, H2, H3, H4 } from "../typefaces";

import ExternalLink from "../Common/ExternalLink";

const customBreakpoint = "(max-width: 1280px)";

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  padding: ${_var.space_L};
  overflow: hidden;

  @media ${_var.device.tablet_max} {
    height: 100vh;
    height: 100svh;
    padding: ${_var.space_M};
  }
  @media ${_var.device.mobileL_max} {
    padding: ${_var.space_M} ${_var.space_S};
  }

  @media ${customBreakpoint} {
  }
`;

const Grid = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ColPrimary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding-right: ${_var.space_L};

  @media ${_var.device.tablet_max} {
    padding-right: ${_var.space_M};
  }
  @media ${_var.device.mobileL_max} {
    padding-right: ${_var.space_S};
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: ${_var.space_XS};
  margin-bottom: ${_var.space_L};

  & h2 {
    max-width: 22ch;
  }

  @media ${_var.device.tablet_max} {
    & h1,
    h2 {
      color: ${_var.mono_010};
    }

    ${(props) =>
      props.$textDark &&
      css`
        & h1,
        h2 {
          color: ${_var.mono_000};
        }
      `}
  }
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${_var.space_M};

  @media ${_var.device.tablet_max} {
    & h3,
    h4 {
      color: ${_var.mono_010};
    }

    ${(props) =>
      props.$textDark &&
      css`
        & h3,
        h4 {
          color: ${_var.mono_000};
        }
      `}
  }
`;

const Group = styled.div``;

const NamePlaceholder = styled.div`
  position: relative;
  width: 100%;
  height: 28px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const ColSecondary = styled.div`
  position: relative;
  height: 100%;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-columns: -webkit-min-content 1fr;
  transition: transform 10ms linear;
  z-index: -1;

  @supports (-moz-appearance: none) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    & :nth-child(1) {
      margin-left: auto;
    }

    & :nth-child(2) {
      height: 100%;
      width: 100%;
    }
  }

  @media ${customBreakpoint} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr min-content;
  }

  @media ${_var.device.tablet_max} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-height: 100vh;
    grid-template-columns: 1fr;
  }
`;

const Placeholder = styled.div`
  position: relative;
  height: 100%;
`;

const SvgV = styled.svg`
  height: 100%;
  max-height: calc(100vh - 80px);
  padding-right: ${_var.space_L};

  @media ${customBreakpoint} {
    display: none;
  }

  @media ${_var.device.tablet_max} {
    display: none;
  }
`;

const SvgH = styled.svg`
  display: none;
  padding-top: ${_var.space_S};

  @media ${customBreakpoint} {
    display: block;
  }

  @media ${_var.device.tablet_max} {
    display: none;
  }
`;

export default function HeroPage({ data, textDark }) {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <Grid>
        <ColPrimary>
          <Title
            style={{ transform: `translateY(${offsetY * -0.1}px)` }}
            $textDark={textDark}
          >
            <H1>{data.title}</H1>
            <H2>{data.subtitle}</H2>
          </Title>
          <Infos  $textDark={textDark}>
            <Group
              style={{ transform: `translateY(${offsetY * -0.08}px)` }}
             
            >
              <H3>{data.groupTitle}</H3>
              <NamePlaceholder>
                {data.groupLink ? (
                  <ExternalLink link={data.groupLink}>
                    <H4>{data.groupText}</H4>
                  </ExternalLink>
                ) : (
                  <H4>{data.groupText}</H4>
                )}
              </NamePlaceholder>
            </Group>
            <Group
              style={{ transform: `translateY(${offsetY * -0.05}px)` }}
            >
              <H3>{data.subGroupTitle}</H3>
              <H4>{data.subGroupText}</H4>
            </Group>
          </Infos>
        </ColPrimary>
        <ColSecondary style={{ transform: `translateY(${offsetY * 0.15}px)` }}>
          <SvgV
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 199.9 1001.4"
          >
            <g>
              <path d="M199.9,882.6h-86.4V969h86.4v32.4H0V969h85.2v-86.4H0v-32.7h199.9V882.6z" />
              <path d="M199.9,804.1H0V678h28.3v93.7h56.6v-76.2h28v76.2h58.4V678h28.6V804.1z" />
              <path d="M0,625.5l78.8-42.9L0,539.1v-34.1l101.6,59.3l98.4-59.3v36.2L124.6,584l75.3,43.8V662l-96.6-59.5L0,662V625.5z" />
              <path d="M28.9,497.3H0V351.4h28.9v56.3h171v32.7h-171V497.3z" />
              <path
                d="M128.7,292.2h71.2v32.4H0v-75.9C0,203.5,21.2,181,63.6,181c28.4,0,47.7,10.9,57.8,32.7l78.5-33v35.6l-71.2,28.9V292.2z
		 M63.9,214.2C40,214.2,28,225.7,28,248.7v43.5h72.7v-44.1c0-11.7-3.4-20.2-10.1-25.7C83.9,217,75,214.2,63.9,214.2z"
              />
              <path d="M199.9,163.4L0,114.1V49.6L199.9,0v32.7L157,43.5v76.8l42.9,10.8V163.4z M27.1,89l101.3,24.8V49.9L27.1,74.4V89z" />
            </g>
          </SvgV>
          <Placeholder>
            <Image
              src={data.img}
              alt={data.alt}
              fill
              sizes="100%"
              style={{ objectFit: "cover" }}
              placeholder="blur"
            />
          </Placeholder>
          <SvgH
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 272.1 54.4"
          >
            <g>
              <path d="M32.3,54.3V30.8H8.8v23.5H0V0h8.8v23.2h23.5V0h8.8v54.3H32.3z" />
              <path d="M53.6,54.3V0h34.3v7.7H62.4v15.4h20.7v7.6H62.4v15.9h25.5v7.8L53.6,54.3L53.6,54.3z" />
              <path d="M102.1,0l11.7,21.4L125.6,0h9.3l-16.1,27.6l16.1,26.7h-9.8l-11.6-20.5l-11.9,20.5h-9.3L108.5,28L92.2,0H102.1z" />
              <path d="M137,7.9V0h39.6v7.9h-15.3v46.5h-8.9V7.9C152.4,7.9,137,7.9,137,7.9z" />
              <path
                d="M192.7,35v19.3h-8.8V0h20.6c12.3,0,18.4,5.8,18.4,17.3c0,7.7-3,13-8.9,15.7l9,21.3h-9.7L205.5,35H192.7z M213.9,17.4
		c0-6.5-3.1-9.8-9.4-9.8h-11.8v19.8h12c3.2,0,5.5-0.9,7-2.7C213.1,22.8,213.9,20.4,213.9,17.4z"
              />
              <path d="M227.7,54.3L241.1,0h17.5l13.5,54.3h-8.9l-2.9-11.7h-20.9l-2.9,11.7H227.7z M247.9,7.4l-6.7,27.5h17.3l-6.6-27.5H247.9z" />
            </g>
          </SvgH>
        </ColSecondary>
      </Grid>
    </Container>
  );
}
