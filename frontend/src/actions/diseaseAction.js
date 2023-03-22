import axios from "axios";
import {
  DISEASE_REQUEST,
  DISEASE_SUCCESS,
  DISEASE_FAIL,
  CLEAR_ERRORS,
} from "../constants/diseaseConstant";

export const getDisease = () => async (dispatch) => {
  try {
    dispatch({ type: DISEASE_REQUEST });

    const { data } = await axios.get("/api/v1/disease");

    dispatch({
      type: DISEASE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DISEASE_FAIL,
      payload: error.response.data.message,
    });
  }
};

//clearing errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    });
}

