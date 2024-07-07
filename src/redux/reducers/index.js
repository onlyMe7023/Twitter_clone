import { combineReducers } from 'redux';
import auth from "./auth";
import types from '../types';
import main from './main';

const appReducer = combineReducers({
    auth,
    main
});
const rootReducer = (state, action) => {
    if (action.type == types.CLEAR_REDUX_STATE) {
        state = undefined;
    }
    return appReducer(state, action)
}
export default rootReducer;