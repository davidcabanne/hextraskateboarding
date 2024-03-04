import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";

import useElementOnScreen from "@/hooks/useElementOnScreen";

import { MouseContext } from "@/context/mouseContext";
import * as _var from "@/styles/variables";

import Layout from "@/components/Layout";
import Section from "@/components/Section/Section";
import Footer from "@/components/Footer/index";

import HeroPage from "@/components/Hero/Page";

import ProductSection from "@/components/Section/Product/ProductSection";
import ProductText from "@/components/Section/Product/ProductText";
import ProductImages from "@/components/Section/Product/ProductImages";
import ProductImage from "@/components/Section/Product/ProductImage";

import { H2 } from "@/components/typefaces";

// PICTURES
import heroSkateboards from "../../public/pictures/skateboards/hextraSkateboarding-skateboardsHero-skateboards-alt.jpg";

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
  title: "Hextra Skateboards",
  subtitle: "Fabriquées dans un atelier français à moins de 200km de Bordeaux",
  groupTitle: "Direction Artistique",
  groupText: "Théo Chapdelaine",
  subGroupTitle: "Fabrication",
  subGroupText: "Rekiem Skateboards, Anglet",
  img: heroSkateboards,
  alt: "Planche de skateboard Hextra Skateboarding, désignée à Bordeaux et fabriquée en France.",
};

export default function Skateboards({ handleRenderTheme, theme }) {
  const [heroLogo, setHeroLogo] = useState();

  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  useEffect(() => {
    cursorChangeHandler("");
  }, []);

  // HOOK
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "-40px 0px 0px 0px",
    threshold: 0,
  });

  useEffect(() => {
    // theme === light
    if (theme && isVisible) {
      setHeroLogo(false);
    }
    if (theme && !isVisible) {
      setHeroLogo(false);
    }

    // !theme === dark
    if (theme === false && isVisible) {
      setHeroLogo(false);
    }
    if (theme === false && !isVisible) {
      setHeroLogo(true);
    }
  }, [theme, isVisible]);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Des planches de skateboard désignées à Bordeaux et fabriquées en France."
        />
      </Head>
      <Layout
        handleRenderTheme={handleRenderTheme}
        theme={theme}
        heroLogo={heroLogo}
        skateboardsPage
      >
        <div ref={containerRef}>
          <HeroPage data={hero} textDark />
        </div>

        <Section
          fullScreen
          extraPadding
          img={sectionFullPageGeorgeBriggs}
          alt="George Briggs passe la planche de skateboard Hextra Skateboarding au test en ollie à Orléans, filmé par Robin Claude."
          objectPosition="top"
          fadeIn
        />

        <ProductSection alignRight>
          <ProductImages>
            <ProductImage
              img={sectionProductSkateboardsPrimary}
              index={0}
              alt="Planches de skateboard Hextra Skateboarding, désignées à Bordeaux et fabriquées en France."
            />
            <ProductImage
              img={sectionProductSkateboardsSecondary}
              index={1}
              alt="Planches de skateboard Hextra Skateboarding, désignées à Bordeaux et fabriquées en France."
            />
          </ProductImages>
        </ProductSection>

        <Section
          fullScreen
          img={sectionFullPageSkateboardsPrimary}
          alt="Planches de skateboard Hextra Skateboarding, désignées à Bordeaux et fabriquées en France."
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
            <ProductImage
              img={sectionProductSkateboardsThird}
              index={0}
              alt="Planche de skateboard Hextra Skateboarding, désignée à Bordeaux et fabriquée en France."
            />
            <ProductImage
              img={sectionProductSkateboardsFourth}
              index={1}
              alt="Planche de skateboard Hextra Skateboarding, désignée à Bordeaux et fabriquée en France."
            />
          </ProductImages>
        </ProductSection>

        <ProductSection alignRight>
          <ProductImages>
            <ProductImage
              img={sectionProductSkateboardsFifth}
              index={0}
              alt="Planche de skateboard Hextra Skateboarding, désignée à Bordeaux et fabriquée en France."
            />
            <ProductImage
              img={sectionProductSkateboardsSixth}
              index={1}
              alt="Planche de skateboard Hextra Skateboarding, désignée à Bordeaux et fabriquée en France."
            />
          </ProductImages>
          <ProductText>
            <H2 style={{ textWrap: "balance" }}>
              Fabrication artisanale à moins de 200km de Bordeaux.
              <br />
              100% érable canadien &#40;certifié PEFC&#41;.
            </H2>
          </ProductText>
        </ProductSection>

        <Section
          fullScreen
          img={sectionFullPageSkateboardsSecondary}
          alt="Planche de skateboard Hextra Skateboarding, désignée à Bordeaux et fabriquée en France à partir d'érable canadien."
          fadeIn
        />

        <ProductSection>
          <ProductImages>
            <ProductImage
              img={sectionProductGeorgeBriggsPrimary}
              alt="George Briggs en frontside bluntslide à Bordeaux."
              index={0}
            />
            <ProductImage
              img={sectionProductLaurentRoyerSecondary}
              alt="Laurent Royer en frontside boardslide à Caen."
              index={1}
            />
          </ProductImages>
        </ProductSection>

        <Section
          footer
          footerFade
          img={sectionFullPageFooter}
          alt="Laurent Royer en 360 flip à Caen.s"
          reveal
        />
        <Footer theme={theme} />
      </Layout>
    </>
  );
}
