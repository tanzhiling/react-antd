import Loadable from "react-loadable";
import DelayLoading from 'components/DelayLoading'
const Home            = Loadable({loader: () => import("routers/Home"), loading: DelayLoading,delay:3000});
const GoodsManage     = Loadable({loader: () => import("routers/GoodsManage"),loading: DelayLoading,delay:3000});
const OrderManage     = Loadable({loader: () => import("routers/OrderManage"),loading: DelayLoading,delay:3000});
export default [{
    path:"/home",
    component:Home
},{
    path:"/goodsmahe",
    component:GoodsManage
},{
    path:"/order",
    component:OrderManage
}]