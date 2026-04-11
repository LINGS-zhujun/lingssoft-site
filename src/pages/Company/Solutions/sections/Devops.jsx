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

function Devops() {
  const { t } = useTranslation("solutions");
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} lg={6} sx={{ mb: { xs: 5, lg: 0 } }}>
            <MKBadge
              badgeContent="DevOps"
              variant="contained"
              color="info"
              container
              sx={{ mb: 2 }}
            />
            <MKTypography variant="h2" mb={2} color={isDark ? "white" : "dark"}>
              {t("ai.title")}
            </MKTypography>
            <MKTypography
              variant="body1"
              color={isDark ? "white" : "text"}
              opacity={isDark ? 0.8 : 1}
              mb={3}
            >
              {t("ai.description")}
            </MKTypography>
            <Grid container spacing={2}>
              {t("ai.features", { returnObjects: true }).map((feature, index) => (
                <Grid item xs={12} key={index}>
                  <MKBox display="flex" alignItems="center" p={1}>
                    <MKBox
                      width="2rem"
                      height="2rem"
                      variant="gradient"
                      bgColor="info"
                      color="white"
                      coloredShadow="info"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="xl"
                    >
                      <i className="fas fa-robot" />
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
          <Grid item xs={12} lg={6} sx={{ pl: { lg: 6 } }}>
            {/* Placeholder for an image or graphic */}
            <MKBox
              minHeight="25rem"
              borderRadius="xl"
              sx={{
                backgroundImage: `url(https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Devops;
