/**
=========================================================
* Material Kit 2 PRO React - v2.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// HelpCenter page components
import FaqCollapse from "pages/Support/HelpCenter/components/FaqCollapse";

import { useThemeMode } from "context/ThemeModeContext";
import { useTranslation } from "react-i18next";

function Faq() {
  const [collapse, setCollapse] = useState(false);
  const { mode } = useThemeMode();
  const isDark = mode === "dark";
  const { t } = useTranslation("helpcenter");

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6} my={6}>
            <MKTypography variant="h2" align="center" fontWeight="bold" gutterBottom color={isDark ? "white" : "dark"}>
              {t("faq.title")}
            </MKTypography>
            <MKBox mb={2}>
              <MKTypography variant="body2" align="center" color={isDark ? "white" : "text"} opacity={isDark ? 0.8 : 1}>
                {t("faq.description")}
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} md={10}>
            {t("faq.items", { returnObjects: true }).map((item, index) => (
              <FaqCollapse
                key={index}
                title={item.question}
                open={collapse === index + 1}
                onClick={() => (collapse === index + 1 ? setCollapse(false) : setCollapse(index + 1))}
              >
                {item.answer}
              </FaqCollapse>
            ))}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Faq;
