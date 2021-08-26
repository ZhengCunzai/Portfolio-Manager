import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home';
import Login from "../views/Login";
import ShowFunds from "../views/ShowFunds";
import ShowOneFund from "../views/ShowOneFund";
import Buy from "../views/Buy";
import Sell from "../views/Sell";
import UserFund from "../views/UserFund";
import Dashboard from "../views/Dashboard";
import Piechart from "../views/Piechart";


Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

const routes = [
    {
        path: "/",
        redirect: "/home",
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
        path: "/login",
        name: 'login',
        component: Login
    },
    {
        path: "/logout",
        name: 'logout',
        component: Login
    },
    {
        path: "/showFunds",
        component: ShowFunds
    },
    {
        path: "/showOneFund",
        component: ShowOneFund
    },
    {
        path: "/buy",
        component: Buy
    },
    {
        path: "/sell",
        component: Sell
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

