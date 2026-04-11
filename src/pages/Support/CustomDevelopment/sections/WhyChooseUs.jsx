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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgImage from "assets/images/why-choose-us.jpg"; // Placeholder, will be replaced by generated image in index

import { useTranslation } from "react-i18next";
import { useThemeMode } from "context/ThemeModeContext";

function WhyChooseUs() {
  const { t } = useTranslation("customdev");
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <MKTypography variant="h3" mb={1} color={isDark ? "white" : "dark"}>
              {t("whyChooseUs.title")}
            </MKTypography>
            <MKTypography
              variant="body2"
              mb={3}
              color={isDark ? "white" : "text"}
              opacity={isDark ? 0.8 : 1}
            >
              {t("whyChooseUs.description")}
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="public"
                  title={t("whyChooseUs.items.global.title")}
                  description={t("whyChooseUs.items.global.description")}
                  direction="left"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="payments"
                  title={t("whyChooseUs.items.value.title")}
                  description={t("whyChooseUs.items.value.description")}
                  direction="left"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="apps"
                  title={t("whyChooseUs.items.innovative.title")}
                  description={t("whyChooseUs.items.innovative.description")}
                  direction="left"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="3p"
                  title={t("whyChooseUs.items.agile.title")}
                  description={t("whyChooseUs.items.agile.description")}
                  direction="left"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default WhyChooseUs;
