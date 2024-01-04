import React from "react";
import * as _var from "@/styles/variables";

import Layout from "@/components/Layout";
import Section from "@/components/Section/Section";
import Footer from "@/components/Footer/index";

import HeroPage from "@/components/Hero/Page";

import ProductSection from "@/components/Section/Product/ProductSection";
import ProductText from "@/components/Section/Product/ProductText";
import ProductImages from "@/components/Section/Product/ProductImages";
import ProductImage from "@/components/Section/Product/ProductImage";

import { H1, H2 } from "@/components/typefaces";

// PICTURES
import heroSkateboards from "../../public/pictures/skateboards/hextraSkateboarding-skateboardsHero-skateboards.jpg";

import sectionFullPageGeorgeBriggs from "../../public/pictures/skateboards/hextraSkateboarding-skateboardsFullPage-georgeBriggs.jpg";
import sectionFullPageSkateboardsPrimary from "../../public/pictures/skateboards/hextraSkateboarding-skateboardsFullPage-skateboards-01.jpg";
import sectionFullPageSkateboardsSecondary from "../../public/pictures/skateboards/hextraSkateboarding-skateboardsFullPage-skateboards-02.jpg";
import sectionFullPageFooter from "../../public/pictures/skateboards/hextraSkateboarding-skateboardsFooter-laurentRoyer.jpg";

import sectionProductSkateboardsPrimary from "../../public/pictures/skateboards/hextraSkateboarding-skateboardsProduct-skateboards-01.jpg";
import sectionProductSkateboardsSecondary from "../../public/pictures/skateboards/hextraSkateboarding-skateboardsProduct-skateboards-02.jpg";
import sectionProductSkateboardsThird from "../../public/pictures/skateboards/hextraSkateboarding-skateboardsProduct-skateboards-03.jpg";
import sectionProductSkateboardsFourth from "../../public/pictures/skateboards/hextraSkateboarding-skateboardsProduct-skateboards-04.jpg";
import sectionProductSkateboardsFifth from "../../public/pictures/skateboards/hextraSkateboarding-skateboardsProduct-skateboards-05.jpg";
import sectionProductSkateboardsSixth from "../../public/pictures/skateboards/hextraSkateboarding-skateboardsProduct-skateboards-06.jpg";
import sectionProductGeorgeBriggsPrimary from "../../public/pictures/skateboards/hextraSkateboarding-skateboardsProduct-georgeBriggs-01.jpg";
import sectionProductLaurentRoyerSecondary from "../../public/pictures/skateboards/hextraSkateboarding-skateboardsProduct-laurentRoyer-02.jpg";

const hero = {
  title: "Skateboards",
  subtitle: "Fabriquées dans un atelier français à moins de 200km de Bordeaux",
  groupTitle: "Direction Artistique",
  groupText: "Théo Chapdelaine",
  subGroupTitle: "Fabrication",
  subGroupText: "Rekiem Skateboards, Anglet",
  img: heroSkateboards,
};

export default function Home({ handleRenderTheme, theme }) {
  return (
    <Layout handleRenderTheme={handleRenderTheme} theme={theme}>
      <HeroPage data={hero} />

      <Section fullScreen img={sectionFullPageGeorgeBriggs} fadeIn />

      <ProductSection alignRight>
        <ProductImages>
          <ProductImage img={sectionProductSkateboardsPrimary} index={0} />
          <ProductImage img={sectionProductSkateboardsSecondary} index={1} />
        </ProductImages>
      </ProductSection>

      <Section
        fullScreen
        img={sectionFullPageSkateboardsPrimary}
        fadeIn
        textColor={`${_var.mono_010}`}
      >
        <H2>
          Taille: 8.25 & 8.5
          <br />
          Concave: high & medium
        </H2>
      </Section>

      <ProductSection>
        <ProductImages>
          <ProductImage img={sectionProductSkateboardsThird} index={0} />
          <ProductImage img={sectionProductSkateboardsFourth} index={1} />
        </ProductImages>
      </ProductSection>

      <ProductSection alignRight>
        <ProductImages>
          <ProductImage img={sectionProductSkateboardsFifth} index={0} />
          <ProductImage img={sectionProductSkateboardsSixth} index={1} />
        </ProductImages>
        <ProductText>
          <H2>
            Fabrication artisanale à moins de 200km de Bordeaux.
            <br />
            100% érable canadien &#40;certifié PEFC&#41;.
          </H2>
        </ProductText>
      </ProductSection>

      <Section fullScreen img={sectionFullPageSkateboardsSecondary} fadeIn />

      <ProductSection>
        <ProductImages>
          <ProductImage img={sectionProductGeorgeBriggsPrimary} index={0} />
          <ProductImage img={sectionProductLaurentRoyerSecondary} index={1} />
        </ProductImages>
      </ProductSection>

      <Section footer img={sectionFullPageFooter} reveal />
      <Footer theme={theme} />
    </Layout>
  );
}
