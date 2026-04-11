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
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { useTranslation } from "react-i18next";
import { useThemeMode } from "context/ThemeModeContext";

function LifetimeMembership() {
  const { t } = useTranslation("pricing");
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  const content = t("lifetime", { returnObjects: true }) || {};
  const features = content.features || [];
  const midpoint = Math.ceil(features.length / 2);
  const columns = [features.slice(0, midpoint), features.slice(midpoint)];
  const priceValue = content.price?.value || "399";
  const priceCurrency = content.price?.currency || "$";

  return (
    <MKBox component="section" py={{ xs: 12, lg: 18 }}>
      <Container>
        <Grid
          container
          item
          xs={12}
          md={6}
          justifyContent="center"
          sx={{ mx: "auto", mb: 8, textAlign: "center" }}
        >
          <MKTypography variant="h2" mb={1} color={isDark ? "white" : "dark"}>
            {content.title}
          </MKTypography>
          <MKTypography
            variant="body1"
            color={isDark ? "white" : "text"}
            opacity={isDark ? 0.8 : 1}
          >
            {content.description}
          </MKTypography>
        </Grid>
        <Grid container item xs={12}>
          <Card
            sx={{
              width: "100%",
              backgroundColor: isDark ? "rgba(255, 255, 255, 0.05)" : "#ffffff",
              color: isDark ? "white" : "inherit",
              boxShadow: isDark ? "none" : undefined,
            }}
          >
            <Grid container alignItems="center">
              <Grid item xs={12} lg={8}>
                <MKBox py={3} px={4}>
                  <MKTypography variant="h3" mb={1} color={isDark ? "white" : "dark"}>
                    {content.planTitle}
                  </MKTypography>
                  <MKTypography
                    variant="body2"
                    color={isDark ? "white" : "text"}
                    fontWeight="regular"
                    opacity={isDark ? 0.8 : 1}
                  >
                    {content.planDescription}
                  </MKTypography>
                  <Grid container item xs={12} lg={3} sx={{ mt: 6, mb: 1 }}>
                    <MKTypography variant="h6" color={isDark ? "white" : "dark"}>
                      {content.whatsIncluded}
                    </MKTypography>
                  </Grid>
                  <Grid container spacing={3}>
                    {columns.map((column, columnIdx) => (
                      <Grid key={`features-column-${columnIdx}`} item xs={12} md={6}>
                        {column.map((item) => (
                          <MKBox key={item} display="flex" py={1} pr={1} lineHeight={0}>
                            <MKTypography variant="body1" color={isDark ? "white" : "dark"}>
                              <Icon sx={{ fontWeight: "bold" }}>done</Icon>
                            </MKTypography>
                            <MKTypography
                              variant="body2"
                              color={isDark ? "white" : "text"}
                              fontWeight="regular"
                              pl={1}
                              opacity={isDark ? 0.8 : 1}
                            >
                              {item}
                            </MKTypography>
                          </MKBox>
                        ))}
                      </Grid>
                    ))}
                  </Grid>
                </MKBox>
              </Grid>
              <Grid item xs={12} lg={4}>
                <MKBox p={3} textAlign="center">
                  <MKTypography
                    variant="h6"
                    mt={{ xs: 0, sm: 3 }}
                    color={isDark ? "white" : "dark"}
                  >
                    {content.cta?.tagline}
                  </MKTypography>
                  <MKTypography variant="h1" color={isDark ? "white" : "dark"}>
                    <MKBox component="small" color={isDark ? "white" : "dark"}>
                      {priceCurrency}
                    </MKBox>
                    {priceValue}
                  </MKTypography>
                  <MKButton variant="gradient" color="error" size="large" sx={{ my: 2 }}>
                    {content.cta?.button}
                  </MKButton>
                  <MKTypography
                    display="block"
                    variant="button"
                    color={isDark ? "white" : "text"}
                    fontWeight="regular"
                    opacity={isDark ? 0.8 : 1}
                  >
                    {content.cta?.priceNote}
                  </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default LifetimeMembership;
