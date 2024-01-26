import React, { useContext, useEffect } from "react";
import { MouseContext } from "@/context/mouseContext";

import * as _var from "@/styles/variables";

import Layout from "@/components/Layout";
import Hero from "@/components/Hero/Home";
import Section from "@/components/Section/Section";
import Footer from "@/components/Footer/index";

import ProductSection from "@/components/Section/Product/ProductSection";
import ProductText from "@/components/Section/Product/ProductText";
import ProductImages from "@/components/Section/Product/ProductImages";
import ProductImage from "@/components/Section/Product/ProductImage";

import VideoSection from "@/components/Section/Video/VideoSection";
import VideoPlaceholder from "@/components/Section/Video/VideoPlaceholder";
import VideoText from "@/components/Section/Video/VideoText";

import SplitSection from "@/components/Section/Split/SplitSection";

import { H1, H2 } from "../components/typefaces";
import ButtonPrimary from "@/components/Button/ButtonPrimary";

// PICTURES
import homeHeroGeorgeBriggs from "../public/pictures/home/hextraSkateboarding-homeHero-georgeBriggs-01.jpg";
import homeHeroDavidCabanne from "../public/pictures/home/hextraSkateboarding-homeHero-davidCabanne-03.jpg";
import homeHeroDavidMétivier from "../public/pictures/home/hextraSkateboarding-homeHero-davidMétivier-04.jpg";
import homeHeroLaurentRoyer from "../public/pictures/home/hextraSkateboarding-homeHero-laurentRoyer-05.jpg";
import homeHeroGabrielRenault from "../public/pictures/home/hextraSkateboarding-homeHero-gabrielRenault-06.jpg";

const heroes = [
  {
    name: "George Briggs",
    img: homeHeroGeorgeBriggs,
    index: 0,
  },
  {
    name: "David Cabanne",
    img: homeHeroDavidCabanne,
    index: 1,
  },
  {
    name: "David Métivier",
    img: homeHeroDavidMétivier,
    index: 2,
  },
  {
    name: "Laurent Royer",
    img: homeHeroLaurentRoyer,
    index: 3,
  },
  {
    name: "Gabriel Renault",
    img: homeHeroGabrielRenault,
    index: 4,
  },
];

import sectionFullPageGeorgeBriggs from "../public/pictures/home/hextraSkateboarding-homeFullPage-georgeBriggs-01.jpg";
import sectionFullPageTeam from "../public/pictures/home/hextraSkateboarding-homeFullPage-team-02.jpg";
import sectionFullPageFooter from "../public/pictures/home/hextraSkateboarding-homeFooter-amielCoralia-03.jpg";

import sectionProductHextraShiftPrimary from "../public/pictures/home/hextraSkateboarding-homeProduct-hextraShift-01.jpg";
import sectionProductHextraShiftSecondary from "../public/pictures/home/hextraSkateboarding-homeProduct-hextraShift-02.jpg";

import sectionProductSkateboardsPrimary from "../public/pictures/home/hextraSkateboarding-homeProduct-skateboards-01.jpg";
import sectionProductSkateboardsSecondary from "../public/pictures/home/hextraSkateboarding-homeProduct-skateboards-02.jpg";

import sectionVideo from "../public/pictures/videos/hextraSkateboarding-videosVideo-almostThere.jpg";

const video_almost_there = {
  title: "Hextra Skateboarding | ALMOST THERE",
  src: "https://www.youtube.com/embed/0WVK8aUEoQE?si=B31ktaGrU3HrwpXY",
  img: sectionVideo,
  alt: "Artwork de la vidéo part Almost There de David Métivier pour Hextra Skateboarding",
};

import sectionSplitMtvPrimary from "../public/pictures/home/hextraSkateboarding-homeSplit-davidMétivier-01.jpg";
import sectionSplitMtvSecondary from "../public/pictures/home/hextraSkateboarding-homeSplit-davidMétivier-02.jpg";

export default function Home({ handleRenderTheme, theme }) {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  useEffect(() => {
    cursorChangeHandler("");
  }, []);

  return (
    <Layout handleRenderTheme={handleRenderTheme} theme={theme}>
      <Hero imgs={heroes} />

      <Section
        fullScreen
        extraPadding
        img={sectionFullPageGeorgeBriggs}
        reveal
        textColor={`${_var.mono_000}`}
      >
        <H2>
          Designed in Bordeaux.
          <br />
          Made in France.
        </H2>
      </Section>

      <ProductSection alignRight>
        <ProductImages>
          <ProductImage img={sectionProductHextraShiftPrimary} index={0} />
          <ProductImage img={sectionProductHextraShiftSecondary} index={1} />
        </ProductImages>
        <ProductText>
          <H1>Look Book</H1>
          <H2>
            Fabriqué ou chiné en France, résistant aux chutes les plus
            violentes.
          </H2>
          <ButtonPrimary
            link="/lookbook"
            ariaLabel="En savoir plus en visitant notre page lookbook"
            theme={theme}
            alignRight
          />
        </ProductText>
      </ProductSection>

      <ProductSection>
        <ProductImages>
          <ProductImage img={sectionProductSkateboardsPrimary} index={0} />
          <ProductImage img={sectionProductSkateboardsSecondary} index={1} />
        </ProductImages>
        <ProductText>
          <H1>Hextra Skateboards</H1>
          <H2>
            Fabriquées dans un atelier français à moins de 200km de Bordeaux.
          </H2>
          <ButtonPrimary
            link="/skateboards"
            ariaLabel="En savoir plus en visitant notre page skateboards"
            theme={theme}
          />
        </ProductText>
      </ProductSection>

      <Section
        fullScreen
        img={sectionFullPageTeam}
        reveal
        textColor={`${_var.mono_010}`}
      >
        <H2>
          Rip the streets,
          <br />
          not the planet.
        </H2>
      </Section>

      <VideoSection>
        <VideoPlaceholder data={video_almost_there} />
        <VideoText alignRight>
          <H1>Almost There</H1>
          <H2>David Métivier en action pour sa première part avec Hextra.</H2>
        </VideoText>
      </VideoSection>

      <SplitSection imgs={[sectionSplitMtvPrimary, sectionSplitMtvSecondary]} />

      <Section footer footerFade img={sectionFullPageFooter} reveal />

      <Footer />
    </Layout>
  );
}
