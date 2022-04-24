import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { JokeType } from "../types";
import { fetchJokesFailure, fetchJokesSuccess } from "../jokesSlice";

function* workerSaga() {
  try {
    const {data}: AxiosResponse<Array<JokeType>> = yield call(axios, "https://nova-joke-api.netlify.app/.netlify/functions/index/api/programming/ten");
    const favJokesList = JSON.parse(localStorage.getItem("favourites") || "[]");
    yield put(fetchJokesSuccess({data, favJokesList}));
  } catch (e) {
    window.alert(e);
    if (e instanceof Error) {
      yield put(fetchJokesFailure(e.message));
    }
  }
}

function* watcherSaga() {
  yield takeLatest("jokes/fetchJokes", workerSaga);
}

export default function* rootSaga() {
  yield all([watcherSaga()]);
}