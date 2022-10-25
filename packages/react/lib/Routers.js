import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter, RouterProvider, createHashRouter, } from "react-router-dom";
import { RoutersRecursion } from "./RoutersRecursion";
export const Routers = (params) => {
    const Router = params.type == "hash" ? createHashRouter : createBrowserRouter;
    return _jsx(RouterProvider, { router: Router(RoutersRecursion({ ...params })) });
};
