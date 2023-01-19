import config from "../configs"
import HeaderOnly from "../layouts/HeaderOnly"
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Test from "../pages/Test"
import Following from "../pages/Following"
import Live from "../pages/Live"

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.test,
        component: Test,
        layout: HeaderOnly
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.live,
        component: Live,
    },

]

const privateRoutes = [

]


export {publicRoutes, privateRoutes}