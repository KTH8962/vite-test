import { combineReducers } from "redux";
import authReducer from './reducer';
import testReducer from "./reducer2";

const rootReducer = combineReducers({
    auth: authReducer,
    test: testReducer
});

export type RootState = ReturnType<typeof rootReducer>;
//export { rootReducer };

//export { testReducer };

export default rootReducer;