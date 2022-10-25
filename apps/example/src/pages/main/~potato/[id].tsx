import { useParams } from "react-router-dom";

const Potato = () => {
    let params = useParams();
    console.log(params);
    return <>{"id"}</>;
};

export default Potato;
