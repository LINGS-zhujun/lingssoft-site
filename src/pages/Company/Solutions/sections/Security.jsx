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
import MKBadge from "components/MKBadge";

import { useTranslation } from "react-i18next";
import { useThemeMode } from "context/ThemeModeContext";

function Security() {
  const { t } = useTranslation("solutions");
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <MKBox
      component="section"
      py={12}
      sx={{ backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "#f8f9fa" }}
    >
      <Container>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} lg={6} sx={{ pr: { lg: 6 }, mb: { xs: 5, lg: 0 } }}>
            {/* Placeholder for an image or graphic */}
            <MKBox
              minHeight="25rem"
              borderRadius="xl"
              sx={{
                backgroundImage: `url(https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBadge
              badgeContent="Security"
              variant="contained"
              color="success"
              container
              sx={{ mb: 2 }}
            />
            <MKTypography variant="h2" mb={2} color={isDark ? "white" : "dark"}>
              {t("security.title")}
            </MKTypography>
            <MKTypography
              variant="body1"
              color={isDark ? "white" : "text"}
              opacity={isDark ? 0.8 : 1}
              mb={3}
            >
              {t("security.description")}
            </MKTypography>
            <Grid container spacing={2}>
              {t("security.features", { returnObjects: true }).map((feature, index) => (
                <Grid item xs={12} key={index}>
                  <MKBox display="flex" alignItems="center" p={1}>
                    <MKBox
                      width="2rem"
                      height="2rem"
                      variant="gradient"
                      bgColor="success"
                      color="white"
                      coloredShadow="success"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="xl"
                    >
                      <i className="fas fa-shield-alt" />
                    </MKBox>
                    <MKTypography
                      variant="body2"
                      color={isDark ? "white" : "text"}
                      opacity={isDark ? 0.8 : 1}
                      pl={2}
                    >
                      {feature}
                    </MKTypography>
                  </MKBox>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Security;
