import config from "../configs"
import HeaderOnly from "../layouts/HeaderOnly"
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Test from "../pages/Test"

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
    }
]

const privateRoutes = [

]


export {publicRoutes, privateRoutes}