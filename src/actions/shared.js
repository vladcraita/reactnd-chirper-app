import {getInitialData} from "../utils/api";
import {receiveTweets} from "./tweets";
import {receiveUsers} from "./users";
import {setAuthedUser} from "./authedUser";
import {hideLoading, showLoading} from "react-redux-loading-bar";

const AUTHED_ID = 'tylermcginnis';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData()
            .then(({users, tweets}) => {
                dispatch(receiveUsers(users));
                dispatch(receiveTweets(tweets));
                dispatch(setAuthedUser(AUTHED_ID));
                dispatch(hideLoading());
            });
    };
}
