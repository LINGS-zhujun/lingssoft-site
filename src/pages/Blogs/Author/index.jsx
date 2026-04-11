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
import Card from "@mui/material/Card";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

// Material Kit 2 PRO React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections
import Profile from "pages/Blogs/Author/sections/Profile";
import Posts from "pages/Blogs/Author/sections/Posts";
import Contact from "pages/Blogs/Author/sections/Contact";
import Footer from "pages/Blogs/Author/sections/Footer";

// Routes
import routes from "routes/routes";

// Images
import bgImage from "assets/images/city-profile.jpg";

import { useThemeMode } from "context/ThemeModeContext";

function Author() {
  const { mode } = useThemeMode();
  const isDark = mode === "dark";

  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
      <MKBox bgColor={isDark ? "dark" : "white"}>
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: isDark
              ? ({ palette: { dark } }) => dark.main
              : ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Profile />
          <Posts />
        </Card>
        <Contact />
        <Footer />
      </MKBox>
    </>
  );
}

export default Author;
