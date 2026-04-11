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

import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultPricingCard from "examples/Cards/PricingCards/DefaultPricingCard";
import { useTranslation } from "react-i18next";
import { useThemeMode } from "context/ThemeModeContext";

// Imags
const bgImage =
  "https://images.unsplash.com/photo-1467541473380-93479a5a3ffa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2246&amp;q=80";

function Pricing() {
  const { t } = useTranslation("pricing");
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  const [activeTab, setActiveTab] = useState(0);
  const [tabType, setTabType] = useState("monthly");
  const badgeLabel = t("pricing.badge");
  const title = t("pricing.title");
  const subtitle = t("pricing.subtitle");
  const tabs = t("pricing.tabs", { returnObjects: true }) || {};
  const plansContent = t("pricing.plans", { returnObjects: true }) || [];

  const handleTabType = ({ currentTarget }, newValue) => {
    setActiveTab(newValue);
    setTabType(currentTarget.id);
  };

  const plansConfig = [
    {
      id: "starter",
      badgeColor: isDark ? "info" : "light", // Unify with premium (Info/Blue) in dark mode
      price: { currency: "$", type: "mo", monthly: 59, annual: 119 },
      actionColor: isDark ? "info" : "dark",
      cardColor: isDark ? "dark" : "white",
      specIncludes: [true, true, false, false, false, false],
    },
    {
      id: "premium",
      badgeColor: "info",
      cardColor: "dark", // Always dark to avoid bright white in dark mode
      price: { currency: "$", type: "mo", monthly: 89, annual: 159 },
      actionColor: "info",
      specIncludes: [true, true, true, true, false, false],
    },
    {
      id: "enterprise",
      badgeColor: isDark ? "info" : "light", // Unify with premium (Info/Blue) in dark mode
      price: { currency: "$", type: "mo", monthly: 399, annual: 99 },
      actionColor: isDark ? "info" : "dark",
      cardColor: isDark ? "dark" : "white",
      specIncludes: [true, true, true, true, true, true],
    },
  ];

  return (
    <MKBox component="section" py={{ xs: 0, lg: 7 }}>
      <MKBox
        borderRadius="xl"
        shadow="lg"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
        }}
      >
        <Container sx={{ pb: { xs: 12, lg: 22 }, pt: 12 }}>
          <Grid
            container
            item
            flexDirection="column"
            alignItems="center"
            xs={12}
            md={8}
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKBadge
              badgeContent={badgeLabel}
              variant="gradient"
              container
              color={isDark ? "info" : "dark"}
              sx={{ mb: 1 }}
            />
            <MKTypography variant="h3" color="white" mb={2}>
              {title}
            </MKTypography>
            <MKTypography variant="body2" color="white">
              {subtitle}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <MKBox mt={-16}>
        <Container>
          <Grid container sx={{ mb: 6 }}>
            <Grid item xs={7} md={6} lg={4} sx={{ mx: "auto", textAlign: "center" }}>
              <AppBar position="static" sx={{ bgcolor: isDark ? "#1b1f30" : "white" }}>
                <Tabs
                  value={activeTab}
                  onChange={handleTabType}
                  sx={{
                    "& .MuiTabs-indicator": {
                      backgroundColor: "info.main", // Use info color for the indicator
                    },
                    "& .MuiTab-root": {
                      color: isDark ? "rgba(255,255,255,0.7)" : "inherit",
                      "&.Mui-selected": {
                        color: isDark ? "white" : "inherit",
                      },
                    },
                  }}
                >
                  <Tab
                    id="monthly"
                    label={
                      <MKBox py={0.5} px={2} color="inherit">
                        {tabs.monthly || "Monthly"}
                      </MKBox>
                    }
                  />
                  <Tab
                    id="annual"
                    label={
                      <MKBox py={0.5} px={2} color="inherit">
                        {tabs.annual || "Annual"}
                      </MKBox>
                    }
                  />
                </Tabs>
              </AppBar>
            </Grid>
          </Grid>
          <MKBox position="relative" zIndex={10} px={{ xs: 1, sm: 0 }}>
            <Grid container spacing={3} justifyContent="center">
              {plansConfig.map((plan) => {
                const content = plansContent.find(({ id }) => id === plan.id) || {};
                const specifications = (content.specs || []).map((label, specIdx) => ({
                  label,
                  includes: Boolean(plan.specIncludes[specIdx]),
                }));
                const priceValue = tabType === "annual" ? plan.price.annual : plan.price.monthly;

                return (
                  <Grid key={plan.id} item xs={12} lg={4}>
                    <DefaultPricingCard
                      color={plan.cardColor}
                      badge={{ color: plan.badgeColor, label: content.badgeLabel || "" }}
                      price={{
                        currency: plan.price.currency,
                        value: priceValue,
                        type: plan.price.type,
                      }}
                      specifications={specifications}
                      action={{
                        type: "internal",
                        route: "/",
                        color: plan.actionColor,
                        label: content.actionLabel || "",
                      }}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </MKBox>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Pricing;
