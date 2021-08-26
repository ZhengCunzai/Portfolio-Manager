import VueRouter from "vue-router";
import Home from '../views/Home';
import ShowFunds from "../views/ShowFunds";
import UserFund from "../views/UserFund";


const routes = [
    {
        path: "/",
        redirect: "/showFunds",
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

