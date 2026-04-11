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

import { useEffect, useMemo, useRef } from "react";

// rellax
import Rellax from "rellax";

// typed-js
import Typed from "typed.js";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// About Us page sections
import Information from "pages/Company/AboutUs/sections/Information";
import Team from "pages/Company/AboutUs/sections/Team";
import Featuring from "pages/Company/AboutUs/sections/Featuring";
import Newsletter from "pages/Company/AboutUs/sections/Newsletter";

// Routes
import routes from "routes/routes";
import footerRoutes from "routes/footer.routes";

// Images
import bgImage from "assets/images/bg-social-venture.png";
import { useTranslation } from "react-i18next";
import { useThemeMode } from "context/ThemeModeContext";

const defaultSocialLinks = [
  { id: "facebook", icon: "fab fa-facebook", url: "#" },
  { id: "instagram", icon: "fab fa-instagram", url: "#" },
  { id: "twitter", icon: "fab fa-twitter", url: "#" },
  { id: "google", icon: "fab fa-google-plus", url: "#" },
];

function AboutUsContent() {
  const headerRef = useRef(null);
  const typedJSRef = useRef(null);
  const { t, i18n } = useTranslation("about");
  const { mode } = useThemeMode(); // Theme hook
  const isDark = mode === "dark";

  const hero = useMemo(() => t("hero", { returnObjects: true }) || {}, [t, i18n.language]);
  // ... (rest of hero constants)
  const heroTitle = hero.title || "Work with an amazing";
  const heroDescription =
    hero.description ||
    "We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game";
  const heroCta = hero.cta || "create account";
  const heroSocialLabel = hero.socialLabel || "Find us on";
  const heroSocialLinks =
    Array.isArray(hero.socialLinks) && hero.socialLinks.length > 0
      ? hero.socialLinks
      : defaultSocialLinks;
  const typedStrings = useMemo(() => {
    const strings = Array.isArray(hero.typed) && hero.typed.length > 0 ? hero.typed : ["team"];
    return strings;
  }, [hero]);
  const typedDependency = typedStrings.join("|");

  // Setting up rellax
  useEffect(() => {
    const parallax = new Rellax(headerRef.current, {
      speed: -6,
    });

    return () => parallax.destroy();
  }, []);

  // Setting up typedJS
  useEffect(() => {
    if (!typedJSRef.current) return undefined;

    const typedJS = new Typed(typedJSRef.current, {
      strings: typedStrings,
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });

    return () => typedJS.destroy();
  }, [typedDependency]);

  return (
    <>
      <DefaultNavbar routes={routes} sticky light={isDark} transparent={false} />
      <MKBox
        ref={headerRef}
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          // backgroundImage: `url(${bgImage})`, // Fallback
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {heroTitle} <span ref={typedJSRef} />
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              {heroDescription}
            </MKTypography>
            <MKButton color="info">{heroCta}</MKButton>
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              {heroSocialLabel}
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              {heroSocialLinks.map((link, index) => (
                <MKTypography
                  component="a"
                  variant="body1"
                  color="white"
                  href={link.url || "#"}
                  mr={index !== heroSocialLinks.length - 1 ? 3 : 0}
                  key={link.id || index}
                >
                  <i className={link.icon} />
                </MKTypography>
              ))}
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: isDark ? "#1b1f30" : "rgba(255, 255, 255, 0.8)",
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        <Team />
        <Featuring />
        <Newsletter />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUsContent;
