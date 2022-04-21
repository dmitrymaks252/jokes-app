import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import jokesReducer from "./jokesSlice";
import rootSaga from "./sagas/jokesSaga";


const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    jokes: jokesReducer
  },
  middleware: [saga]
});

saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;

