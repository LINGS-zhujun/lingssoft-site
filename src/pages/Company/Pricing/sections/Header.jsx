/*
=========================================================
* Material Kit 2 PRO React - v2.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// SwiperJS
import SwiperCore, { Autoplay, Navigation } from "swiper";

// SwiperJS react components
import { Swiper, SwiperSlide } from "swiper/react";

// SwiperJS styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";

// Pricing page components
import SliderHeader from "pages/Company/Pricing/components/Header";

// Images
import bg1 from "assets/images/pricing-luxury-secretary.png";
import bg2 from "assets/images/pricing-team-executive.png";
import bg3 from "assets/images/pricing-office-assistant.png";
import { useTranslation } from "react-i18next";

const slidesConfig = [
  {
    id: "pricingPlans",
    image: bg1,
    cards: [
      { id: "shuffle", variant: "gradient", color: "info", icon: "shuffle" },
      { id: "landbot", variant: "contained", color: "info", icon: "redeem" },
      { id: "brave", variant: "contained", color: "info", icon: "bookmarks" },
    ],
  },
  {
    id: "team",
    image: bg2,
    cards: [
      { id: "shuffle", variant: "contained", color: "primary", icon: "shuffle_on" },
      { id: "landbot", variant: "gradient", color: "primary", icon: "beenhere" },
      { id: "brave", variant: "contained", color: "primary", icon: "ballot" },
    ],
  },
  {
    id: "office",
    image: bg3,
    cards: [
      { id: "shuffle", variant: "contained", color: "error", icon: "tune" },
      { id: "landbot", variant: "contained", color: "error", icon: "settings_suggest" },
      { id: "brave", variant: "gradient", color: "error", icon: "compare" },
    ],
  },
];

function Header() {
  const { t } = useTranslation("pricing");
  const slidesContent = t("header.slides", { returnObjects: true }) || [];
  const actionLabel = t("header.cardActionLabel");

  const slides = slidesConfig.map((slide) => {
    const content = slidesContent.find(({ id }) => id === slide.id) || {};
    const cards = slide.cards.map((card) => {
      const cardContent = (content.cards || []).find(({ id }) => id === card.id) || {};
      return { ...card, ...cardContent };
    });

    return {
      ...slide,
      ...content,
      cards,
    };
  });

  // install SwiperJS modules
  SwiperCore.use([Autoplay, Navigation]);

  return (
    <Swiper
      autoplay={{ delay: 5000 }}
      speed={800}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      loop
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <SliderHeader
            image={slide.image}
            label={slide.label || ""}
            title={slide.title || ""}
            description={slide.description || ""}
            cards={slide.cards}
            actionLabel={actionLabel}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Header;
