import { useMemo, useCallback } from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import Chip from "@mui/material/Chip";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

import routes from "routes/routes";
import footerRoutes from "routes/footer.routes";
import { useTranslation } from "react-i18next";
import { useThemeMode } from "context/ThemeModeContext";

import historyHero from "assets/images/history-hero.png";

const canopyPalette = {
  light: {
    background: "#f5f6f0",
    surface: "#ffffff",
    accent: "#14532d",
    accentSoft: "rgba(34,197,94,0.15)",
    line: "linear-gradient(180deg, #22c55e 0%, #a3e635 60%, #facc15 100%)",
    textPrimary: "#0f172a",
    textSecondary: "#475569",
    roots: "#7c2d12",
    canopy: "rgba(21,128,61,0.2)",
  },
  dark: {
    background: "#020617",
    surface: "rgba(4,7,19,0.85)",
    accent: "#bbf7d0",
    accentSoft: "rgba(163,230,53,0.2)",
    line: "linear-gradient(180deg, #bbf7d0 0%, #bef264 40%, #fde047 100%)",
    textPrimary: "#f8fafc",
    textSecondary: "rgba(226,232,240,0.78)",
    roots: "#fde047",
    canopy: "rgba(21,94,117,0.35)",
  },
};

function History() {
  const { t, i18n } = useTranslation("history");
  const { mode, setMode } = useThemeMode();
  const colors = canopyPalette[mode] || canopyPalette.light;

  const hero = useMemo(() => t("hero", { returnObjects: true }) || {}, [t, i18n.language]);
  const leaves = useMemo(() => t("leaves", { returnObjects: true }) || {}, [t, i18n.language]);
  const roots = useMemo(() => t("roots", { returnObjects: true }) || {}, [t, i18n.language]);

  const timeline = useMemo(() => {
    const raw = t("timeline", { returnObjects: true });
    if (!Array.isArray(raw)) return [];

    return [...raw].sort((a, b) => {
      const aNum = Number(a.year) || 0;
      const bNum = Number(b.year) || 0;
      return bNum - aNum;
    });
  }, [t, i18n.language]);

  const handleMode = useCallback(
    (_, next) => {
      if (next) setMode(next);
    },
    [setMode]
  );

  const isDark = mode === "dark";

  const toggleLabel = hero?.mode?.label || "Display mode";
  const lightLabel = hero?.mode?.light || "Light";
  const darkLabel = hero?.mode?.dark || "Dark";

  return (
    <>
      <DefaultNavbar routes={routes} sticky light={isDark} transparent={false} />
      <MKBox
        component="header"
        minHeight="75vh"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.8),
              rgba(gradients.dark.state, 0.8)
            )}, url(${historyHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          position: "relative",
          overflow: "hidden",
          pt: 12,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <MKTypography
                variant="button"
                color="white"
                fontWeight="bold"
                textTransform="uppercase"
              >
                {hero.eyebrow || "Company history"}
              </MKTypography>
              <MKTypography variant="h2" mt={1} mb={2} color="white">
                {hero.title || "Roots of trust, branches of innovation"}
              </MKTypography>
              <MKTypography
                variant="body1"
                color="white"
                sx={{ opacity: 0.8, maxWidth: 520, lineHeight: 1.7 }}
              >
                {hero.description ||
                  "Follow how each release, partnership, and award reshaped our canopy."}
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
                <MKTypography
                  variant="button"
                  fontWeight="bold"
                  sx={{ color: "white" }}
                  textTransform="uppercase"
                >
                  {toggleLabel}
                </MKTypography>
                <ToggleButtonGroup
                  exclusive
                  value={mode}
                  onChange={handleMode}
                  color={isDark ? "success" : "primary"}
                  sx={{
                    backgroundColor: isDark ? "rgba(15,23,42,0.8)" : "rgba(255,255,255,0.9)",
                    borderRadius: "999px",
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
              <MKBox
                sx={{
                  borderRadius: "28px",
                  border: `1px solid rgba(255, 255, 255, 0.2)`,
                  background: `linear-gradient(180deg, rgba(255, 255, 255, 0.1), transparent)`,
                  backdropFilter: "blur(10px)",
                  p: 3,
                }}
              >
                <MKTypography
                  variant="subtitle2"
                  textTransform="uppercase"
                  mb={1}
                  color="white"
                  sx={{ opacity: 0.8 }}
                >
                  {hero.latestLabel || "Latest chapter"}
                </MKTypography>
                <MKBox display="flex" alignItems="flex-start" gap={2}>
                  <Icon
                    sx={{
                      color: "#bbf7d0", // Light green accent
                      fontSize: "2.5rem",
                    }}
                  >
                    eco
                  </Icon>
                  <MKTypography variant="h4" color="white">
                    {timeline[0]?.title || timeline[0]?.year || "2025"}
                  </MKTypography>
                </MKBox>
                <MKTypography variant="body2" mt={2} color="white" sx={{ opacity: 0.8 }}>
                  {timeline[0]?.description ||
                    "A new milestone is sprouting together with our partners across the region."}
                </MKTypography>
              </MKBox>
            </Grid>
          </Grid>
        </Container>
      </MKBox>

      <MKBox component="section" py={8} sx={{ backgroundColor: colors.background }}>
        <Container>
          <Grid container spacing={3} mb={4}>
            <Grid item xs={12} md={6}>
              <MKTypography variant="h3" sx={{ color: colors.textPrimary }}>
                {t("timelineTitle")}
              </MKTypography>
            </Grid>
            <Grid item xs={12} md={6}>
              <MKTypography variant="body1" sx={{ color: colors.textSecondary }}>
                {t("timelineDescription")}
              </MKTypography>
            </Grid>
          </Grid>
          <Card
            sx={{
              backgroundColor: colors.surface,
              borderRadius: "32px",
              px: { xs: 2, md: 6 },
              py: { xs: 4, md: 6 },
              position: "relative",
              overflow: "hidden",
            }}
          >
            <MKBox
              sx={{
                position: "absolute",
                top: 80,
                left: { xs: 28, md: 64 },
                bottom: 80,
                width: "4px",
                background: colors.line,
              }}
            />
            <MKBox component="ul" sx={{ listStyle: "none", m: 0, p: 0, position: "relative" }}>
              {timeline.map((item, index) => {
                const milestones = Array.isArray(item.milestones) ? item.milestones : [];
                const isLast = index === timeline.length - 1;
                const isFirst = index === 0;

                return (
                  <MKBox component="li" key={`${item.year}-${item.title}`} mb={isLast ? 0 : 4}>
                    <Grid container spacing={3} alignItems="flex-start">
                      <Grid item xs={12} md={3}>
                        <MKBox display="flex" alignItems="center" gap={1}>
                          <MKTypography
                            variant="h3"
                            fontWeight="bold"
                            sx={{ color: colors.textPrimary }}
                          >
                            {item.year}
                          </MKTypography>
                          {isFirst && (
                            <Icon sx={{ color: colors.accent, fontSize: "1.8rem" }}>forest</Icon>
                          )}
                        </MKBox>
                      </Grid>
                      <Grid item xs={12} md={9}>
                        <MKBox
                          sx={{
                            borderRadius: "24px",
                            p: 3,
                            backgroundColor: isFirst ? colors.accentSoft : "transparent",
                            border: `1px solid ${colors.accentSoft}`,
                          }}
                        >
                          <MKTypography variant="h4" mb={1} sx={{ color: colors.textPrimary }}>
                            {item.title}
                          </MKTypography>
                          <MKTypography variant="body2" mb={2} sx={{ color: colors.textSecondary }}>
                            {item.description}
                          </MKTypography>
                          {milestones.length > 0 && (
                            <MKBox display="flex" flexWrap="wrap" gap={1}>
                              {milestones.map((milestone) => (
                                <Chip
                                  key={milestone}
                                  label={milestone}
                                  sx={{
                                    backgroundColor: colors.accentSoft,
                                    color: colors.textPrimary,
                                  }}
                                />
                              ))}
                            </MKBox>
                          )}
                        </MKBox>
                      </Grid>
                    </Grid>
                    {!isLast && (
                      <Divider
                        sx={{
                          mt: 4,
                          opacity: 0.2,
                          borderColor: colors.accentSoft,
                        }}
                      />
                    )}
                  </MKBox>
                );
              })}
            </MKBox>
            <MKBox mt={6}>
              <MKTypography variant="h5" mb={1} sx={{ color: colors.textPrimary }}>
                {leaves.title}
              </MKTypography>
              <MKTypography variant="body2" sx={{ color: colors.textSecondary }}>
                {leaves.description}
              </MKTypography>
            </MKBox>
          </Card>
          <Grid container spacing={3} mt={2}>
            <Grid item xs={12}>
              <Card
                sx={{
                  mt: 5,
                  borderRadius: "28px",
                  backgroundColor: isDark ? "rgba(12,10,24,0.85)" : "#fff9ed",
                  color: colors.textPrimary,
                  px: { xs: 3, md: 6 },
                  py: { xs: 4, md: 6 },
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <MKBox
                  sx={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.3,
                    background: `radial-gradient(circle at 80% 20%, ${colors.accentSoft}, transparent 50%)`,
                  }}
                />
                <MKBox position="relative">
                  <MKBox display="flex" alignItems="center" gap={1} mb={1}>
                    <Icon sx={{ color: colors.roots }}>yard</Icon>
                    <MKTypography variant="h4" sx={{ color: colors.textPrimary }}>
                      {roots.title}
                    </MKTypography>
                  </MKBox>
                  <MKTypography variant="body1" mb={4} sx={{ color: colors.textSecondary }}>
                    {roots.description}
                  </MKTypography>
                  <Grid container spacing={3}>
                    {Array.isArray(roots.values) &&
                      roots.values.map((value) => (
                        <Grid item xs={12} md={4} key={value.label}>
                          <MKBox
                            sx={{
                              borderRadius: "20px",
                              border: `1px solid ${colors.accentSoft}`,
                              p: 3,
                              height: "100%",
                              backgroundColor: "rgba(255,255,255,0.04)",
                            }}
                          >
                            <MKTypography variant="h5" mb={1} sx={{ color: colors.textPrimary }}>
                              {value.label}
                            </MKTypography>
                            <MKTypography variant="body2" sx={{ color: colors.textSecondary }}>
                              {value.summary}
                            </MKTypography>
                          </MKBox>
                        </Grid>
                      ))}
                  </Grid>
                </MKBox>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </MKBox>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default History;
