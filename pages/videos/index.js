import React, { useContext, useEffect } from "react";
import Head from "next/head";
import { MouseContext } from "@/context/mouseContext";

import Layout from "@/components/Layout";
import Section from "@/components/Section/Section";
import Footer from "@/components/Footer/index";

import HeroPage from "@/components/Hero/Page";
import SectionGalleryVideo from "@/components/Section/Gallery/SectionGalleryVideo";

// PICTURES
import heroEntertainement from "../../public/pictures/videos/hextraSkateboarding-videosHero-robinClaude.jpg";

import sectionFullPageAmielCoralia from "../../public/pictures/videos/hextraSkateboarding-videosFullPage-amielCoralia.jpg";
import sectionFullPageFooter from "../../public/pictures/videos/hextraSkateboarding-videosFooter-robinClaude.jpg";

import videoGalleryAlmostThere from "../../public/pictures/videos/hextraSkateboarding-videosVideo-almostThere.jpg";
import videoGalleryHextraHoursSecondary from "../../public/pictures/videos/hextraSkateboarding-videosVideo-hextraHours2.jpg";
import videoGalleryFallWinter2022 from "../../public/pictures/videos/hextraSkateboarding-videosVideo-fallWinter.jpg";
import videoGalleryLautreRive from "../../public/pictures/videos/hextraSkateboarding-videosVideo-lAutreRive.jpg";
import videoGalleryHextraHoursPrimary from "../../public/pictures/videos/hextraSkateboarding-videosVideo-hextraHours1.jpg";
import videoGalleryNextDoor from "../../public/pictures/videos/hextraSkateboarding-videosVideo-nextDoor.jpg";

const hero = {
  title: "Hextra Vidéos",
  subtitle: "Filmé et édité au quatre coins de l'Hexagone.",
  groupTitle: "Réalisation",
  groupText: "Robin Claude",
  groupLink: "https://www.robinclaude.fr/",
  subGroupTitle: "Additional filming",
  subGroupText: "Théo Chapdelaine",
  img: heroEntertainement,
};

const gallery = [
  {
    img: videoGalleryAlmostThere,
    alt: "",
    title: "Almost There",
    link: "https://youtu.be/0WVK8aUEoQE?si=aL0hgSYWZ9niqM-B",
  },
  {
    img: videoGalleryHextraHoursSecondary,
    alt: "",
    title: "Hextra Hours 02",
    link: "",
  },
  {
    img: videoGalleryFallWinter2022,
    alt: "",
    title: "Fall/Winter 2022",
    link: "https://youtu.be/Kul2Do281q4?si=snBBDroar-_kPYdd",
  },
  {
    img: videoGalleryLautreRive,
    alt: "",
    title: "L'autre Rive",
    link: "https://youtu.be/kHJTurVNsHI?si=27v_TWKZIuzF2dLv",
  },
  {
    img: videoGalleryHextraHoursPrimary,
    alt: "",
    title: "Hextra Hours 01",
    link: "https://youtu.be/mLnTHUQlLmE?si=sKRGWQ3pvhE8Z0xZ",
  },
  {
    img: videoGalleryNextDoor,
    alt: "",
    title: "Next Door",
    link: "https://youtu.be/hQfmnwwdUFE?si=EckGWzJADF55C7-o",
  },
];

export default function Videos({ handleRenderTheme, theme }) {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  useEffect(() => {
    cursorChangeHandler("");
  }, []);
  return (
    <>
      <Head>
        <title>Hextra Skateboarding | Videos</title>
      </Head>
      <Layout handleRenderTheme={handleRenderTheme} theme={theme}>
        <HeroPage data={hero} />
        <Section
          fullScreen
          extraPadding
          img={sectionFullPageAmielCoralia}
          reveal
        />
        <SectionGalleryVideo data={gallery} theme={theme} fadeIn />
        <Section footer img={sectionFullPageFooter} reveal />
        <Footer footerLight theme={theme} />
      </Layout>
    </>
  );
}
