import {
  DISEASE_REQUEST,
  DISEASE_SUCCESS,
  DISEASE_FAIL,
  CLEAR_ERRORS,
} from "../constants/diseaseConstant";

export const diseaseReducer = (state = { diseases: [] }, action) => {
  switch (action.type) {
    case DISEASE_REQUEST:
      return { loading: true, disease: [] };
    case DISEASE_SUCCESS:
      return { loading: false, disease: action.payload };
    case DISEASE_FAIL:
      return { loading: false, error: action.payload };
    case CLEAR_ERRORS:
        return { ...state, error: null };
    default:
      return state;
  }
};
