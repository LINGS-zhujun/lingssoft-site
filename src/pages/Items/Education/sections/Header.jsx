// SwiperJS
import SwiperCore, { Autoplay, Navigation } from "swiper";

// SwiperJS react components
import { Swiper, SwiperSlide } from "swiper/react";

// SwiperJS styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

// Pricing page components
import SliderHeader from "pages/Company/Pricing/components/Header";

// Images
import bg1 from "assets/images/edu-branding.png";
import bg2 from "assets/images/edu-data.png";
import bg3 from "assets/images/edu-interaction.png";

import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation("solutions");
  const slidesContent = t("education.header.slides", { returnObjects: true }) || [];

  const slidesConfig = [
    {
      id: "branding",
      image: bg1,
      cards: [
        {
          id: "brand",
          variant: "contained",
          color: "info",
          icon: "school",
          title: "브랜드 강화",
          description: "독립적 브랜드 구축",
        },
        {
          id: "resp",
          variant: "gradient",
          color: "info",
          icon: "devices",
          title: "반응형 디자인",
          description: "모든 기기 최적화",
        },
        {
          id: "dash",
          variant: "contained",
          color: "info",
          icon: "dashboard",
          title: "강사 전용 대시보드",
          description: "직관적인 운영 관리",
        },
      ],
    },
    {
      id: "data",
      image: bg2,
      cards: [
        {
          id: "sec",
          variant: "gradient",
          color: "success",
          icon: "security",
          title: "데이터 보안",
          description: "학습 기록 보호",
        },
        {
          id: "util",
          variant: "contained",
          color: "success",
          icon: "analytics",
          title: "자율적 활용",
          description: "맞춤형 학습 분석",
        },
        {
          id: "indep",
          variant: "contained",
          color: "success",
          icon: "leak_remove",
          title: "플랫폼 독립",
          description: "영구적 소유 보장",
        },
      ],
    },
    {
      id: "interaction",
      image: bg3,
      cards: [
        {
          id: "hifi",
          variant: "contained",
          color: "primary",
          icon: "video_call",
          title: "고화질 영상",
          description: "선명한 영상 통화",
        },
        {
          id: "white",
          variant: "gradient",
          color: "primary",
          icon: "edit",
          title: "디지털 판서",
          description: "실시간 공유 보드",
        },
        {
          id: "inter",
          variant: "contained",
          color: "primary",
          icon: "forum",
          title: "실시간 참여",
          description: "상호작용 툴 제공",
        },
      ],
    },
  ];

  const slides = slidesConfig.map((slide) => {
    const content = slidesContent.find(({ id }) => id === slide.id) || {};
    const cards = slide.cards.map((card, index) => {
      const cardContent = (content.cards || [])[index] || {};
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
    <MKBox component="section" py={0}>
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
              actionLabel=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </MKBox>
  );
}

export default Header;
