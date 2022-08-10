import { useSelector as selector, shallowEqual} from "react-redux";
import {AppState} from "../store/rootReducer";

const useSelector = (props: (state: AppState) => any) => {
    return selector(props, shallowEqual);
}
export default useSelector;
