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

// Material Kit 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes/routes";
import footerRoutes from "routes/footer.routes";
import { Trans, useTranslation } from "react-i18next";
import { useThemeMode } from "context/ThemeModeContext";

function Terms() {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";
  const { t } = useTranslation("terms");
  const sections = t("sections", { returnObjects: true }) || [];
  const title = t("meta.title");
  const updated = t("meta.updated");
  const referenceLabel = t("meta.referenceLabel");
  const referenceUrl = t("meta.referenceUrl");
  const contactEmail = t("meta.contactEmail");
  const transComponents = {
    link: (
      <MKTypography
        component="a"
        variant="body2"
        color="info"
        href={referenceUrl}
        target="_blank"
        rel="noreferrer"
        sx={{ fontWeight: "bold", display: "inline" }}
      />
    ),
    email: (
      <MKTypography
        component="a"
        variant="body2"
        color="info"
        href={`mailto:${contactEmail}`}
        sx={{ fontWeight: "bold", display: "inline" }}
      />
    ),
  };
  const transValues = { label: referenceLabel, email: contactEmail };

  return (
    <>
      <DefaultNavbar routes={routes} sticky light={isDark} />
      <MKBox
        minHeight="50vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      />
      <MKBox component="section" pt={6} pb={6} mt={-24}>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <Card
                sx={({ palette, boxShadows }) => ({
                  backgroundColor:
                    palette.mode === "dark"
                      ? "rgba(27, 31, 48, 0.85)"
                      : "rgba(255, 255, 255, 0.85)",
                  backdropFilter: "saturate(200%) blur(30px)",
                  color: palette.mode === "dark" ? "white" : palette.text.primary,
                  boxShadow: boxShadows.xxl,
                  border: "none",
                })}
              >
                <MKBox
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                  p={3}
                  mt={-3}
                  mx={2}
                  textAlign="center"
                >
                  <MKTypography variant="h3" color="white">
                    {title}
                  </MKTypography>
                  <MKTypography variant="body2" color="white" opacity={0.8}>
                    {updated}
                  </MKTypography>
                </MKBox>
                <MKBox pb={6} px={{ xs: 3, md: 6 }} pt={4}>
                  {sections.map((section, index) => (
                    <MKBox key={section.title || `section-${index}`} mt={index === 0 ? 0 : 4}>
                      <MKTypography variant="h5" mb={2} color={sections.titleColor || "inherit"}>
                        {section.title}
                      </MKTypography>
                      {section.paragraphs?.map((_, paragraphIdx) => (
                        <MKTypography
                          key={`${section.title || index}-paragraph-${paragraphIdx}`}
                          variant="body2"
                          color="inherit"
                          opacity={0.8}
                          mb={1.5}
                        >
                          <Trans
                            ns="terms"
                            i18nKey={`sections.${index}.paragraphs.${paragraphIdx}`}
                            components={transComponents}
                            values={transValues}
                          />
                        </MKTypography>
                      ))}
                      {section.bullets && (
                        <MKBox component="ul" pl={3} my={2}>
                          {section.bullets.map((_, bulletIdx) => (
                            <MKBox
                              component="li"
                              key={`${section.title || index}-bullet-${bulletIdx}`}
                              mb={1}
                            >
                              <MKTypography variant="body2" color="inherit" opacity={0.8}>
                                <Trans
                                  ns="terms"
                                  i18nKey={`sections.${index}.bullets.${bulletIdx}`}
                                  components={transComponents}
                                  values={transValues}
                                />
                              </MKTypography>
                            </MKBox>
                          ))}
                        </MKBox>
                      )}
                    </MKBox>
                  ))}
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

export default Terms;
