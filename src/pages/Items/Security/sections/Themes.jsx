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
              color="success"
              icon="monitor_heart"
              title={t("security.themes.monitoring.title")}
              description={t("security.themes.monitoring.description")}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultInfoCard
              color="info"
              icon="enhanced_encryption"
              title={t("security.themes.protection.title")}
              description={t("security.themes.protection.description")}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultInfoCard
              color="primary"
              icon="gavel"
              title={t("security.themes.compliance.title")}
              description={t("security.themes.compliance.description")}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Themes;
