import { NavLink } from "react-router-dom";
import { RouterView, useRouter } from "@roux/react";

const Main = () => {
    const { child } = useRouter();

    console.log(child);

    return (
        <>
            <ul>
                <li> main</li>
                {child?.map((item: any, index: any) => (
                    <li key={index}>
                        <NavLink to={item.path}>{item?.path}</NavLink>
                    </li>
                ))}
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
