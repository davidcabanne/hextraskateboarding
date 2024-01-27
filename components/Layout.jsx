import React from "react";
import styled from "styled-components";
import * as _var from "../styles/variables";

import Loader from "./Common/Loader";
import Header from "@/components/Header";

const Container = styled.main`
  position: relative;
  width: 100%;
`;

export default function Layout({
  handleRenderTheme,
  theme,
  logoMobile,
  children,
}) {
  return (
    <>
      <Loader theme={theme} />
      <Container>
        <Header
          handleRenderTheme={handleRenderTheme}
          theme={theme}
          logoMobile={logoMobile}
        />
        {children}
      </Container>
    </>
  );
}
