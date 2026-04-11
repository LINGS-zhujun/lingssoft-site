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

import { useState, useEffect } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

// Material Kit 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Pricing page sections
import Header from "pages/Company/Pricing/sections/Header";
import AboutUs from "pages/Company/Pricing/sections/AboutUs";
import PricingSection from "pages/Company/Pricing/sections/Pricing";
import LifetimeMembership from "pages/Company/Pricing/sections/LifetimeMembership";
import Testimonials from "pages/Company/Pricing/sections/Testimonials";
import Trust from "pages/Company/Pricing/sections/Trust";
import Faq from "pages/Company/Pricing/sections/Faq";

// Routes
import routes from "routes/routes";
import footerRoutes from "routes/footer.routes";

// Context
import { useThemeMode } from "context/ThemeModeContext";

function Pricing() {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  // Debug: log when the Pricing page mounts
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("[DEBUG] Pricing component mounted");
  }, []);

  return (
    <>
      <DefaultNavbar routes={routes} sticky light={isDark} transparent={false} />
      <Header />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          backgroundColor: isDark ? "rgba(12,10,24,0.85)" : "#ffffff", // Dynamic background
          color: isDark ? "#ffffff" : "inherit", // Dynamic text color base
        }}
      >
        <MKBox component="section" py={{ xs: 0, lg: 7 }}>
          <AboutUs />
          <PricingSection />
          <LifetimeMembership />
          <Testimonials />
          <Trust />
          <Faq />
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Pricing;
