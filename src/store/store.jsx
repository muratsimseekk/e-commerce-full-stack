import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { globalReducer } from "./reducers/globalReducer";
import { userReducer } from "./reducers/userReducer";
import { storeReducer } from "./reducers/storeReducer";

export const reducers = combineReducers({
  general: globalReducer,
  user: userReducer,
  store: storeReducer,
  //   user: userReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk, logger));

// export const store = createStore(
//     reducers,
//     applyMiddleware(logger, yetkiKontrolu, thunk)
//   );
