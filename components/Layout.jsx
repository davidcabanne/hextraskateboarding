import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as _var from "../styles/variables";

import Loader from "./Common/Loader";
import Header from "@/components/Header";

const Container = styled.main`
  position: relative;
  width: 100%;
`;

export default function Layout({ handleRenderTheme, theme, children }) {
  const [isNavigating, setIsNavigating] = useState(false);

  const handleActiveNavigation = (state) => {
    setIsNavigating(state);
  };

  return (
    <>
      <Loader theme={theme} />
      <Container>
        <Header
          handleRenderTheme={handleRenderTheme}
          theme={theme}
        />
        {children}
      </Container>
    </>
  );
}
