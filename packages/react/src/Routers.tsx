import {
    createBrowserRouter,
    RouterProvider,
    createHashRouter,
} from "react-router-dom";
import { RouxReact } from "../types/type";
import { RoutersRecursion } from "./RoutersRecursion";

export const Routers = (params: RouxReact.RouterProps) => {
    const Router =
        params.type == "hash" ? createHashRouter : createBrowserRouter;

    return <RouterProvider router={Router(RoutersRecursion({ ...params }))} />;
};
