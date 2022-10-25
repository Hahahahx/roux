import { jsx as _jsx } from "react/jsx-runtime";
import { createElement, Suspense, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RouterContext } from "./common";
/**
 * 路由对象，接收一个拦截处理函数和路由表
 * 子路由会再次调用该对象，嵌套路由。
 */
const Routers = ({ mount, unmount, routers, errorElement, }) => {
    return routers.map((route) => {
        return {
            path: route.pathName,
            element: _jsx(Router, { route: route, unmount: unmount, mount: mount }),
            errorElement: route.handles?.errorElement || errorElement,
            action: route.handles?.action,
            loader: route.handles?.loader,
            index: route.index,
            children: route.child
                ? Routers({
                    mount,
                    unmount,
                    errorElement,
                    routers: route.child,
                })
                : null,
        };
    });
};
export const RoutersRecursion = Routers;
const Loading = ({ lazy, children, fallback }) => lazy ? _jsx(Suspense, { fallback: fallback, children: children }) : children;
const Router = ({ route, mount, unmount }) => {
    const navigate = useNavigate();
    useEffect(() => {
        mount &&
            mount({
                ...route,
                navigate,
            });
        return () => {
            unmount &&
                unmount({
                    ...route,
                    navigate,
                });
        };
    }, []);
    return (_jsx(RouterContext.Provider, { value: route, children: _jsx(Loading, { lazy: route.lazy, fallback: route.handles?.fallback?.(route), children: createElement(route.element) }) }));
};
