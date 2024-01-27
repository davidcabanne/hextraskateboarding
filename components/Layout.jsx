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
  heroLogo,
  skateboardsPage,
  children,
}) {
  return (
    <>
      <Loader theme={theme} />
      <Container>
        <Header
          handleRenderTheme={handleRenderTheme}
          theme={theme}
          heroLogo={heroLogo}
          skateboardsPage={skateboardsPage}
        />
        {children}
      </Container>
    </>
  );
}
