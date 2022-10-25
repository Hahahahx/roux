import { NavLink } from "react-router-dom";
import { RouterView } from "@roux/react";
// import { useRouter } from "../../../../src";

const Tomato = () => {
    // const { config } = useRouter();
    // return <>{config?.htmlmeta?.title}</>;

    return (
        <>
            {" "}
            <NavLink to="/main/tomato/123">/main/potato/123</NavLink>;{"tomato"}
            <RouterView />
        </>
    );
};

export default Tomato;
