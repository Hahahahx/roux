import { RouterView, useRouter } from "@roux/react";

const Index = () => {
    return "null";
};

export const Unmount = () => {
    const { child } = useRouter();

    return (
        <>
            {"dsf"}

            <RouterView />
        </>
    );
};

export default Index;
