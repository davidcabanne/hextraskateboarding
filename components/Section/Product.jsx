import React from "react";
import Image from "next/image";
import styled, { css } from "styled-components";
import * as _var from "../../styles/variables";

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: ${(props) => (props.$alignRight ? "flex-end" : "flex-start")};
  padding: ${_var.space_L};

  @media ${_var.device.tablet_max} {
    padding: ${_var.space_M};
  }
  @media ${_var.device.mobileL_max} {
    padding: ${_var.space_S};
    align-items: flex-start;
  }
`;

const Images = styled.div`
  position: relative;
  display: flex;
  gap: ${_var.space_L};

  @media ${_var.device.tablet_max} {
    gap: ${_var.space_M};
  }

  @media ${_var.device.mobileL_max} {
    gap: ${_var.space_S};
  }
`;

const Placeholder = styled.div`
  width: 100%;
  max-width: 600px;
  aspect-ratio: 2 / 3;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${_var.space_XS};
  text-align: ${(props) => (props.$alignRight ? "end" : "start")};
  padding: ${_var.space_L} ${_var.space_L} 0px ${_var.space_L};
  max-width: 68ch;

  @media ${_var.device.tablet_max} {
    text-align: start;
    padding: ${_var.space_M} 0;
  }

  @media ${_var.device.mobileL_max} {
    text-align: start;
    padding: ${_var.space_S} 0px;
  }
`;

export default function Product({ children, imgs, alignRight }) {
  return (
    <Container $alignRight={alignRight}>
      <Images>
        {imgs.map((img) => {
          return (
            <Placeholder key={img.src}>
              <Image
                src={img}
                placeholder="blur"
                style={{ objectFit: "cover" }}
                alt="Picture of the author"
              />
            </Placeholder>
          );
        })}
      </Images>
      <Text $alignRight={alignRight}>{children}</Text>
    </Container>
  );
}
