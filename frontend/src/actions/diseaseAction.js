import { collection, getDocs, query, where } from "firebase/firestore";
import {
  DISEASE_REQUEST,
  DISEASE_SUCCESS,
  DISEASE_FAIL,
  CLEAR_ERRORS,
} from "../constants/diseaseConstant";
import { db } from "../firebase";

export const getDisease = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: DISEASE_REQUEST });

    const dbs = db;
    const diseasesRef = await collection(dbs, "diseases");
    //make the search query case insensitive
    searchQuery = searchQuery.toLowerCase();
    searchQuery.trim();
    const q = await query(
      diseasesRef,
      where("Disease_Name", ">=", searchQuery),
      where("Disease_Name", "<=", searchQuery + "\uf8ff")
    );
    const querySnapshot = await getDocs(q);
    const matchingDocs = await querySnapshot.docs.map((doc) => doc.data());
    const data = await matchingDocs[0];

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

