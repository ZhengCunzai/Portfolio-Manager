import VueRouter from "vue-router";
import Home from '../views/Home';
import ShowFunds from "../views/ShowFunds";
import UserFund from "../views/UserFund";
import Dashboard from "../views/Dashboard";
import Piechart from "../views/Piechart";


const routes = [
    {
        path: "/",
        redirect: "/showFunds",
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard
    },
    {
        path: "/piechart",
        name: "Piechart",
        component: Piechart
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

];

const router = new VueRouter({
    routes
});

export default router;

