import React, { useState } from "react";
import Head from "next/head";
import { Titillium_Web } from "next/font/google";
import { createGlobalStyle } from "styled-components";
import * as _var from "../styles/variables";
import * as seo from "../seo";

import MouseContextProvider from "../context/mouseContext";

import Cursor from "../components/Cursor/index";

const titilum = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

ul,
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

html:focus-within {
  scroll-behavior: smooth;
}

body {
  width: 100vw;
  min-height: 100vh;
  min-height: 100svh;
  min-height: -webkit-fill-available;
  text-rendering: optimizeSpeed;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  background:  ${(props) => (props.theme ? _var.mono_010 : _var.mono_000)};
  transition: 200ms ${_var.cubicBezier};
  transition-property: opacity, background;
  transition-delay: 0ms;

  cursor: none;
  @media ${_var.device.tablet_max} {
    cursor: auto !important;
  }
}

.menuActive {
    height: 100vh;
    height: 100svh;
    overflow-y: hidden;
  }

  .page-exit-transition {
    opacity: 0;
    transition: opacity 500ms ${_var.cubicBezier};
    transition-delay: 500ms;
  }


html {
  height: -webkit-fill-available;
  font-family: 'Titilium Web', Helvetica, sans-serif;
  font-size: 16px;
  scroll-behavior: smooth;
}

a:not([class]) {
  text-decoration: none;
  text-decoration-skip-ink: auto;
}

::-moz-selection {
  color: ${_var.mono_010};
  background: ${_var.mono_000};
}

::selection {
  color: ${(props) => (props.theme ? _var.mono_010 : _var.mono_000)};
  background: ${(props) => (props.theme ? _var.mono_000 : _var.mono_010)};
}

h1, h2, h3, h4, h5, h6 {
  color:  ${(props) => (props.theme ? _var.mono_000 : _var.mono_010)};
  transition: color 200ms ${_var.cubicBezier};
  transition-property: color;
}

svg {
  fill: ${(props) => (props.theme ? _var.mono_000 : _var.mono_010)};
  transition: fill 200ms ${_var.cubicBezier};
}

footer {
  & h5 {
    color: ${_var.mono_010};
  }
}

.menuActive {
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    overflow: hidden;
  }

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

function MyApp({ Component, pageProps }) {
  // Theme settings :
  // light === true | dark === false
  const [theme, setTheme] = useState(true);

  const handleRenderTheme = (value) => {
    setTheme(!value);
  };

  return (
    <>
      <MouseContextProvider>
        <GlobalStyle theme={theme} />
        <Head>
          <title>Hextra Skateboarding</title>
          <meta name="description" content={seo.content} />

          <link rel="icon" href="/favicon.ico"></link>
          <link
            rel="icon"
            type="image/x-icon"
            sizes="any"
            href="/favicon.ico"
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
          <link
            rel="icon"
            type="image/x-icon"
            sizes="32x32"
            href="/favicon.ico"
          />
          <link
            rel="icon"
            type="image/x-icon"
            sizes="16x16"
            href="/favicon.ico"
          />

          {/* OPEN GRAPH */}
          <meta property="og:title" content="Hextra Skateboarding" />
          <meta
            property="og:url"
            content="https://www.hextraskateboarding.com"
          />
          <meta
            property="og:site_name"
            content="douce catering | traiteur et design culinaire"
          />
          <meta property="og:type" content="website" />
          <meta property="og:description" content={seo.headDescription} />
          <meta
            property="og:image:secure_url"
            content={seo.headImage_secure_url}
          />
          <meta property="og:image" content={seo.headImage} />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="384" />
          <meta property="og:image:height" content="216" />

          {/* TWITTER CARDS */}
          <meta name="twitter:card" content="Hextra Skateboarding" />
          <meta name="twitter:site" content="@HextraSkateboarding" />
          <meta name="twitter:title" content="Hextra Skateboarding" />
          <meta name="twitter:description" content={seo.headDescription} />
          <meta name="twitter:image" content={seo.headImage_secure_url} />
        </Head>
        <div className={titilum.className}>
          <Cursor />
          <Component
            {...pageProps}
            handleRenderTheme={handleRenderTheme}
            theme={theme}
          />
        </div>
      </MouseContextProvider>
    </>
  );
}

export default MyApp;
