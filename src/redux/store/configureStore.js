import { createStore, applyMiddleware } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import rootReducer from "../reducers";

export default function configureState(initialState) {
  const middleWares =
    process.env.NODE_ENV !== "production"
      ? [logger, reduxImmutableStateInvariant(), composeWithDevTools, thunk]
      : [thunk]


  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleWares)
  );
}
