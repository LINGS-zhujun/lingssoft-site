import React from "react";
import { useTranslation } from "react-i18next";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes/routes";
import footerRoutes from "routes/footer.routes";

import { useThemeMode } from "context/ThemeModeContext";

// Security sections
import Themes from "pages/Items/Security/sections/Themes";
import Revenue from "pages/Items/Security/sections/Revenue";
import Header from "pages/Items/Security/sections/Header";

const EnterpriseSecuritySuite = () => {
  const { t } = useTranslation("solutions");
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

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
        <Themes />
        <Revenue />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default EnterpriseSecuritySuite;
