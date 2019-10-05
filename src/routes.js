import Application from "views/Application.jsx";
import Dashboard from "views/Dashboard.jsx";
import Teams from "views/Teams.jsx";
import Admins from "views/Admins.jsx"
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Upgrade from "views/Upgrade.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/application",
    name: "Application",
    icon: "pe-7s-user",
    component: Application,
    layout: "/admin"
  },
  {
    path: "/team",
    name: "Teams",
    icon: "pe-7s-note2",
    component: Teams,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "pe-7s-map-marker",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/statistics",
    name: "Admin",
    icon: "pe-7s-news-paper",
    component: Admins,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "pe-7s-science",
    component: Icons,
    layout: "/admin"
  },
  {
    upgrade: true,
    path: "/login",
    name: "Logout",
    icon: "pe-7s-lock",
    component: Upgrade,
    layout: "/admin"
  }
];

export default dashboardRoutes;
