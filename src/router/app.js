import React from "react";
export default function(Loadable) {
  return [
    {
      name: "app",
      path: "/",
      exact: true,
      component: Loadable({
        loader: () => import("page/app"),
        loading: () => <div />
      }),
      children:[
        {
          name: "goods",
          path: "/goods",
          // exact: true,
          component: Loadable({
            loader: () => import("page/goods"),
            loading: () => <div />
          })
        },
        {
          name: "order",
          path: "/order",
          // exact: true,
          component: Loadable({
            loader: () => import("page/order"),
            loading: () => <div />
          })
        }
      ]
    }
  ];
}
