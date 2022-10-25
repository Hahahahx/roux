import { createElement, FC, Suspense, useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { RouxReact } from "../types/type";
import { RouterContext } from "./common";

/**
 * 路由对象，接收一个拦截处理函数和路由表
 * 子路由会再次调用该对象，嵌套路由。
 */
const Routers = ({
    mount,
    unmount,
    routers,
    errorElement,
}: RouxReact.RouterRecursionParams): any => {
    return routers.map((route: RouxReact.RouteParams) => {
        return {
            path: route.pathName,
            element: <Router route={route} unmount={unmount} mount={mount} />,
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

interface RouterProps {
    route: RouxReact.RouteParams;
    unmount?: (
        params: RouxReact.RouteParams & { navigate: NavigateFunction }
    ) => void;
    mount?: (
        params: RouxReact.RouteParams & { navigate: NavigateFunction }
    ) => void;
}

const Loading: FC<{
    lazy: boolean;
    children: any;
    fallback?: React.ReactNode;
}> = ({ lazy, children, fallback }) =>
    lazy ? <Suspense fallback={fallback}>{children}</Suspense> : children;

const Router = ({ route, mount, unmount }: RouterProps) => {
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

    return (
        <RouterContext.Provider value={route}>
            <Loading
                lazy={route.lazy}
                fallback={route.handles?.fallback?.(route)}
            >
                {createElement(route.element)}
            </Loading>
        </RouterContext.Provider>
    );
};
