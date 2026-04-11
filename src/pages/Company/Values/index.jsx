import { useMemo, useCallback } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Icon from "@mui/material/Icon";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import routes from "routes/routes";
import footerRoutes from "routes/footer.routes";

import { useTranslation } from "react-i18next";
import { useThemeMode } from "context/ThemeModeContext";

import valuesHero from "assets/images/values-hero.png";

const canopyPalette = {
  light: {
    background: "#f6f4ff",
    surface: "#ffffff",
    accent: "#4338ca",
    accentSoft: "rgba(99,102,241,0.18)",
    textPrimary: "#0f172a",
    textSecondary: "#475569",
    highlight: "#a5b4fc",
  },
  dark: {
    background: "#040410",
    surface: "rgba(6,6,18,0.9)",
    accent: "#c7d2fe",
    accentSoft: "rgba(129,140,248,0.2)",
    textPrimary: "#f8fafc",
    textSecondary: "rgba(226,232,240,0.78)",
    highlight: "#818cf8",
  },
};

function Values() {
  const { t, i18n } = useTranslation("values");
  const { mode, setMode } = useThemeMode();
  const colors = canopyPalette[mode] || canopyPalette.light;
  const isDark = mode === "dark";

  const hero = useMemo(() => t("hero", { returnObjects: true }) || {}, [t, i18n.language]);
  const principles = useMemo(
    () =>
      Array.isArray(t("principles", { returnObjects: true }))
        ? t("principles", { returnObjects: true })
        : [],
    [t, i18n.language]
  );
  const commitments = useMemo(
    () => t("commitments", { returnObjects: true }) || {},
    [t, i18n.language]
  );
  const culture = useMemo(() => t("culture", { returnObjects: true }) || {}, [t, i18n.language]);
  const cta = useMemo(() => t("cta", { returnObjects: true }) || {}, [t, i18n.language]);

  const handleMode = useCallback(
    (_, next) => {
      if (next) setMode(next);
    },
    [setMode]
  );

  const toggleLabel = hero?.mode?.label || "Display mode";
  const lightLabel = hero?.mode?.light || "Light";
  const darkLabel = hero?.mode?.dark || "Dark";

  return (
    <>
      <DefaultNavbar routes={routes} sticky light={isDark} transparent={false} />
      <MKBox
        component="header"
        minHeight="70vh"
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.8),
              rgba(gradients.dark.state, 0.8)
            )}, url(${valuesHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          pt: 10,
        }}
      >
        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <MKTypography variant="button" fontWeight="bold" color="white" sx={{ opacity: 0.8 }}>
                {hero.eyebrow || "Company values"}
              </MKTypography>
              <MKTypography variant="h2" mt={1} mb={1.5} color="white">
                {hero.title || "We grow with purpose"}
              </MKTypography>
              <MKTypography
                variant="body1"
                color="white"
                sx={{ opacity: 0.8, maxWidth: 520, lineHeight: 1.7 }}
              >
                {hero.description ||
                  "Inspired by evergreen culture pillars, we translate bold ideas into dependable systems."}
              </MKTypography>
              <MKTypography variant="subtitle2" mt={2} sx={{ color: "#a5b4fc" }}>
                {hero.tagline || "Every release should feel like care."}
              </MKTypography>
              <MKBox
                mt={4}
                display="flex"
                flexWrap="wrap"
                alignItems="center"
                gap={2}
                sx={{
                  p: 2,
                  borderRadius: "16px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)", // Glass effect
                  backdropFilter: "blur(10px)",
                  boxShadow: ({ boxShadows: { md } }) => md,
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <MKTypography variant="button" color="white" textTransform="uppercase">
                  {toggleLabel}
                </MKTypography>
                <ToggleButtonGroup
                  exclusive
                  value={mode}
                  onChange={handleMode}
                  sx={{
                    borderRadius: "999px",
                    backgroundColor: isDark ? "rgba(15,23,42,0.8)" : "rgba(255,255,255,0.9)",
                    "& .MuiToggleButton-root": {
                      border: "none",
                      px: 3,
                      py: 1,
                      color: colors.textSecondary,
                      "&.Mui-selected": {
                        color: colors.textPrimary,
                        backgroundColor: colors.accentSoft,
                      },
                    },
                  }}
                >
                  <ToggleButton value="light">{lightLabel}</ToggleButton>
                  <ToggleButton value="dark">{darkLabel}</ToggleButton>
                </ToggleButtonGroup>
              </MKBox>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card
                sx={{
                  borderRadius: "28px",
                  background: `linear-gradient(180deg, ${colors.accentSoft}, transparent)`,
                  border: `1px solid ${colors.accentSoft}`,
                  p: 3,
                }}
              >
                <MKTypography
                  variant="subtitle2"
                  textTransform="uppercase"
                  sx={{ color: colors.textSecondary }}
                  mb={0.5}
                >
                  {t("principlesTitle")}
                </MKTypography>
                <MKTypography variant="h4" sx={{ color: colors.textPrimary }}>
                  {principles[0]?.title || "Growth mindset"}
                </MKTypography>
                <MKTypography variant="body2" mt={1} sx={{ color: colors.textSecondary }}>
                  {principles[0]?.description ||
                    "Coach every teammate and client to experiment, learn, and share insights openly."}
                </MKTypography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <MKBox component="section" py={8} sx={{ backgroundColor: colors.background }}>
        <Container>
          <Grid container spacing={3}>
            {principles.map((principle, index) => (
              <Grid item xs={12} md={6} key={`${principle.title}-${index}`}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: "28px",
                    p: 3,
                    backgroundColor: colors.surface,
                    border: `1px solid ${colors.accentSoft}`,
                  }}
                >
                  <MKBox display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                    <MKTypography variant="h4" sx={{ color: colors.textPrimary }}>
                      {principle.title}
                    </MKTypography>
                    <Icon sx={{ color: colors.accent }}>
                      {index % 2 === 0 ? "flare" : "favorite"}
                    </Icon>
                  </MKBox>
                  <MKTypography variant="body2" mb={2} sx={{ color: colors.textSecondary }}>
                    {principle.description}
                  </MKTypography>
                  <MKBox display="flex" flexWrap="wrap" gap={1}>
                    {Array.isArray(principle.keywords) &&
                      principle.keywords.map((keyword) => (
                        <Chip
                          key={keyword}
                          label={keyword}
                          sx={{
                            backgroundColor: colors.accentSoft,
                            color: colors.textPrimary,
                            fontWeight: 600,
                          }}
                        />
                      ))}
                  </MKBox>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </MKBox>
      <MKBox py={8} sx={{ backgroundColor: colors.background }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Card
                sx={{
                  borderRadius: "32px",
                  p: 4,
                  height: "100%",
                  backgroundColor: colors.surface,
                  border: `1px solid ${colors.accentSoft}`,
                }}
              >
                <MKTypography variant="h3" mb={3} sx={{ color: colors.textPrimary }}>
                  {commitments.title}
                </MKTypography>
                <Divider sx={{ mb: 3, borderColor: colors.accentSoft }} />
                {Array.isArray(commitments.items) &&
                  commitments.items.map((item) => (
                    <MKBox key={item.title} mb={3}>
                      <MKTypography variant="h5" sx={{ color: colors.textPrimary }} mb={1}>
                        {item.title}
                      </MKTypography>
                      <MKTypography variant="body2" sx={{ color: colors.textSecondary }}>
                        {item.description}
                      </MKTypography>
                    </MKBox>
                  ))}
              </Card>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card
                sx={{
                  borderRadius: "32px",
                  p: 4,
                  height: "100%",
                  backgroundColor: isDark ? "rgba(12,16,32,0.85)" : "#fdf6fd",
                }}
              >
                <MKTypography variant="h4" mb={2} sx={{ color: colors.textPrimary }}>
                  {culture.title}
                </MKTypography>
                <List dense>
                  {Array.isArray(culture.items) &&
                    culture.items.map((item, idx) => (
                      <ListItem key={`${item}-${idx}`} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 32, color: colors.accent }}>
                          <Icon>check_circle</Icon>
                        </ListItemIcon>
                        <MKTypography variant="body2" sx={{ color: colors.textSecondary }}>
                          {item}
                        </MKTypography>
                      </ListItem>
                    ))}
                </List>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <MKBox py={8} sx={{ backgroundColor: colors.background }}>
        <Container>
          <Card
            sx={{
              borderRadius: "32px",
              p: { xs: 3, md: 5 },
              background: isDark
                ? "linear-gradient(135deg, rgba(67,56,202,0.4), rgba(14,116,144,0.4))"
                : "linear-gradient(135deg, rgba(199,210,254,0.9), rgba(6,182,212,0.2))",
              border: `1px solid ${colors.accentSoft}`,
            }}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={8}>
                <MKTypography variant="h3" mb={1} sx={{ color: colors.textPrimary }}>
                  {cta.title}
                </MKTypography>
                <MKTypography variant="body1" sx={{ color: colors.textSecondary, maxWidth: 520 }}>
                  {cta.description}
                </MKTypography>
              </Grid>
              <Grid item xs={12} md={4}>
                <MKButton color="info" fullWidth>
                  {cta.action}
                </MKButton>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Values;
