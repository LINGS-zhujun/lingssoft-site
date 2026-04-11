// SwiperJS
import SwiperCore, { Autoplay, Navigation } from "swiper";

// SwiperJS react components
import { Swiper, SwiperSlide } from "swiper/react";

// SwiperJS styles
import "swiper/swiper.min.css";
import "swiper/css/navigation";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

// Pricing page components (Reusing the SliderHeader component)
import SliderHeader from "pages/Company/Pricing/components/Header";

// Images
import bg1 from "assets/images/devops-appliance.png";
import bg2 from "assets/images/devops-security.png";
import bg3 from "assets/images/devops-vibecoding.png";

import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation("solutions");
  const slidesContent = t("ai.header.slides", { returnObjects: true }) || [];

  const slidesConfig = [
    {
      id: "energy",
      image: bg1,
      cards: [
        {
          id: "efficiency",
          variant: "gradient",
          color: "info",
          icon: "bolt",
          title: "최적 배분",
          description: "컴퓨팅 자원의 지능적 배분",
        },
        {
          id: "eco",
          variant: "contained",
          color: "info",
          icon: "eco",
          title: "저전력 운영",
          description: "운영 비용 절감",
        },
        {
          id: "carbon",
          variant: "contained",
          color: "info",
          icon: "co2",
          title: "탄소 중립",
          description: "지속 가능한 경영 지원",
        },
      ],
    },
    {
      id: "security",
      image: bg2,
      cards: [
        {
          id: "lock",
          variant: "contained",
          color: "primary",
          icon: "lock",
          title: "보안 강화",
          description: "완벽한 폐쇄적 환경",
        },
        {
          id: "shield",
          variant: "gradient",
          color: "primary",
          icon: "shield",
          title: "정보 보호",
          description: "핵심 자산 유출 방지",
        },
        {
          id: "admin",
          variant: "contained",
          color: "primary",
          icon: "admin_panel_settings",
          title: "통제권",
          description: "데이터 유통 투명성",
        },
      ],
    },
    {
      id: "devops",
      image: bg3,
      cards: [
        {
          id: "automation",
          variant: "contained",
          color: "error",
          icon: "auto_fix_high",
          title: "자동화",
          description: "파이프라인 구축 단축",
        },
        {
          id: "speed",
          variant: "contained",
          color: "error",
          icon: "speed",
          title: "속도",
          description: "배포 주기 가속화",
        },
        {
          id: "quality",
          variant: "gradient",
          color: "error",
          icon: "verified",
          title: "품질",
          description: "안정적인 서비스 운영",
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
    <MKBox component="section">
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
