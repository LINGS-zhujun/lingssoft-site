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

const EduTechPlatform = () => {
  const { t } = useTranslation("solutions");
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <>
      <DefaultNavbar
        routes={routes}
        sticky
        light={isDark}
        transparent={false}
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {t("education.title")}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              {t("education.description")}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
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
        <MKBox component="section" py={6}>
          <Container>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {(t("education.features", { returnObjects: true }) || []).map((feature, index) => (
                <div key={index} className="pt-6">
                  <div className={`flow-root ${isDark ? 'bg-gray-800' : 'bg-gray-50'} rounded-lg px-6 pb-8 shadow-sm h-full hover:shadow-md transition-shadow duration-300`}>
                    <div className="-mt-6">
                      <div className="inline-flex items-center justify-center p-3 bg-sky-600 rounded-md shadow-lg">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253l8 4.286-8 4.286-8-4.286 8-4.286z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 10.539v5.208L12 20l8-4.253v-5.208"
                          />
                        </svg>
                      </div>
                      <h3 className={`mt-8 text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'} tracking-tight`}>
                        {feature}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default EduTechPlatform;

