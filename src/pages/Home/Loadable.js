// For Lazy Loading

// Components
import loadable from "../../utils/loadable";

// Utils
import Loader from "../../components/Loader";

export default loadable(() => import("./index"), <Loader />);
