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

// Material Kit 2 PRO React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import TimelineItem from "../components/TimelineItem";

import { useTranslation } from "react-i18next";
import { useThemeMode } from "context/ThemeModeContext";

function Process() {
  const { t } = useTranslation("customdev");
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  const steps = [
    {
      icon: "chat",
      title: t("process.steps.consultation.title"),
      description: t("process.steps.consultation.description"),
    },
    {
      icon: "assignment",
      title: t("process.steps.planning.title"),
      description: t("process.steps.planning.description"),
    },
    {
      icon: "design_services",
      title: t("process.steps.design.title"),
      description: t("process.steps.design.description"),
    },
    {
      icon: "code",
      title: t("process.steps.development.title"),
      description: t("process.steps.development.description"),
    },
    {
      icon: "bug_report",
      title: t("process.steps.testing.title"),
      description: t("process.steps.testing.description"),
    },
    {
      icon: "rocket_launch",
      title: t("process.steps.deployment.title"),
      description: t("process.steps.deployment.description"),
    },
    {
      icon: "support_agent",
      title: t("process.steps.maintenance.title"),
      description: t("process.steps.maintenance.description"),
    },
  ];

  return (
    <MKBox
      component="section"
      py={12}
      sx={{
        position: "relative",
        borderTop: ({ borders: { borderWidth, borderColor } }) =>
          `${borderWidth[1]} solid ${borderColor}`,
        borderBottom: ({ borders: { borderWidth, borderColor } }) =>
          `${borderWidth[1]} solid ${borderColor}`,
      }}
    >
      <Container>
        <Grid container justifyContent="center" mb={6}>
          <Grid item xs={12} md={8} textAlign="center">
            <MKTypography variant="h3" mb={1} color={isDark ? "white" : "dark"}>
              {t("process.title")}
            </MKTypography>
            <MKTypography
              variant="body2"
              color={isDark ? "white" : "text"}
              opacity={isDark ? 0.8 : 1}
            >
              {t("process.description")}
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={10} sx={{ mx: "auto" }}>
            {steps.map((step, index) => (
              <TimelineItem
                key={index}
                icon={step.icon}
                title={step.title}
                dateTime=""
                description={step.description}
                lastItem={index === steps.length - 1}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Process;
