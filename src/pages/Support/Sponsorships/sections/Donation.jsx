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
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

import { useTranslation } from "react-i18next";
import { useThemeMode } from "context/ThemeModeContext";

function Donation() {
  const { t } = useTranslation("sponsorships");
  const { mode } = useThemeMode();
  const isDark = mode === "dark";
  const [copied, setCopied] = useState(false);

  const walletAddress = "0x1234...abcd"; // Placeholder

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <MKBox
      component="section"
      py={12}
      sx={{
        borderTop: ({ borders: { borderWidth, borderColor } }) =>
          `${borderWidth[1]} solid ${borderColor}`,
      }}
    >
      <Container>
        <Grid container justifyContent="center" mb={6}>
          <Grid item xs={12} md={8} textAlign="center">
            <MKTypography variant="h3" mb={1} color={isDark ? "white" : "dark"}>
              {t("donation.title")}
            </MKTypography>
            <MKTypography
              variant="body2"
              color={isDark ? "white" : "text"}
              opacity={isDark ? 0.8 : 1}
            >
              {t("donation.description")}
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <MKBox
            bgColor={isDark ? "background.card" : "white"}
            borderRadius="xl"
            shadow="sm"
            p={4}
            sx={{
              border: ({ borders: { borderWidth, borderColor } }) =>
                `${borderWidth[1]} solid ${borderColor}`,
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Icon fontSize="large" color="info">
              currency_bitcoin
            </Icon>
            <MKBox>
              <MKTypography variant="h6" color={isDark ? "white" : "dark"}>
                {t("donation.crypto")}
              </MKTypography>
              <MKTypography variant="body2" color={isDark ? "white" : "text"} opacity={0.8}>
                {walletAddress}
              </MKTypography>
            </MKBox>
            <Tooltip title={copied ? t("donation.copied") : t("donation.copy")} placement="top">
              <MKButton variant="outlined" color="info" size="small" onClick={handleCopy}>
                {copied ? <Icon>check</Icon> : <Icon>content_copy</Icon>}
              </MKButton>
            </Tooltip>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Donation;
