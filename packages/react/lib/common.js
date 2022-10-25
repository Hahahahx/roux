import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
import { Outlet } from "react-router-dom";
export const RouterContext = createContext(null);
export const RouterView = () => {
    return _jsx(Outlet, {});
};
export const useRouter = () => {
    const router = useContext(RouterContext);
    return { ...router };
};
