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
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { useTranslation } from "react-i18next";
import { useThemeMode } from "context/ThemeModeContext";

const featuresConfig = [
  { id: "globalPayments", icon: "credit_card" },
  { id: "support", icon: "support_agent" },
  { id: "technology", icon: "biotech" },
  { id: "fastSecure", icon: "bolt" },
  { id: "reporting", icon: "receipt_long" },
  { id: "developers", icon: "group" },
];

function AboutUs() {
  const { t } = useTranslation("pricing");
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  const title = t("about.title");
  const description = t("about.description");
  const featuresContent = t("about.features", { returnObjects: true }) || [];

  const features = featuresConfig.map((feature) => {
    const content = featuresContent.find(({ id }) => id === feature.id) || {};
    return { ...feature, ...content };
  });

  return (
    <MKBox component="section" py={12} px={1}>
      <Container>
        <Grid container item xs={12} lg={8}>
          <MKTypography variant="h3" color={isDark ? "white" : "dark"}>
            {title}
          </MKTypography>
          <MKTypography
            variant="body2"
            fontWeight="regular"
            color={isDark ? "white" : "text"}
            opacity={isDark ? 0.7 : 1}
          >
            {description}
          </MKTypography>
        </Grid>
        <Grid container sx={{ mt: 6 }}>
          {features.map(({ icon, title: featureTitle, items = [] }) => (
            <Grid key={icon} item xs={12} md={4}>
              <MKBox py={2} pr={2}>
                <MKTypography variant="h3" color="info">
                  <Icon>{icon}</Icon>
                </MKTypography>
                <MKTypography variant="h5" mt={2} mb={3} color={isDark ? "white" : "dark"}>
                  {featureTitle}
                </MKTypography>
                {items.map((item) => (
                  <MKBox key={item} display="flex" lineHeight={1.25}>
                    <MKTypography variant="body1" color="info">
                      <Icon sx={{ fontWeight: "bold" }}>done</Icon>
                    </MKTypography>
                    <MKBox pl={2}>
                      <MKTypography
                        variant="button"
                        color={isDark ? "white" : "text"}
                        fontWeight="bold"
                        opacity={isDark ? 0.9 : 1}
                      >
                        {item}
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                ))}
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AboutUs;
