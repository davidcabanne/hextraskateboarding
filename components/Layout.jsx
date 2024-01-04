import React from "react";
import styled from "styled-components";
import * as _var from "../styles/variables";

import Header from "@/components/Header";

const Container = styled.main`
  position: relative;
  width: 100%;
`;

export default function Layout({ handleRenderTheme, theme, children }) {
  return (
    <Container>
      <Header handleRenderTheme={handleRenderTheme} theme={theme} />
      {children}
    </Container>
  );
}
