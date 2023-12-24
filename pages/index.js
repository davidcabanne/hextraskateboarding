import React from "react";

import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Product from "@/components/Section/Product";
import Video from "@/components/Section/Video";
import Footer from "@/components/Footer";

import { H1, H2 } from "../components/typefaces";

import hero from "../public/Briggo---Bloc-1.jpg";
import bloc_2_briggo from "../public/Briggo---Bloc-2.jpg";

import product_hextraShift_1 from "../public/Amiel---Bloc-2.jpg";
import product_hextraShift_2 from "../public/Amiel---Bloc-3.jpg";

import product_board_1 from "../public/Board-1---Bloc-4.jpg";
import product_board_2 from "../public/Board-2---Bloc-5.jpg";

import video_almost_there_img from "../public/video-almost--there.jpg";
const video_almost_there = {
  title: "Hextra Skateboarding | ALMOST THERE",
  src: "https://www.youtube.com/embed/0WVK8aUEoQE?si=B31ktaGrU3HrwpXY",
  img: video_almost_there_img,
  alt: "alt test",
};

import bloc_5_briggo from "../public/Briggo---Bloc-5.jpg";
import footer_img from "../public/Amiel---Bloc-8.jpg";

export default function Home() {
  return (
    <Layout>
      <Hero img={hero} />

      <Section fullScreen img={bloc_2_briggo} />

      <Product alignRight imgs={[product_hextraShift_1, product_hextraShift_2]}>
        <H1>Hextra Shift</H1>
        <H2>
          Pièces de seconde main
          <br />
          chinées et remise en état de
          <br />
          service à Bordeaux
        </H2>
      </Product>

      <Product imgs={[product_board_1, product_board_2]}>
        <H1>Hextra Skateboards</H1>
        <H2>
          Fabriquées dans un atelier français
          <br />à moins de 200km de Bordeaux.
          <br /> Composée de 7 plis d'érable canadien,
          <br /> certifié PEFC.
        </H2>
      </Product>

      <Section fullScreen img={bloc_5_briggo} />

      <Video alignRight data={video_almost_there}>
        <H1>Almost There</H1>
        <H2>
          David Métivier en action
          <br />
          pour sa première part avec
          <br /> Hextra. Filmé et édité par
          <br /> Robin Claude.
        </H2>
      </Video>

      <Section footer img={footer_img} />
      <Footer />
    </Layout>
  );
}
