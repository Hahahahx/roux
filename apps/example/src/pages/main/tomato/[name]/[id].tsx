import { useParams } from "react-router-dom";

const Potato = () => {
    let params = useParams();
    console.log(params);
    // const { config } = useRouter();
    // return <>{config?.htmlmeta?.title}</>
    return <>{"id"}</>;
};

export default Potato;
