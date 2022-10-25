import { NavLink } from "react-router-dom";
import { RouterView, useRouter } from "@roux/react";

const Potato = () => {
    const { child } = useRouter();
    // return <>{config?.htmlmeta?.title}</>
    return (
        <>
            {"potatp"}

            <NavLink to="./123">./123</NavLink>
            {/* {child?.map((item: any, index: any) => (
                <li key={index}>
                    <NavLink to={item.path}>{item?.path}</NavLink>
                </li>
            ))} */}

            <RouterView />
        </>
    );
};

export default Potato;
export const Unmount = () => {
    return "dsf";
};
