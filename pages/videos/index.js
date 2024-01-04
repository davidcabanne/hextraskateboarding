import React from "react";

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
  title: "Videos",
  subtitle: "Filmé et édité au quatre coins de l'Hexagone.",
  groupTitle: "Réalisation",
  groupText: "Robin Claude",
  subGroupTitle: "Additional filming",
  subGroupText: "Théo Chapdelaine",
  img: heroEntertainement,
};

const gallery = [
  { img: videoGalleryAlmostThere, alt: "", title: "Almost There", video: "" },
  {
    img: videoGalleryHextraHoursSecondary,
    alt: "",
    title: "Hextra Hours 02",
    video: "",
  },
  {
    img: videoGalleryFallWinter2022,
    alt: "",
    title: "Fall/Winter 2022",
    video: "",
  },
  { img: videoGalleryLautreRive, alt: "", title: "L'autre Rive", video: "" },
  {
    img: videoGalleryHextraHoursPrimary,
    alt: "",
    title: "Hextra Hours 01",
    video: "",
  },
  { img: videoGalleryNextDoor, alt: "", title: "Next Door", video: "" },
];

export default function Home({ handleRenderTheme, theme }) {
  return (
    <Layout handleRenderTheme={handleRenderTheme} theme={theme}>
      <HeroPage data={hero} />
      <Section fullScreen img={sectionFullPageAmielCoralia} reveal />
      <SectionGalleryVideo data={gallery} fadeIn />
      <Section footer img={sectionFullPageFooter} reveal />
      <Footer footerLight theme={theme} />
    </Layout>
  );
}
