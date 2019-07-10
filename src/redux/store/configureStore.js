import { createStore, applyMiddleware } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import rootReducer from "../reducers";

export default function configureState(initialState) {
  const middleWares =
    process.env.NODE_ENV !== "production"
      ? [logger, reduxImmutableStateInvariant(), thunk]
      : [thunk]


  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleWares)
  );
}
