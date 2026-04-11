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
              icon="bolt"
              title={t("ai.themes.energy.title")}
              description={t("ai.themes.energy.description")}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultInfoCard
              color="info"
              icon="security"
              title={t("ai.themes.sovereignty.title")}
              description={t("ai.themes.sovereignty.description")}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultInfoCard
              color="info"
              icon="auto_fix_high"
              title={t("ai.themes.usability.title")}
              description={t("ai.themes.usability.description")}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Themes;
