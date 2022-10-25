import { createContext, useContext } from "react";
import { Outlet } from "react-router-dom";
import { RouxReact } from "../types/type";

export const RouterContext = createContext<RouxReact.RouterContext>(null);

export const RouterView = () => {
    return <Outlet />;
};

export const useRouter = (): RouxReact.RouterContext => {
    const router = useContext(RouterContext);
    return { ...router };
};
