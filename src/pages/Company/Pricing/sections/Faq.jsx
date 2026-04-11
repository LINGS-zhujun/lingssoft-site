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
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Pricing page components
import FaqCollapse from "pages/Company/Pricing/components/FaqCollapse";
import { useTranslation } from "react-i18next";
import { useThemeMode } from "context/ThemeModeContext";

function Faq() {
  const [collapse, setCollapse] = useState(false);
  const { t } = useTranslation("pricing");
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  const title = t("faq.title");
  const updated = t("faq.updated");
  const items = t("faq.items", { returnObjects: true }) || [];

  const renderAnswer = (answer, id) => {
    if (!answer) return null;

    const segments = answer.split(/\n{2,}/);
    return segments.map((segment, segmentIdx) => (
      <span key={`${id}-segment-${segmentIdx}`}>
        {segment}
        {segmentIdx < segments.length - 1 && (
          <>
            <br />
            <br />
          </>
        )}
      </span>
    ));
  };

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={10}>
            <Card
              sx={{
                backgroundColor: isDark ? "rgba(255, 255, 255, 0.05)" : "#ffffff",
                color: isDark ? "white" : "inherit",
                boxShadow: isDark ? "none" : undefined,
              }}
            >
              <MKBox
                variant="gradient"
                bgColor="error"
                borderRadius="lg"
                coloredShadow="error"
                p={3}
                mt={-3}
                mx={2}
              >
                <MKTypography variant="h4" color="white">
                  {title}
                </MKTypography>
                <MKTypography variant="body2" color="white" opacity={0.8}>
                  {updated}
                </MKTypography>
              </MKBox>
              <MKBox py={2} px={3}>
                {items.map((item, idx) => (
                  <FaqCollapse
                    key={item.id || `faq-item-${idx}`}
                    title={item.question}
                    open={collapse === idx + 1}
                    onClick={() => {
                      if (collapse === idx + 1) {
                        setCollapse(false);
                      } else {
                        setCollapse(idx + 1);
                      }
                    }}
                  >
                    {renderAnswer(item.answer, item.id || idx)}
                  </FaqCollapse>
                ))}
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Faq;
