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
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes/routes";
import footerRoutes from "routes/footer.routes";

// Image
import bgImage from "assets/images/illustrations/illustration-reset.jpg";
import { useThemeMode } from "context/ThemeModeContext";
import { useTranslation } from "react-i18next";

function ContactUs() {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";
  const { t } = useTranslation("contact");

  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          light={isDark}
          sticky
        />
      </MKBox>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})` }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor={isDark ? "#1b1f30" : "white"}
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
            sx={{
              backdropFilter: isDark ? "saturate(200%) blur(30px)" : "none",
              backgroundColor: isDark ? "rgba(27, 31, 48, 0.85)" : "white",
            }}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                {t("title")}
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color={isDark ? "white" : "text"} opacity={isDark ? 0.8 : 1} mb={3}>
                {t("subtitle")}
              </MKTypography>
              <MKBox width="100%" component="form" method="post" autoComplete="off">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label={t("form.fullName")}
                      InputLabelProps={{ shrink: true, style: { color: isDark ? "white" : "inherit" } }}
                      fullWidth
                      sx={{
                        "& .MuiInputBase-root": {
                          color: isDark ? "white" : "inherit",
                        },
                        "& .MuiInputBase-input": {
                          color: isDark ? "white !important" : "inherit",
                          WebkitTextFillColor: isDark ? "white !important" : "inherit",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label={t("form.email")}
                      InputLabelProps={{ shrink: true, style: { color: isDark ? "white" : "inherit" } }}
                      fullWidth
                      sx={{
                        "& .MuiInputBase-root": {
                          color: isDark ? "white" : "inherit",
                        },
                        "& .MuiInputBase-input": {
                          color: isDark ? "white !important" : "inherit",
                          WebkitTextFillColor: isDark ? "white !important" : "inherit",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label={t("form.message")}
                      placeholder={t("form.placeholder")}
                      InputLabelProps={{ shrink: true, style: { color: isDark ? "white" : "inherit" } }}
                      multiline
                      fullWidth
                      rows={6}
                      sx={{
                        "& .MuiInputBase-root": {
                          color: isDark ? "white" : "inherit",
                        },
                        "& .MuiInputBase-input": {
                          color: isDark ? "white !important" : "inherit",
                          WebkitTextFillColor: isDark ? "white !important" : "inherit",
                        },
                        "& textarea": {
                          color: isDark ? "white !important" : "inherit",
                          WebkitTextFillColor: isDark ? "white !important" : "inherit",
                        },
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="info">
                    {t("form.send")}
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
