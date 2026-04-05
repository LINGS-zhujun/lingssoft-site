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
import { useTranslation } from "react-i18next";

function SocialAnalytics() {
  const { t } = useTranslation("helpcenter");

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid
          container
          item
          justifyContent="center"
          xs={12}
          lg={6}
          sx={{ mx: "auto", pb: 3, textAlign: "center" }}
        >
          <MKTypography variant="h4" color="info" textGradient>
            {t("socialAnalytics.title")}
          </MKTypography>
          <MKTypography variant="h2" my={1}>
            {t("socialAnalytics.subtitle")}
          </MKTypography>
          <MKTypography variant="body1" color="text">
            {t("socialAnalytics.description")}
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultInfoCard
              icon="groups"
              title={t("socialAnalytics.cards.team.title")}
              description={t("socialAnalytics.cards.team.description")}
              direction="center"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultInfoCard
              icon="support_agent"
              title={t("socialAnalytics.cards.support.title")}
              description={t("socialAnalytics.cards.support.description")}
              direction="center"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ mx: "auto" }}>
            <DefaultInfoCard
              icon="update"
              title={t("socialAnalytics.cards.revisions.title")}
              description={t("socialAnalytics.cards.revisions.description")}
              direction="center"
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SocialAnalytics;
