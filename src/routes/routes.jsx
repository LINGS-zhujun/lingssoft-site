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

/** 
  All of the routes for the Material Kit 2 PRO React React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// React + @mui material components
import React, { lazy } from "react";
import Icon from "@mui/material/Icon";

// Pages (lazy-loaded)
const AboutUs = lazy(() => import("layouts/pages/company/about-us"));
const Pricing = lazy(() => import("layouts/pages/company/pricing"));
const History = lazy(() => import("layouts/pages/company/history"));
const Values = lazy(() => import("layouts/pages/company/values"));
const Solutions = lazy(() => import("layouts/pages/company/solutions"));
const ContactUs = lazy(() => import("layouts/pages/support/contact-us"));
const HelpCenter = lazy(() => import("layouts/pages/support/help-center"));
const Terms = lazy(() => import("layouts/pages/support/terms"));
const Privacy = lazy(() => import("layouts/pages/support/privacy"));
const Gdpr = lazy(() => import("layouts/pages/support/gdpr"));
const License = lazy(() => import("layouts/pages/support/license"));
const CustomDev = lazy(() => import("layouts/pages/support/custom-development"));
const Sponsorships = lazy(() => import("layouts/pages/support/sponsorships"));
const EcoAIDevOpsPlatform = lazy(() => import("pages/Items/DevOps"));
const EnterpriseSecuritySuite = lazy(() => import("pages/Items/Security"));
const EduTechPlatform = lazy(() => import("pages/Items/Education"));

const routes = [
  {
    name: "first",
    translationKey: "menu.business",
    icon: <Icon>dashboard</Icon>,
    collapse: [
      {
        translationKey: "menu.solutions",
        dropdown: true,
        collapse: [
          {
            translationKey: "menu.all_products",
            route: "/pages/company/solutions",
            component: Solutions,
          },
          {
            translationKey: "menu.ai_devops",
            route: "/pages/items/devops",
            component: EcoAIDevOpsPlatform,
          },
          {
            translationKey: "menu.security",
            route: "/pages/items/security",
            component: EnterpriseSecuritySuite,
          },
          {
            translationKey: "menu.education",
            route: "/pages/items/education",
            component: EduTechPlatform,
          },
        ],
      },
      {
        translationKey: "menu.pricing",
        route: "/pages/company/pricing",
        component: Pricing,
      },
    ],
  },
  {
    name: "second",
    translationKey: "menu.company",
    icon: <Icon>contacts</Icon>,
    collapse: [
      {
        translationKey: "menu.about",
        route: "/pages/company/about-us",
        component: AboutUs,
      },
      {
        translationKey: "menu.history",
        route: "/pages/company/history",
        component: History,
      },
      {
        translationKey: "menu.values",
        route: "/pages/company/values",
        component: Values,
      },
    ],
  },
  {
    name: "third",
    translationKey: "menu.helpnsupport",
    icon: <Icon>help_outline</Icon>,
    hidden: true,
    collapse: [
      {
        translationKey: "menu.contact",
        route: "/pages/support/contact-us",
        component: ContactUs,
      },
      {
        translationKey: "menu.knowledge",
        route: "/pages/support/help-center",
        component: HelpCenter,
      },
      {
        translationKey: "menu.customdev",
        route: "/pages/support/custom-development",
        component: CustomDev,
      },
      {
        translationKey: "menu.sponsor",
        route: "/pages/support/sponsorships",
        component: Sponsorships,
      },
    ],
  },
  {
    name: "fourth",
    translationKey: "menu.legal",
    icon: <Icon>gavel</Icon>,
    hidden: true,
    collapse: [
      {
        translationKey: "menu.terms",
        route: "/pages/support/terms",
        component: Terms,
      },
      {
        translationKey: "menu.privacy",
        route: "/pages/support/privacy",
        component: Privacy,
      },
      {
        translationKey: "menu.gdpr",
        route: "/pages/support/gdpr",
        component: Gdpr,
      },
      {
        translationKey: "menu.license",
        route: "/pages/support/license",
        component: License,
      },
    ],
  },
];

export default routes;
