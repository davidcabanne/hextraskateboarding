import React from "react";

import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Product from "@/components/Section/Product";
import Video from "@/components/Section/Video";
import Split from "@/components/Section/Split";
import Footer from "@/components/Footer";

import { H1, H2 } from "../components/typefaces";

import hero_briggo from "../public/photos/Briggo---Bloc-1.jpg";
import hero_amiel from "../public/photos/Amiel---Bloc-1.jpg";
import hero_dave_primary from "../public/photos/Dave---Bloc-1.jpg";
import hero_dave_secondary from "../public/photos/David---Bloc-1.jpg";
import hero_MTV from "../public/photos/MTV---Bloc-1.jpg";
import split_laurent from "../public/photos/Laurent---Bloc-7.jpg";

const heroes = [
  {
    name: "George Briggs",
    img: hero_briggo,
    index: 0,
  },
  {
    name: "Amiel Coralia",
    img: hero_amiel,
    index: 1,
  },
  {
    name: "David Cabanne",
    img: hero_dave_primary,
    index: 2,
  },
  {
    name: "David Cabanne",
    img: hero_dave_secondary,
    index: 3,
  },
  {
    name: "David Métivier",
    img: hero_MTV,
    index: 4,
  },
];

import bloc_2_briggo from "../public/photos/Briggo---Bloc-2.jpg";

import product_hextraShift_1 from "../public/photos/Amiel---Bloc-2.jpg";
import product_hextraShift_2 from "../public/photos/Amiel---Bloc-3.jpg";

import product_board_1 from "../public/photos/Board-1---Bloc-4.jpg";
import product_board_2 from "../public/photos/Board-2---Bloc-5.jpg";

import video_almost_there_img from "../public/video/video-almost--there.jpg";
const video_almost_there = {
  title: "Hextra Skateboarding | ALMOST THERE",
  src: "https://www.youtube.com/embed/0WVK8aUEoQE?si=B31ktaGrU3HrwpXY",
  img: video_almost_there_img,
  alt: "alt test",
};

import bloc_5_briggo from "../public/photos/Briggo---Bloc-5.jpg";
import footer_img from "../public/photos/Amiel---Bloc-8.jpg";

export default function Home({ handleRenderTheme, theme }) {
  return (
    <Layout handleRenderTheme={handleRenderTheme} theme={theme}>
      <Hero imgs={heroes} />

      <Section fullScreen img={bloc_2_briggo} />

      <Product alignRight imgs={[product_hextraShift_1, product_hextraShift_2]}>
        <H1>Hextra Shift</H1>
        <H2>
          Pièces de seconde main chinées et remise en état de service à
          Bordeaux.
        </H2>
      </Product>

      <Product imgs={[product_board_1, product_board_2]}>
        <H1>Hextra Skateboards</H1>
        <H2>
          Fabriquées dans un atelier français à moins de 200km de Bordeaux.
          Composée de 7 plis d'érable canadien, certifié PEFC.
        </H2>
      </Product>

      <Section fullScreen img={bloc_5_briggo} />

      <Video alignRight data={video_almost_there}>
        <H1>Almost There</H1>
        <H2>
          David Métivier en action pour sa première part avec Hextra. Filmé et
          édité par Robin Claude.
        </H2>
      </Video>

      <Split imgs={[hero_MTV, split_laurent]} />

      <Section footer img={footer_img} />
      <Footer />
    </Layout>
  );
}
