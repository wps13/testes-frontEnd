import { takeLatest, put, call } from "redux-saga/effects";

import api from "../../api";

import { Types } from "../ducks/simulation";

function* simulate(action) {
  try {
    const { payload } = action;
    const { monthlyCharge, period } = payload;
    const taxes = 0.0065;
    const expression =
      monthlyCharge * (((1 + taxes) ^ (period * 12 - 1)) / taxes);

    // const res = api.get("/", {
    //   expr: expression,
    //   precision: 2
    // });

    const { data } = yield call(api.post, "/", {
      expr: expression
    });

    const { result } = data;
    const newValue = Math.floor(result);
    yield put({
      type: Types.SIMULATION_SUCCESS,
      payload: { futureValue: newValue }
    });
  } catch (error) {
    yield put({
      type: Types.SIMULATION_FAILURE,
      payload: {
        errorData: error.response.data
      }
    });
  }
}

export default function* watchSagas() {
  yield takeLatest(Types.SIMULATION_REQUEST, simulate);
}
