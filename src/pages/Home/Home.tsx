import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import useSelector from "../../hooks/useSelector";
import {Banner, CTA} from "../../components";
import DefaultLayout from "../DefaultLayout";
import {selectAppLoading} from "../../store/selectors/app.selector";
import {getAppLoading} from "../../store/actions/app.action";
import _ from "underscore"

const Home = () => {
    const loading = useSelector(selectAppLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('render', loading)
        if (!loading) {
            dispatch(getAppLoading())
        }
    }, [loading]);
    return loading && (
        <DefaultLayout>
            <Banner/>
            <CTA/>
        </DefaultLayout>
    );
};

export default Home;
