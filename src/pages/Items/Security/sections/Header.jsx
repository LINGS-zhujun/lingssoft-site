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
import bg1 from "assets/images/sec-monitoring.png";
import bg2 from "assets/images/sec-drm.png";
import bg3 from "assets/images/sec-logging.png";

import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation("solutions");
  const slidesContent = t("security.header.slides", { returnObjects: true }) || [];

  const slidesConfig = [
    {
      id: "monitoring",
      image: bg1,
      cards: [
        {
          id: "process",
          variant: "contained",
          color: "success",
          icon: "monitor_heart",
          title: "프로세스 관리",
          description: "비인가 프로세스 차단",
        },
        {
          id: "net",
          variant: "gradient",
          color: "success",
          icon: "hub",
          title: "네트워크 분석",
          description: "외부 통신 감시",
        },
        {
          id: "threat",
          variant: "contained",
          color: "success",
          icon: "warning",
          title: "위협 탐지",
          description: "실시간 보안 위협 알림",
        },
      ],
    },
    {
      id: "drm",
      image: bg2,
      cards: [
        {
          id: "encrypt",
          variant: "gradient",
          color: "info",
          icon: "enhanced_encryption",
          title: "문서 암호화",
          description: "데이터 유출 방지",
        },
        {
          id: "perm",
          variant: "contained",
          color: "info",
          icon: "person_off",
          title: "권한 제어",
          description: "세밀한 접근 권한",
        },
        {
          id: "trace",
          variant: "contained",
          color: "info",
          icon: "history_edu",
          title: "이력 추적",
          description: "활용 내역 관리",
        },
      ],
    },
    {
      id: "logging",
      image: bg3,
      cards: [
        {
          id: "log",
          variant: "contained",
          color: "primary",
          icon: "storage",
          title: "로그 통합",
          description: "보안 데이터 수집",
        },
        {
          id: "iso",
          variant: "gradient",
          color: "primary",
          icon: "security",
          title: "내부 격리",
          description: "외부 유출 차단",
        },
        {
          id: "analysis",
          variant: "contained",
          color: "primary",
          icon: "analytics",
          title: "상세 분석",
          description: "사후 조사 지원",
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
