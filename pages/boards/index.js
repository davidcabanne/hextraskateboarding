import React from "react";

import Layout from "@/components/Layout";
import Section from "@/components/Section/Section";

import product_board_1 from "../../public/photos/Board-1---Bloc-4.jpg";
import product_board_2 from "../../public/photos/Board-2---Bloc-5.jpg";

export default function Home({ handleRenderTheme, theme }) {
  return (
    <Layout handleRenderTheme={handleRenderTheme} theme={theme}>
      <Section fullScreen img={product_board_1} />
      <Section fullScreen img={product_board_2} />
    </Layout>
  );
}
