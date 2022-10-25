/// <reference types="react" />

import type { NavigateFunction } from "react-router-dom";

declare namespace RouxReact {
    export interface RouterRecursionParams {
        unmount?: (
            params: RouteParams & { navigate: NavigateFunction }
        ) => void;
        mount?: (params: RouteParams & { navigate: NavigateFunction }) => void;
        routers: Array<RouteParams>;
        errorElement?: React.ReactNode;
    }

    export type RouterContext = RouteParams;

    export interface RouteParams {
        element: any;
        relative: string;
        absolute: string;
        path: string;
        pathName: string;
        index: boolean;
        lazy: boolean;
        param: boolean;
        recursion: boolean;
        child: Array<RouteParams> | null;
        handles?: {
            [k in string]: any;
        };
    }

    export type RouterProps = RouterRecursionParams & {
        type: "hash" | "history";
    };
}
