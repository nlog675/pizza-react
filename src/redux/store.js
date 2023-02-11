import { configureStore, compose, applyMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore(
  {reducer: rootReducer}, 
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;