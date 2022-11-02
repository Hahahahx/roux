import { NavLink } from "react-router-dom";
import { RouterView, useRouter } from "@roux/react";

const Main = () => {
    return (
        <>
            <ul>
                <li> main</li>
            </ul>
            <div>
                {/* <Suspense> */}
                <RouterView />
                {/* </Suspense> */}
            </div>
        </>
    );
};

export default Main;
