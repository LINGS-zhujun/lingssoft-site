// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultPricingCard from "examples/Cards/PricingCards/DefaultPricingCard";

import { useTranslation } from "react-i18next";
import { useThemeMode } from "context/ThemeModeContext";

function Revenue() {
  const { t } = useTranslation("solutions");
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  const revenueItems = t("ai.revenue.items", { returnObjects: true }) || [];

  return (
    <MKBox component="section" py={12} bgColor={isDark ? "transparent" : "grey-100"}>
      <Container>
        <Grid container justifyContent="center" sx={{ textAlign: "center", mb: 6 }}>
          <Grid item xs={12} md={8}>
            <MKTypography variant="h2" color={isDark ? "white" : "dark"} mb={1}>
              {t("ai.revenue.title")}
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {revenueItems.map((item, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <MKBox
                p={3}
                textAlign="center"
                sx={{
                  height: "100%",
                  backgroundColor: isDark ? "rgba(255,255,255,0.03)" : "white",
                  borderRadius: "xl",
                  boxShadow: isDark ? "none" : ({ boxShadows: { md } }) => md,
                  border: isDark ? "1px solid rgba(255,255,255,0.1)" : "none",
                }}
              >
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                  mx="auto"
                  mb={3}
                >
                  <MKTypography variant="h4" color="white">
                    {index + 1}
                  </MKTypography>
                </MKBox>
                <MKTypography variant="h5" color={isDark ? "white" : "dark"} mb={2}>
                  {item.title}
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color={isDark ? "white" : "text"}
                  opacity={isDark ? 0.8 : 1}
                >
                  {item.description}
                </MKTypography>
              </MKBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Revenue;
