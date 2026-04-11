import React from "react";
// @mui material components
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

import { useTranslation } from "react-i18next";
import { useThemeMode } from "context/ThemeModeContext";

export default function ThemeSwitcher() {
  const { mode, setMode } = useThemeMode();
  const { t } = useTranslation("common");
  const isDark = mode === "dark";

  const handleToggle = () => {
    setMode(isDark ? "light" : "dark");
  };

  return (
    <Tooltip title={isDark ? t("theme.light") : t("theme.dark")}>
      <IconButton
        onClick={handleToggle}
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
        <Icon fontSize="medium">{isDark ? "light_mode" : "dark_mode"}</Icon>
      </IconButton>
    </Tooltip>
  );
}
