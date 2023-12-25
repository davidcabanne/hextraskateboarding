import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styled, { css } from "styled-components";
import * as _var from "@/styles/variables";
import { H1, H2, H3, H4 } from "../typefaces";

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  padding: ${_var.space_L};
  padding-top: 110px;

  @media ${_var.device.tablet_max} {
    height: 100vh;
    height: 100dvh;
    padding: ${_var.space_M};
  }
  @media ${_var.device.mobileL_max} {
    padding: ${_var.space_M} ${_var.space_S};
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
    max-width: 24ch;
  }

  @media ${_var.device.tablet_max} {
    & h1,
    h2 {
      color: ${_var.mono_010};
    }
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

const StyledH4 = styled(H4)`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 1500ms ${_var.cubicBezier};

  &.active {
    opacity: 1;
  }
`;

const ColSecondary = styled.div`
  position: relative;
  height: 100%;
  max-height: calc(100vh - 144px);
  display: grid;
  grid-template-columns: min-content 1fr;
  z-index: -1;

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
  background-color: ${_var.mono_000};
`;

const StyledImage = styled(Image)`
  opacity: 0;
  transition: opacity 1500ms ${_var.cubicBezier};

  &.active {
    opacity: 1;
  }
`;

const Svg = styled.svg`
  height: 100%;
  padding-right: ${_var.space_L};

  @media ${_var.device.tablet_max} {
    display: none;
  }
`;

export default function Hero({ imgs }) {
  const placeholderRef = useRef(null);
  const [indexCount, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = imgs?.length - 1;

    if (indexCount < 0) {
      setIndex(lastIndex);
    }
    if (indexCount > lastIndex) {
      setIndex(0);
    }
  }, [indexCount, placeholderRef]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(indexCount + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [indexCount]);

  return (
    <Container>
      <Grid>
        <ColPrimary>
          <Title>
            <H1>Hextra Skateboarding</H1>
            <H2>
              Du skate, des ondes positives et des produits responsables
              fabriqués localement, en France.
            </H2>
          </Title>
          <Infos>
            <Group>
              <H3>Man on board</H3>
              <NamePlaceholder>
                {imgs.map((item) => {
                  const { index, name } = item;
                  return (
                    <StyledH4
                      key={name}
                      index={index}
                      className={indexCount === index ? "active" : ""}
                    >
                      {name}
                    </StyledH4>
                  );
                })}
              </NamePlaceholder>
            </Group>
            <Group>
              <H3>Photographe</H3>
              <H4>Gabriel Renault</H4>
            </Group>
          </Infos>
        </ColPrimary>
        <ColSecondary>
          <Svg
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
          </Svg>
          <Placeholder ref={placeholderRef}>
            {imgs.map((item) => {
              const { index, img } = item;
              return (
                <StyledImage
                  key={img.src}
                  src={img}
                  index={index}
                  fill
                  sizes="100%"
                  style={{ objectFit: "cover" }}
                  placeholder="blur"
                  alt="Picture of the author"
                  className={indexCount === index ? "active" : ""}
                />
              );
            })}
          </Placeholder>
        </ColSecondary>
      </Grid>
    </Container>
  );
}
