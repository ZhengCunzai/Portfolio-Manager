import VueRouter from "vue-router";
import Home from '../views/Home';
import ShowFunds from "../views/ShowFunds";
import UserFund from "../views/UserFund";
import Profit from "../views/Profit";
import Dashboard from "../views/Dashboard";
import About from "../views/About";

const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/profit",
        name: "Profit",
        component: Profit
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/home",
        name: "Home",
        component: Home
    },
    {
        path: "/showFunds",
        component: ShowFunds
    },
    {
        path: "/userfund",
        component: UserFund
    },
    {
        path: "/about",
        component: About
    },

];

const router = new VueRouter({
    routes
});

export default router;

