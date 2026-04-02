/*
=========================================================
* LINGSSOFT Presentation Page
=========================================================
*/

// @mui material components
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";

// i18n
import { useTranslation } from "react-i18next";

// Material Kit 2 PRO React components
import MKBadge from "components/MKBadge";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import DefaultFooter from "examples/Footers/DefaultFooter";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import { useThemeMode } from "context/ThemeModeContext";

// Routes
import routes from "routes/routes";
import footerRoutes from "routes/footer.routes";

// Images
import bgImage from "assets/images/bg-presentation-social.png";
import aiLabImage from "assets/images/examples/studio-5.jpg";
import securityOpsImage from "assets/images/examples/content-2.jpg";
import classroomImage from "assets/images/examples/content-4.jpg";
import publishingImage from "assets/images/office-dark.jpg";

const pillarMeta = [
  { icon: "auto_awesome", link: "https://openai.com/" },
  { icon: "shield", link: "https://www.paloaltonetworks.com/" },
  { icon: "school", link: "https://www.coursera.org/" },
  { icon: "article", link: "https://www.springernature.com/" },
];

const programMedia = [aiLabImage, securityOpsImage, classroomImage, publishingImage];

function Presentation() {
  const theme = useTheme();
  const { mode } = useThemeMode();
  const { t } = useTranslation(["presentation", "common"]);
  const isDark = mode === "dark" || theme.palette.mode === "dark";
  const pillars = t("presentation:pillars.items", { returnObjects: true }) || [];
  const focusAreas = t("presentation:principles.items", { returnObjects: true }) || [];
  const programHighlights = t("presentation:programs.items", { returnObjects: true }) || [];
  const allianceAudiences = t("presentation:alliance.audiences", { returnObjects: true }) || [];

  return (
    <>
      <DefaultNavbar routes={routes} sticky light={isDark} transparent={false} />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={({ functions: { linearGradient, rgba }, palette: { gradients } }) => ({
          backgroundImage: `${linearGradient(
            rgba(gradients.dark.main, isDark ? 0.5 : 0.65),
            rgba(gradients.dark.state, isDark ? 0.5 : 0.65)
          )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        })}
      >
        <Container>
          <Grid container spacing={3} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={10} lg={8} textAlign="center">
              <MKBadge
                badgeContent="AI • Security • Education • Publish"
                size="md"
                variant="contained"
                color="info"
                container
                sx={{ mb: 2, mx: "auto" }}
              />
              <MKTypography
                variant="h1"
                color="white"
                mb={2}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
              >
                {t("presentation:hero.title")}
              </MKTypography>
              <MKTypography variant="h5" color="white" opacity={0.9} mb={3} px={{ xs: 2, md: 6 }}>
                {t("presentation:hero.description")}
              </MKTypography>
              <MKButton color="info" variant="gradient" size="large">
                {t("presentation:hero.cta_primary")}
              </MKButton>
              <MKButton
                color="white"
                variant="text"
                size="large"
                sx={{ ml: 2, color: "white !important" }}
              >
                {t("presentation:hero.cta_secondary")}
              </MKButton>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: isDark ? "rgba(12,10,24,0.85)" : "#ffffff",
          color: isDark ? "white" : "inherit",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
        }}
      >
        <Container sx={{ py: 6 }}>
          <Grid container spacing={3}>
            {pillarMeta.map(({ icon, link }, index) => {
              const content = pillars[index] || {};
              const title = content.title || `pillar-${index}`;
              return (
                <Grid item xs={12} md={6} lg={3} key={title}>
                  <FilledInfoCard
                    variant="gradient"
                    color={isDark ? "dark" : "info"}
                    icon={icon}
                    title={content.title || ""}
                    description={content.description || ""}
                    action={{
                      type: "external",
                      route: link,
                      label: content.cta || "",
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
        <Divider sx={{ my: 6 }} />
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} lg={6}>
              <MKTypography variant="h3" mb={2} color={isDark ? "white" : "dark"}>
                {t("presentation:influence.title")}
              </MKTypography>
              <MKTypography variant="body1" color={isDark ? "white" : "text"} mb={3}>
                {t("presentation:influence.description")}
              </MKTypography>
              <MKBox display="flex" flexWrap="wrap" gap={1.5}>
                {t("presentation:influence.brands", { returnObjects: true }).map((brand) => (
                  <MKBadge key={brand} color="info" variant="contained" badgeContent={brand} />
                ))}
              </MKBox>
            </Grid>
            <Grid item xs={12} lg={6}>
              <MKTypography variant="h5" mb={2} color={isDark ? "white" : "text"}>
                {t("presentation:principles.title")}
              </MKTypography>
              <List>
                {focusAreas.map(({ title, points }, index) => (
                  <ListItem key={title || `principle-${index}`} sx={{ alignItems: "flex-start" }}>
                    <ListItemIcon sx={{ minWidth: "2.5rem" }}>
                      <Icon color="info">check_circle</Icon>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <MKTypography variant="h6" mb={0.5} color={isDark ? "white" : "text"}>
                          {title}
                        </MKTypography>
                      }
                      secondary={
                        <MKTypography
                          component="span"
                          variant="body2"
                          color={isDark ? "white" : "text"}
                        >
                          {(points || []).join(" • ")}
                        </MKTypography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Container>
        <Divider sx={{ my: 6 }} />
        <Container>
          <MKTypography variant="h3" textAlign="center" mb={1} color={isDark ? "white" : "dark"}>
            {t("presentation:programs.title")}
          </MKTypography>
          <MKTypography variant="body1" color={isDark ? "white" : "text"} textAlign="center" mb={6}>
            {t("presentation:programs.subtitle")}
          </MKTypography>
          <Grid container spacing={4}>
            {programHighlights.map((program, index) => {
              const image = programMedia[index % programMedia.length];
              const cardKey = program.title || `program-${index}`;

              return (
                <Grid item xs={12} md={6} key={cardKey}>
                  <Card
                    sx={({ boxShadows: { lg }, palette }) => ({
                      height: "100%",
                      overflow: "hidden",
                      boxShadow: lg,
                      backgroundColor: palette.background.paper,
                      color: palette.mode === "dark" ? palette.common.white : palette.text.primary,
                    })}
                  >
                    <MKBox
                      minHeight="220px"
                      sx={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <MKBox p={3}>
                      <MKTypography variant="h4" mb={1} color={isDark ? "white" : "text"}>
                        {program.title}
                      </MKTypography>
                      <MKTypography variant="body2" color={isDark ? "white" : "text"} mb={2}>
                        {program.subtitle}
                      </MKTypography>
                      <List>
                        {program.bullets?.map((bullet, bulletIndex) => (
                          <ListItem key={`${cardKey}-bullet-${bulletIndex}`} sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: "2rem" }}>
                              <Icon color="info">arrow_right</Icon>
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <MKTypography variant="body2" color={isDark ? "white" : "text"}>
                                  {bullet}
                                </MKTypography>
                              }
                            />
                          </ListItem>
                        ))}
                      </List>
                    </MKBox>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
        <Divider sx={{ my: 6 }} />
        <MKBox py={6}>
          <Container>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <MKTypography variant="h4" fontWeight="bold" mb={2} color={isDark ? "white" : "dark"}>
                  {t("presentation:alliance.title")}
                </MKTypography>
                <MKTypography variant="body1" color={isDark ? "white" : "text"} mb={3}>
                  {t("presentation:alliance.description")}
                </MKTypography>
                <MKButton color="info" variant="gradient">
                  {t("presentation:alliance.cta_primary")}
                </MKButton>
                <MKButton color="info" variant="text" sx={{ ml: 1 }}>
                  {t("presentation:alliance.cta_secondary")}
                </MKButton>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card
                  sx={({ boxShadows: { xl }, palette }) => ({
                    p: 3,
                    boxShadow: xl,
                    backgroundColor: palette.background.paper,
                    color: palette.mode === "dark" ? palette.common.white : palette.text.primary,
                  })}
                >
                  <MKTypography variant="h6" mb={1} color={isDark ? "white" : "dark"}>
                    {t("presentation:alliance.engagements")}
                  </MKTypography>
                  <List>
                    {allianceAudiences.map((audience, index) => (
                      <ListItem key={`audience-${index}`} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: "2rem" }}>
                          <Icon color="info">check</Icon>
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <MKTypography variant="body2" color={isDark ? "white" : "text"}>
                              {audience}
                            </MKTypography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <DefaultFooter content={footerRoutes} />
    </>
  );
}

export default Presentation;
