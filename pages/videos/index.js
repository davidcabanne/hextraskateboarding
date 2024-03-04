import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import { MouseContext } from "@/context/mouseContext";
import useElementOnScreen from "@/hooks/useElementOnScreen";

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
  subtitle: "Filmé et édité aux quatre coins de l'Hexagone.",
  groupTitle: "Réalisation",
  groupText: "Robin Claude",
  groupLink: "https://www.robinclaude.fr/",
  subGroupTitle: "Additional filming",
  subGroupText: "Théo Chapdelaine",
  img: heroEntertainement,
  alt: "George Briggs en backside nosegrind à Bordeaux, filmé par Robin Claude.",
};

const gallery = [
  {
    img: videoGalleryAlmostThere,
    alt: "Almost there, vidéo de skateboard de David Métivier pour Hextra Skateboarding.",
    title: "Almost There",
    link: "https://youtu.be/0WVK8aUEoQE?si=aL0hgSYWZ9niqM-B",
  },
  {
    img: videoGalleryHextraHoursSecondary,
    alt: "Retour en images sur l'évènement Hextra Hours 2 qui s'est tenu à Bordeaux.",
    title: "Hextra Hours 02",
    link: "https://www.instagram.com/reel/CyTpD_NMpiG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    img: videoGalleryFallWinter2022,
    alt: "George Briggs skate à travers Bordeaux pour le lancement de la capsule automne/hiver Hextra Skateboarding.",
    title: "Fall/Winter 2022",
    link: "https://youtu.be/Kul2Do281q4?si=snBBDroar-_kPYdd",
  },
  {
    img: videoGalleryLautreRive,
    alt: "Le team Hextra Skateboarding sillonne la rive droite de Bordeaux en skateboard.",
    title: "L'autre Rive",
    link: "https://youtu.be/kHJTurVNsHI?si=27v_TWKZIuzF2dLv",
  },
  {
    img: videoGalleryHextraHoursPrimary,
    alt: "Retour en images sur l'évènement Hextra Hours 1 qui s'est tenu à Bordeaux.",
    title: "Hextra Hours 01",
    link: "https://youtu.be/mLnTHUQlLmE?si=sKRGWQ3pvhE8Z0xZ",
  },
  {
    img: videoGalleryNextDoor,
    alt: "La première vidéo de skateboard du team Hextra Skateboarding, filmé à Caen, Paris et Bordeaux.",
    title: "Next Door",
    link: "https://youtu.be/hQfmnwwdUFE?si=EckGWzJADF55C7-o",
  },
];

export default function Videos({ handleRenderTheme, theme }) {
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
    setHeroLogo(isVisible);
  }, [isVisible]);
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Du skate, des ondes positives et des produits responsables fabriqués localement, en France. Filmé et édité aux quatre coins de l'Hexagone."
        />
      </Head>
      <Layout
        handleRenderTheme={handleRenderTheme}
        theme={theme}
        heroLogo={heroLogo}
      >
        <div ref={containerRef}>
          <HeroPage data={hero} />
        </div>

        <Section
          fullScreen
          extraPadding
          img={sectionFullPageAmielCoralia}
          alt="Amiel Coralia et sa caméra Panasonic à Caen."
          reveal
        />

        <SectionGalleryVideo data={gallery} theme={theme} fadeIn />

        <Section
          footer
          img={sectionFullPageFooter}
          alt="Robin Claude en mode beau gosse à Caen. "
          reveal
        />

        <Footer footerLight theme={theme} />
      </Layout>
    </>
  );
}
