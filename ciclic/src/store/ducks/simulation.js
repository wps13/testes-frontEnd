export const Types = {
  ON_CHANGE_DATA: "ON_CHANGE_DATA",
  SIMULATION_REQUEST: "SIMULATION_REQUEST",
  SIMULATION_SUCCESS: "SIMULATION_SUCCESS",
  SIMULATION_FAILURE: "SIMULATION_FAILURE"
};

const initialState = {
  formData: null,
  expr: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.ON_CHANGE_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload
        }
      };
    case Types.SIMULATION_REQUEST:
      return {
        ...state,
        isLoadingSimulation: true
      };
    case Types.SIMULATION_SUCCESS:
      return {
        ...state,
        isLoadingSimulation: false,
        ...action.payload
      };
    case Types.SIMULATION_FAILURE:
      return {
        ...state,
        isLoadingSimulation: false,
        ...action.payload
      };
    default:
      return state;
  }
}

export function onChangeData(data) {
  return {
    type: Types.ON_CHANGE_DATA,
    payload: {
      ...data
    }
  };
}

export function simulationRequest(expression) {
  return {
    type: Types.SIMULATION_REQUEST,
    payload: {
      ...expression
    }
  };
}
