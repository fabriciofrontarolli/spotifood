import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import throttle from "lodash.throttle";
import { saveState, loadState } from "./utils/localStorage";
import services from "../services";

/* import reducers */
import authentication from "./authentication";
import spotify from "./spotify";

/* enhancers */
const middlwares = [thunk.withExtraArgument(services)];

/* combine reducers */
const allReducers = combineReducers({
  authentication,
  spotify,
});

const persistedState = loadState();

/* create store */
const store = createStore(
  allReducers,
  persistedState,
  composeWithDevTools(applyMiddleware(...middlwares))
);

/* Persist store to local storage */
store.subscribe(
  throttle(() => {
    saveState({
      authentication: store.getState().authentication,
      spotify: store.getState().spotify,
    });
  }, 1000)
);

export default store;
