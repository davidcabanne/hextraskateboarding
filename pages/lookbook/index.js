import React, { useContext, useEffect } from "react";
import Head from "next/head";

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

import SectionGalleryPage from "@/components/Section/Gallery/SectionGalleryPage";

import { H1, H2 } from "@/components/typefaces";

// PICTURES
import heroLookbook from "../../public/pictures/lookbook/hextraSkateboarding-lookbookHero-amielcoralia.jpg";

import sectionFullPageGeorgeBriggs from "../../public/pictures/lookbook/hextraSkateboarding-lookbookFullPage-georgeBriggs.jpg";
import sectionFullPageFooter from "../../public/pictures/lookbook/hextraSkateboarding-lookbookFooter-team.jpg";
import sectionFullPageQuentinDemeester from "../../public/pictures/lookbook/hextraSkateboarding-lookbookFullPage-quentinDemeester.jpg";
import sectionFullPageUlla from "../../public/pictures/lookbook/hextraSkateboarding-lookbookFullPage-ulla.jpg";

import sectionProductQuentinDemeesterPrimary from "../../public/pictures/lookbook/hextraSkateboarding-lookbookProduct-quentinDemeester-01.jpg";
import sectionProductQuentinDemeesterSecondary from "../../public/pictures/lookbook/hextraSkateboarding-lookbookProduct-quentinDemeester-02.jpg";

import sectionProductAmielCoraliaPrimary from "../../public/pictures/lookbook/hextraSkateboarding-lookbookProduct-amielCoralia-01.jpg";
import sectionProductAmielCoraliaSecondary from "../../public/pictures/lookbook/hextraSkateboarding-lookbookProduct-amielCoralia-02.jpg";
import sectionProductAmielCoraliaThird from "../../public/pictures/lookbook/hextraSkateboarding-lookbookProduct-amielCoralia-03.jpg";
import sectionProductAmielCoraliaFourth from "../../public/pictures/lookbook/hextraSkateboarding-lookbookProduct-amielCoralia-04.jpg";

import sectionProductScarfPrimary from "../../public/pictures/lookbook/hextraSkateboarding-lookbookProduct-scarf-01.jpg";
import sectionProductScarfSecondary from "../../public/pictures/lookbook/hextraSkateboarding-lookbookProduct-scarf-02.jpg";

const hero = {
  title: "Hextra Lookbook",
  subtitle:
    "Fabriquées/chiné en France, résistant aux chutes les plus violentes.",
  groupTitle: "Direction Artistique",
  groupText: "Théo Chapdelaine",
  subGroupTitle: "Fabrication",
  subGroupText: "<500km de Bordeaux",
  img: heroLookbook,
};

const gallery = {
  src: sectionFullPageUlla,
  alt: "alt",
};

export default function Lookbook({ handleRenderTheme, theme }) {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  useEffect(() => {
    cursorChangeHandler("");
  }, []);
  return (
    <>
      <Head>
        <title>Hextra Skateboarding | Lookbook</title>
      </Head>
      <Layout handleRenderTheme={handleRenderTheme} theme={theme}>
        <HeroPage data={hero} />

        <Section
          fullScreen
          extraPadding
          img={sectionFullPageGeorgeBriggs}
          reveal
        />

        <ProductSection alignRight>
          <ProductImages>
            <ProductImage
              img={sectionProductQuentinDemeesterPrimary}
              index={0}
            />
            <ProductImage
              img={sectionProductQuentinDemeesterSecondary}
              index={1}
            />
          </ProductImages>
        </ProductSection>

        <Section
          fullScreen
          img={sectionFullPageQuentinDemeester}
          objectPosition="top"
          reveal
          textColor={`${_var.mono_010}`}
        >
          <H2>
            Confectionné en France.
            <br />
            100% coton recyclé.
          </H2>
        </Section>

        <ProductSection>
          <ProductImages>
            <ProductImage img={sectionProductAmielCoraliaPrimary} index={0} />
            <ProductImage img={sectionProductAmielCoraliaSecondary} index={1} />
          </ProductImages>
        </ProductSection>

        <ProductSection alignRight>
          <ProductImages>
            <ProductImage img={sectionProductAmielCoraliaThird} index={0} />
            <ProductImage img={sectionProductAmielCoraliaFourth} index={1} />
          </ProductImages>
          <ProductText>
            <H1>Hextra Shift</H1>
            <H2>
              Pièces de seconde main.
              <br />
              chinées et remises en état de
              <br />
              service à Bordeaux.
            </H2>
          </ProductText>
        </ProductSection>

        <SectionGalleryPage img={gallery} />

        <ProductSection>
          <ProductImages>
            <ProductImage img={sectionProductScarfPrimary} index={0} />
            <ProductImage img={sectionProductScarfSecondary} index={1} />
          </ProductImages>
          <ProductText>
            <H1>Hextra Scarf</H1>
            <H2>
              Écharpe tricotée à Bordeaux.
              <br />À partir de laine 100% française.
            </H2>
          </ProductText>
        </ProductSection>

        <Section footer img={sectionFullPageFooter} reveal />
        <Footer footerLight theme={theme} />
      </Layout>
    </>
  );
}
