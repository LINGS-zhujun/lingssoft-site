// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

import { useTranslation } from "react-i18next";
import { useThemeMode } from "context/ThemeModeContext";

function Themes() {
  const { t } = useTranslation("solutions");
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <DefaultInfoCard
              color="info"
              icon="school"
              title={t("education.themes.branding.title")}
              description={t("education.themes.branding.description")}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultInfoCard
              color="info"
              icon="storage"
              title={t("education.themes.data.title")}
              description={t("education.themes.data.description")}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultInfoCard
              color="info"
              icon="group"
              title={t("education.themes.interaction.title")}
              description={t("education.themes.interaction.description")}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Themes;
