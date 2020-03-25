import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer/rootReducer";
import logger from "redux-logger";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
