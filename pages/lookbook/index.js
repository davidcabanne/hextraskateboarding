import React from "react";

import Layout from "@/components/Layout";
import Section from "@/components/Section/Section";

import product_hextraShift_1 from "../../public/photos/Amiel---Bloc-2.jpg";
import product_hextraShift_2 from "../../public/photos/Amiel---Bloc-3.jpg";

export default function Home({ handleRenderTheme, theme }) {
  return (
    <Layout handleRenderTheme={handleRenderTheme} theme={theme}>
      <Section fullPage img={product_hextraShift_1} />
      <Section fullPage img={product_hextraShift_2} />
    </Layout>
  );
}
