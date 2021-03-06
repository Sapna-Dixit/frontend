import { createStore } from "redux";
import { applyMiddleware } from "redux";
import rootReducers from "./reducers/rootReducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'

const middleware = [thunk]

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(...middleware)))

export default store;