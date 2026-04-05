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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultBackgroundCard from "examples/Cards/BackgroundCards/DefaultBackgroundCard";
import { useTranslation } from "react-i18next";

// HelpCenter page components
import ListItem from "pages/Support/HelpCenter/components/ListItem";

// Images
import bgImage1 from "assets/images/examples/color1.jpg";
import bgImage2 from "assets/images/examples/color3.jpg";

import { useThemeMode } from "context/ThemeModeContext";

function Features() {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";
  const { t } = useTranslation("helpcenter");

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          xs={10}
          lg={5}
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKBox
            width="3rem"
            height="3rem"
            borderRadius="lg"
            shadow="md"
            variant="gradient"
            bgColor="info"
            color="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon fontSize="small" sx={{ opacity: 0.8 }}>
              settings
            </Icon>
          </MKBox>
          <MKTypography variant="h3" mt={3} color={isDark ? "white" : "dark"}>
            {t("features.title")}
          </MKTypography>
          <MKTypography variant="body2" color={isDark ? "white" : "text"} opacity={isDark ? 0.8 : 1}>
            {t("features.subtitle")}
          </MKTypography>
        </Grid>
        <Grid container spacing={3} alignItems="center" sx={{ mt: 6 }}>
          <Grid item xs={12} md={4} sx={{ ml: "auto" }}>
            <DefaultBackgroundCard
              image={bgImage1}
              label={t("features.cards.0.label")}
              title={t("features.cards.0.title")}
              description={t("features.cards.0.description")}
              action={{
                type: "internal",
                route: "/pages/support/help-center",
                label: t("features.cards.0.cta"),
              }}
            />
          </Grid>
          <Grid item xs={12} md={5} sx={{ mr: "auto", ml: { xs: 0, md: 6 } }}>
            {t("features.list1", { returnObjects: true }).map((item, index) => (
              <ListItem key={index} title={item.title}>
                {item.description}
              </ListItem>
            ))}
          </Grid>
        </Grid>
        <Divider sx={{ my: { xs: 2, sm: 8 }, mx: 12 }} />
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            {t("features.list2", { returnObjects: true }).map((item, index) => (
              <ListItem key={index} title={item.title}>
                {item.description}
              </ListItem>
            ))}
          </Grid>
          <Grid item xs={12} md={4} sx={{ mr: "auto", ml: { xs: 0, md: 6 } }}>
            <DefaultBackgroundCard
              image={bgImage2}
              label={t("features.cards.1.label")}
              title={t("features.cards.1.title")}
              description={t("features.cards.1.description")}
              action={{
                type: "internal",
                route: "/pages/support/help-center",
                label: t("features.cards.1.cta"),
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Features;
