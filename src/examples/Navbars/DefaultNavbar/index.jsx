/*
/**
=========================================================
* Material Kit 2 PRO React - v2.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { Fragment, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// react-router components
import { Link, useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MuiLink from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import LanguageSwitcher from "components/LanguageSwitcher";
import ThemeSwitcher from "components/ThemeSwitcher";
import { useThemeMode } from "context/ThemeModeContext";

// Material Kit 2 PRO React examples
import DefaultNavbarDropdown from "examples/Navbars/DefaultNavbar/DefaultNavbarDropdown";
import DefaultNavbarMobile from "examples/Navbars/DefaultNavbar/DefaultNavbarMobile";

// Material Kit 2 PRO React base styles
import breakpoints from "assets/theme/base/breakpoints";

function DefaultNavbar({
  brand,
  routes,
  transparent = false,
  light = false,
  sticky = false,
  relative = false,
  center = false,
}) {
  const [dropdown, setDropdown] = useState("");
  const [dropdownEl, setDropdownEl] = useState("");
  const [dropdownName, setDropdownName] = useState("");
  const [nestedDropdown, setNestedDropdown] = useState("");
  const [nestedDropdownEl, setNestedDropdownEl] = useState("");
  const [nestedDropdownName, setNestedDropdownName] = useState("");
  const [arrowRef, setArrowRef] = useState(null);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const { t } = useTranslation("common");
  const location = useLocation();
  const theme = useTheme();
  const { mode } = useThemeMode();
  const isDark = mode === "dark" || theme.palette.mode === "dark";
  const brandLabel = brand || t("site.title");

  const getLabel = (item) =>
    item && item.translationKey ? t(item.translationKey) : item && item.name ? item.name : "";

  const openMobileNavbar = () => setMobileNavbar(!mobileNavbar);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  const visibleRoutes = routes.filter(({ hidden }) => !hidden);
  const isActiveRoute = (path) =>
    Boolean(path && path !== "#" && location.pathname.startsWith(path));
  const hasActiveChildren = (items) =>
    Array.isArray(items) &&
    items.some((child) => isActiveRoute(child.route) || hasActiveChildren(child.collapse));
  const getKey = (item, fallback) =>
    (item && (item.name || item.translationKey || item.route || item.href)) || fallback;

  const renderNavbarItems = visibleRoutes.map((item) => {
    const { name, icon, href, route, collapse } = item;
    const displayName = getLabel(item);
    const isActive = isActiveRoute(route) || hasActiveChildren(collapse);

    return (
      <DefaultNavbarDropdown
        key={name || displayName}
        name={displayName}
        icon={icon}
        href={href}
        route={route}
        collapse={Boolean(collapse)}
        onMouseEnter={({ currentTarget }) => {
          if (collapse) {
            setDropdown(currentTarget);
            setDropdownEl(currentTarget);
            setDropdownName(name);
          }
        }}
        onMouseLeave={() => collapse && setDropdown(null)}
        light={light}
        active={isActive}
      />
    );
  });

  // Render the routes on the dropdown menu
  const renderRoutes = visibleRoutes.map((routeItem) => {
    const { name, collapse, columns, rowsPerColumn } = routeItem;
    let template;

    // Render the dropdown menu that should be display as columns
    if (collapse && columns && name === dropdownName) {
      // Avoid mutating the accumulator to satisfy `no-param-reassign`.
      const calculateColumns = collapse.reduce((acc, item, index) => {
        const chunkIndex = Math.floor(index / rowsPerColumn);
        const newAcc = acc.slice();
        newAcc[chunkIndex] = (newAcc[chunkIndex] || []).concat(item);
        return newAcc;
      }, []);

      template = (
        <Grid key={name} container spacing={3} py={1} px={1.5}>
          {calculateColumns.map((cols, key) => {
            const gridKey = `grid-${key}`;
            const dividerKey = `divider-${key}`;

            return (
              <Grid key={gridKey} item xs={12 / columns} sx={{ position: "relative" }}>
                {cols.map((col, index) => (
                  <Fragment key={getKey(col, `col-${index}`)}>
                    <MKTypography
                      display="block"
                      variant="button"
                      fontWeight="bold"
                      textTransform="capitalize"
                      color={isDark ? "white" : "text"}
                      py={1}
                      px={0.5}
                      mt={index !== 0 ? 2 : 0}
                    >
                      {getLabel(col)}
                    </MKTypography>
                    {col.collapse.map((item, itemIndex) => (
                      <MKTypography
                        key={getKey(item, `nested-${itemIndex}`)}
                        component={item.route ? Link : MuiLink}
                        to={item.route ? item.route : ""}
                        href={item.href ? item.href : (e) => e.preventDefault()}
                        target={item.href ? "_blank" : ""}
                        rel={item.href ? "noreferrer" : "noreferrer"}
                        minWidth="11.25rem"
                        display="block"
                        variant="button"
                        color={isDark ? "white" : "text"}
                        textTransform="capitalize"
                        fontWeight={isActiveRoute(item.route) ? "bold" : "regular"}
                        py={0.625}
                        px={2}
                        sx={({ palette: { grey, dark, text }, borders: { borderRadius } }) => ({
                          borderRadius: borderRadius.md,
                          cursor: "pointer",
                          transition: "all 300ms linear",
                          color: isDark ? grey[60] : text.primary,
                          opacity: 1,
                          "& *": {
                            color: isDark ? grey[60] : text.primary,
                            opacity: 1,
                          },

                          "&:hover": {
                            backgroundColor: isDark ? grey[800] : grey[200],
                            color: isDark ? grey[60] : dark.main,
                            "& *": {
                              color: isDark ? grey[60] : dark.main,
                            },
                          },
                        })}
                      >
                        {getLabel(item)}
                      </MKTypography>
                    ))}
                  </Fragment>
                ))}
                {key !== 0 && (
                  <Divider
                    key={dividerKey}
                    orientation="vertical"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "-4px",
                      transform: "translateY(-45%)",
                      height: "90%",
                    }}
                  />
                )}
              </Grid>
            );
          })}
        </Grid>
      );

      // Render the dropdown menu that should be display as list items
    } else if (collapse && name === dropdownName) {
      template = collapse.map((item, itemIndex) => {
        const linkComponent = {
          component: MuiLink,
          href: item.href,
          target: "_blank",
          rel: "noreferrer",
        };

        const routeComponent = {
          component: Link,
          to: item.route,
        };

        return (
          <MKTypography
            key={getKey(item, `item-${itemIndex}`)}
            {...(item.route ? routeComponent : linkComponent)}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            variant="button"
            textTransform="capitalize"
            minWidth={item.description ? "14rem" : "12rem"}
            color={isDark ? "white" : item.description ? "dark" : "text"}
            fontWeight={isActiveRoute(item.route) || item.description ? "bold" : "regular"}
            py={item.description ? 1 : 0.625}
            px={2}
            sx={({ palette: { grey, dark, text }, borders: { borderRadius } }) => ({
              borderRadius: borderRadius.md,
              cursor: "pointer",
              transition: "all 300ms linear",
              color: isDark ? grey[60] : text.primary,
              opacity: 1,
              "& *": {
                color: isDark ? grey[60] : text.primary,
                opacity: 1,
              },

              "&:hover": {
                backgroundColor: isDark ? grey[800] : grey[200],
                color: isDark ? grey[60] : dark.main,

                "& *": {
                  color: isDark ? grey[60] : dark.main,
                },
              },
            })}
            onMouseEnter={({ currentTarget }) => {
              if (item.dropdown) {
                setNestedDropdown(currentTarget);
                setNestedDropdownEl(currentTarget);
                setNestedDropdownName(item.name);
              }
            }}
            onMouseLeave={() => {
              if (item.dropdown) {
                setNestedDropdown(null);
              }
            }}
          >
            {item.description ? (
              <MKBox>
                {getLabel(item)}
                <MKTypography
                  display="block"
                  variant="button"
                  color={isDark ? "white" : "text"}
                  fontWeight="regular"
                  sx={{ transition: "all 300ms linear" }}
                >
                  {item.description}
                </MKTypography>
              </MKBox>
            ) : (
              getLabel(item)
            )}
            {item.collapse && (
              <Icon
                fontSize="small"
                sx={{ fontWeight: "normal", verticalAlign: "middle", mr: -0.5 }}
              >
                keyboard_arrow_right
              </Icon>
            )}
          </MKTypography>
        );
      });
    }

    return template;
  });

  // Routes dropdown menu
  const dropdownMenu = (
    <Popper
      anchorEl={dropdown}
      popperRef={null}
      open={Boolean(dropdown)}
      placement="top-start"
      transition
      style={{ zIndex: 10 }}
      modifiers={[
        {
          name: "arrow",
          enabled: true,
          options: {
            element: arrowRef,
          },
        },
      ]}
      onMouseEnter={() => setDropdown(dropdownEl)}
      onMouseLeave={() => {
        if (!nestedDropdown) {
          setDropdown(null);
          setDropdownName("");
        }
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          sx={{
            transformOrigin: "left top",
            background: "transparent",
          }}
        >
          <MKBox borderRadius="lg">
            <MKTypography
              variant="h1"
              sx={({ palette: { white, background } }) => ({
                color: isDark ? background.paper : white.main,
              })}
            >
              <Icon ref={setArrowRef} sx={{ mt: -3 }}>
                arrow_drop_up
              </Icon>
            </MKTypography>
            <MKBox
              shadow="lg"
              borderRadius="lg"
              p={2}
              mt={2}
              sx={({ palette }) => ({
                backgroundColor: isDark ? palette.background.paper : palette.white.main,
                color: isDark ? palette.grey[100] : "inherit",
                border: isDark ? `1px solid ${palette.grey[800]}` : "none",
              })}
            >
              {renderRoutes}
            </MKBox>
          </MKBox>
        </Grow>
      )}
    </Popper>
  );

  // Render routes that are nested inside the dropdown menu routes
  const renderNestedRoutes = visibleRoutes.map(({ collapse, columns }) =>
    collapse && !columns
      ? collapse.map(({ name: parentName, collapse: nestedCollapse }) => {
        let template;

        if (parentName === nestedDropdownName) {
          template =
            nestedCollapse &&
            nestedCollapse.map((item, nestedIndex) => {
              const linkComponent = {
                component: MuiLink,
                href: item.href,
                target: "_blank",
                rel: "noreferrer",
              };

              const routeComponent = {
                component: Link,
                to: item.route,
              };

              return (
                <MKTypography
                  key={getKey(item, `nested-${nestedIndex}`)}
                  {...(item.route ? routeComponent : linkComponent)}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  variant="button"
                  textTransform="capitalize"
                  minWidth={item.description ? "14rem" : "12rem"}
                  color={isDark ? "white" : item.description ? "dark" : "text"}
                  fontWeight={isActiveRoute(item.route) || item.description ? "bold" : "regular"}
                  py={item.description ? 1 : 0.625}
                  px={2}
                  sx={({ palette: { grey, dark, text }, borders: { borderRadius } }) => ({
                    borderRadius: borderRadius.md,
                    cursor: "pointer",
                    transition: "all 300ms linear",
                    color: isDark ? grey[60] : text.primary,
                    opacity: 1,
                    "& *": {
                      color: isDark ? grey[60] : text.primary,
                      opacity: 1,
                    },

                    "&:hover": {
                      backgroundColor: isDark ? grey[800] : grey[200],
                      color: isDark ? grey[60] : dark.main,

                      "& *": {
                        color: isDark ? grey[60] : dark.main,
                      },
                    },
                  })}
                >
                  {item.description ? (
                    <MKBox>
                      {getLabel(item)}
                      <MKTypography
                        display="block"
                        variant="button"
                        color={isDark ? "white" : "text"}
                        fontWeight="regular"
                        sx={{ transition: "all 300ms linear" }}
                      >
                        {item.description}
                      </MKTypography>
                    </MKBox>
                  ) : (
                    getLabel(item)
                  )}
                  {item.collapse && (
                    <Icon
                      fontSize="small"
                      sx={{ fontWeight: "normal", verticalAlign: "middle", mr: -0.5 }}
                    >
                      keyboard_arrow_right
                    </Icon>
                  )}
                </MKTypography>
              );
            });
        }

        return template;
      })
      : null
  );

  // Dropdown menu for the nested dropdowns
  const nestedDropdownMenu = (
    <Popper
      anchorEl={nestedDropdown}
      popperRef={null}
      open={Boolean(nestedDropdown)}
      placement="right-start"
      transition
      style={{ zIndex: 10 }}
      onMouseEnter={() => {
        setNestedDropdown(nestedDropdownEl);
      }}
      onMouseLeave={() => {
        setNestedDropdown(null);
        setNestedDropdownName("");
        setDropdown(null);
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          sx={{
            transformOrigin: "left top",
            background: "transparent",
          }}
        >
          <MKBox ml={2.5} mt={-2.5} borderRadius="lg">
            <MKBox
              shadow="lg"
              borderRadius="lg"
              py={1.5}
              px={1}
              mt={2}
              sx={({ palette }) => ({
                backgroundColor: isDark ? palette.background.paper : palette.white.main,
                color: isDark ? palette.grey[100] : "inherit",
                border: isDark ? `1px solid ${palette.grey[800]}` : "none",
              })}
            >
              {renderNestedRoutes}
            </MKBox>
          </MKBox>
        </Grow>
      )}
    </Popper>
  );

  return (
    <Container sx={sticky ? { position: "sticky", top: 0, zIndex: 10 } : null}>
      <MKBox
        py={1}
        px={{ xs: 4, sm: transparent ? 2 : 3, lg: transparent ? 0 : 2 }}
        my={relative ? 0 : 2}
        mx={relative ? 0 : 3}
        width={relative ? "100%" : "calc(100% - 48px)"}
        borderRadius="xl"
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        position={relative ? "relative" : "absolute"}
        left={0}
        zIndex={3}
        sx={({ palette, functions: { rgba } }) => {
          const { transparent: transparentColor, white, background } = palette;
          const baseBg =
            palette.mode === "dark" ? rgba(background.paper, 0.92) : rgba(white.main, 0.8);

          return {
            backgroundColor: transparent ? transparentColor.main : baseBg,
            backdropFilter: transparent
              ? "none"
              : palette.mode === "dark"
                ? "saturate(160%) blur(20px)"
                : "saturate(200%) blur(30px)",
          };
        }}
      >
        <MKBox display="flex" justifyContent="space-between" alignItems="center">
          <MKBox
            component={Link}
            to="/"
            lineHeight={1}
            py={transparent ? 1.5 : 0.75}
            pl={relative || transparent ? 0 : { xs: 0, lg: 1 }}
          >
            <MKTypography variant="button" fontWeight="bold" color={light ? "white" : "dark"}>
              {brandLabel}
            </MKTypography>
          </MKBox>
          <MKBox
            color="inherit"
            display={{ xs: "none", lg: "flex" }}
            ml="auto"
            mr={center ? "auto" : 0}
          >
            {renderNavbarItems}
          </MKBox>
          <MKBox ml={{ xs: "auto", lg: 0 }} display="flex" alignItems="center" gap={1.5}>
            <ThemeSwitcher />
            <LanguageSwitcher />
          </MKBox>
          <MKBox
            display={{ xs: "inline-block", lg: "none" }}
            lineHeight={0}
            py={1.5}
            pl={1.5}
            color={transparent ? "white" : "inherit"}
            sx={{ cursor: "pointer" }}
            onClick={openMobileNavbar}
          >
            <Icon fontSize="default">{mobileNavbar ? "close" : "menu"}</Icon>
          </MKBox>
        </MKBox>
        <MKBox
          bgColor={transparent ? "white" : "transparent"}
          shadow={transparent ? "lg" : "none"}
          borderRadius="xl"
          px={transparent ? 2 : 0}
        >
          {mobileView && <DefaultNavbarMobile routes={routes} open={mobileNavbar} />}
        </MKBox>
      </MKBox>
      {dropdownMenu}
      {nestedDropdownMenu}
    </Container>
  );
}

// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
  brand: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  sticky: PropTypes.bool,
  relative: PropTypes.bool,
  center: PropTypes.bool,
};

export default DefaultNavbar;
