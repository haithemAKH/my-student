import rootReducer from "../Reducers";
import thunk from "redux-thunk";
import { applyMiddleware,createStore,compose } from "redux";

const compseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
const store = createStore(rootReducer , compseEnhancer(applyMiddleware(thunk)))
export default store ;