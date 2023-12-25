import Head from "next/head";
import { Titillium_Web } from "next/font/google";

import { createGlobalStyle } from "styled-components";
import * as _var from "../styles/variables";

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
  min-height: 100dvh;
  min-height: -webkit-fill-available;
  text-rendering: optimizeSpeed;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

.menuActive {
    height: 100vh;
    height: 100dvh;
    overflow-y: hidden;
  }

html {
  height: -webkit-fill-available;
  font-family: 'Titilium Web', Helvetica, sans-serif;
  font-size: 16px;
  scroll-behavior: smooth;
  background: ${_var.mono_010};
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
  color: ${_var.mono_010};
  background: ${_var.mono_000};
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
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Hextra Skateboarding</title>
        {/* <meta name="description" content={headDescription} /> */}

        <link rel="icon" href="/images/favicon.ico"></link>
        <link
          rel="icon"
          type="image/x-icon"
          sizes="any"
          href="/images/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon.ico"
        />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="32x32"
          href="/images/favicon.ico"
        />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="16x16"
          href="/images/favicon.ico"
        />

        {/* OPEN GRAPH */}
        <meta property="og:title" content="Hextra Skateboarding" />
        <meta property="og:url" content="https://www.doucecateringstudio.com" />
        <meta
          property="og:site_name"
          content="douce catering | traiteur et design culinaire"
        />
        <meta property="og:type" content="website" />
        {/* <meta property="og:description" content={headDescription} />
        <meta property="og:image:secure_url" content={headImage_secure_url} />
        <meta property="og:image" content={headImage} /> */}
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="384" />
        <meta property="og:image:height" content="216" />

        {/* TWITTER CARDS */}
        <meta name="twitter:card" content="Hextra Skateboarding" />
        <meta name="twitter:site" content="@HextraSkateboarding" />
        <meta name="twitter:title" content="Hextra Skateboarding" />
        {/* <meta name="twitter:description" content={headDescription} /> */}
        {/* <meta name="twitter:image" content={headImage_secure_url} /> */}
      </Head>
      <div className={titilum.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
