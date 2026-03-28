import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// @mui material components
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";

// react-router components
import { useLocation, useNavigate } from "react-router-dom";
import i18n from "../../i18n";
import { useThemeMode } from "context/ThemeModeContext";

const langs = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
];

export default function LanguageSwitcher() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const location = useLocation();
  const navigate = useNavigate();
  const { mode } = useThemeMode();
  const { t } = useTranslation("common");
  const isDark = mode === "dark";

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lng) => {
    const parts = location.pathname.split("/").filter(Boolean);

    // If current path starts with a language code, replace it
    if (langs.some((l) => l.code === parts[0])) {
      parts[0] = lng;
    } else {
      // Otherwise, prepend the language code (fallback logic)
      parts.unshift(lng);
    }

    const newPath = parts.length ? `/${parts.join("/")}` : `/${lng}`;
    const suffix = `${location.search || ""}${location.hash || ""}`;

    i18n.changeLanguage(lng);
    navigate(`${newPath}${suffix}`, { replace: true });
    handleClose();
  };

  return (
    <>
      <Tooltip title={t("language.select")}>
        <IconButton
          onClick={handleOpen}
          size="small"
          sx={({ palette }) => ({
            ml: 1,
            color: isDark ? palette.white.main : palette.dark.main,
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)",
              transform: "scale(1.1)",
            },
          })}
        >
          <Icon fontSize="medium">language</Icon>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: isDark ? "#1b1f30" : "#ffffff",
            color: isDark ? "#ffffff" : "#344767",
            boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
            borderRadius: "12px",
            minWidth: "160px",
          },
        }}
      >
        {langs.map((l) => (
          <MenuItem
            key={l.code}
            onClick={() => changeLanguage(l.code)}
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)",
              },
            }}
          >
            <span style={{ marginRight: "10px", fontSize: "16px" }}>{l.flag}</span>
            {l.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
