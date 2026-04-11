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
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Sponsorships page sections
import Channels from "./sections/Channels";
import Donation from "./sections/Donation";
import Contact from "../HelpCenter/sections/Contact";

// Routes
import routes from "routes/routes";
import footerRoutes from "routes/footer.routes";

// Images
import bgImage from "assets/images/sponsorship-earnest-bg.png";

import { useThemeMode } from "context/ThemeModeContext";
import { useTranslation } from "react-i18next";

function Sponsorships() {
  const { mode } = useThemeMode();
  const { t } = useTranslation("sponsorships");
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
                minHeight="50vh"
                width="100%"
                sx={{
                    backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                        `${linearGradient(
                            rgba(gradients.dark.main, 0.6),
                            rgba(gradients.dark.state, 0.6)
                        )}, url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <Container>
                    <Grid
                        container
                        item
                        xs={12}
                        lg={8}
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ mx: "auto", textAlign: "center" }}
                    >
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
                            {t("hero.title")}
                        </MKTypography>
                        <MKTypography variant="h4" color="white" opacity={0.9} mb={2}>
                            {t("hero.subtitle")}
                        </MKTypography>
                        <MKTypography variant="body1" color="white" opacity={0.8} mb={4} px={{ xs: 0, lg: 6 }}>
                            {t("hero.description")}
                        </MKTypography>
                        <MKButton
                            variant="gradient"
                            color={isDark ? "info" : "default"}
                            sx={{
                                color: ({ palette: { info, white } }) => isDark ? white.main : info.main,
                                mt: 2
                            }}
                        >
                            {t("hero.cta")}
                        </MKButton>
                    </Grid>
                </Container>
            </MKBox>
            <Card
                sx={({ palette: { white }, functions: { rgba }, boxShadows: { xxl } }) => ({
                    p: 2,
                    mx: { xs: 2, lg: 3 },
                    mt: -8,
                    mb: 4,
                    backgroundColor: mode === "dark" ? "rgba(27, 31, 48, 0.85)" : rgba(white.main, 0.8),
                    backdropFilter: "saturate(200%) blur(30px)",
                    boxShadow: xxl,
                    overflow: "hidden",
                })}
            >
                <Channels />
                <Donation />
                <Container>
                    <MKBox py={6}>
                        <Contact />
                    </MKBox>
                </Container>
            </Card>
            <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes} />
            </MKBox>
        </>
    );
}

export default Sponsorships;
