import { async } from "@firebase/util";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { addDoc, collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import {
  CLEAR_ERRORS,
  FACEBOOK_AUTH_FAIL,
  FACEBOOK_AUTH_REQUEST,
  FACEBOOK_AUTH_SUCCESS,
  GITHUB_AUTH_FAIL,
  GITHUB_AUTH_REQUEST,
  GITHUB_AUTH_SUCCESS,
  GOOGLE_AUTH_FAIL,
  GOOGLE_AUTH_REQUEST,
  GOOGLE_AUTH_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
} from "../constants/userConstant";
import {
  auth,
  db,
  facebookProvider,
  githubProvider,
  googleProvider,
} from "../firebase";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const users = userCredential.user;
        (async () => {
          const userRef = await getDocs(collection(db, "users"));
          const docs = userRef.docs.find((doc) => doc.id === users.uid);
          if (docs) {
            const userData = docs.data();
            console.log(userData);
            dispatch({
              type: LOGIN_SUCCESS,
              payload: userData,
            });
          }
        })();

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        dispatch({
          type: LOGIN_FAIL,
          payload: errorMessage,
        });
      });
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    dispatch({
      type: LOGIN_FAIL,
      payload: errorMessage,
    });
  }
};

export const registerUser = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
    let data = null;
    await createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        (async () => {
            await updateProfile(user, {
                displayName: name,
                createdAt: new Date(),
            });
        })();
        setTimeout(async () => {
        }, 5000);
        data = user;
      }
    );
    
    if (data) {
        const userRef = await getDocs(collection(db, "users"));
        const docs = userRef.docs.find((doc) => doc.id === data.uid);
        if (!docs) {
          const user = {
            uid: data.uid,
            email: data.email,
            name: name,
            createdAt: new Date(),
            age: "",
            gender: "",
            city: "",
            state: "",
            country: "",
            dob: "",
            mobile:"",
            avatar: data.photoURL,
          };
          await setDoc(doc(db, "users", data.uid), user);
          dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: user,
          });
        } else {
          dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: docs.data(),
          });
        }
    } else {
        console.log("No user found");
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: errorMessage,
    });
  }
};

export const authWithGoogle = () => async (dispatch) => {
  try {
    let data = null;
    dispatch({ type: GOOGLE_AUTH_REQUEST });
    await signInWithPopup(auth, googleProvider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      
      data = user;
    });

    
    if (data) {
      const userRef = await getDocs(collection(db, "users"));
      const docs = userRef.docs.find((doc) => doc.id === data.uid);
      // console.log(userRef.data());
        if (!docs) {
          //set the doc id equal to data.uid
          const user = {
            uid: data.uid,
            email: data.email,
            name: data.displayName,
            createdAt: new Date(),
            age: "",
            gender: "",
            city: "",
            state: "",
            country: "",
            dob: "",
            mobile:"",
            avatar: data.photoURL,
          };
          await setDoc(doc(db, "users", data.uid), user);
          dispatch({
            type: GOOGLE_AUTH_SUCCESS,
            payload: user,
          });
        } else {
          console.log(docs.data());
          dispatch({
            type: GOOGLE_AUTH_SUCCESS,
            payload: docs.data(),
          });
        }
    } else {
        console.log("No user found");
    }
  } catch (error) {
    dispatch({
      type: GOOGLE_AUTH_FAIL,
      payload: error,
    });
    console.log(error);
  }
};

export const authWithFacebook = () => async (dispatch) => {
  try {
    let data = null;
    dispatch({ type: FACEBOOK_AUTH_REQUEST });
    await signInWithPopup(auth, facebookProvider).then((result) => {
      const user = result.user;
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      data = user.toJSON();
    });

    if (data) {
        const userRef = await getDocs(collection(db, "users"));
        const docs = userRef.docs.find((doc) => doc.id === data.uid);
        console.log(doc);
        if (!docs) {
          const user = {
            uid: data.uid,
            email: data.email,
            name: data.displayName,
            createdAt: new Date(),
            age: "",
            gender: "",
            city: "",
            state: "",
            country: "",
            dob: "",
            mobile:"",
            avatar: data.photoURL,
          };
          await setDoc(doc(db, "users", data.uid), user);
          dispatch({
            type: FACEBOOK_AUTH_SUCCESS,
            payload: user.toJSON(),
          });
        } else {
          dispatch({
            type: FACEBOOK_AUTH_SUCCESS,
            payload: docs.data(),
          });
        }
    } else {
        console.log("No user found");
    }
  } catch (error) {
    dispatch({
      type: FACEBOOK_AUTH_FAIL,
      payload: error,
    });
    console.log(error);
  }
};

export const authWithGitHub = () => async (dispatch) => {
  try {
    dispatch({ type: GITHUB_AUTH_REQUEST });
    await signInWithPopup(auth, githubProvider).then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      dispatch({
        type: GITHUB_AUTH_SUCCESS,
        payload: user.toJSON(),
      });
    });
  } catch (error) {
    dispatch({
      type: GITHUB_AUTH_FAIL,
      payload: error,
    });
    console.log(error);
  }
};

export const loadUser = (user_uid) => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });
    // const data = auth.currentUser;
    //access the current user from database
    const userRef = await getDocs(collection(db, "users"));
    const docs = userRef.docs.find((doc) => doc.id === user_uid);
    if (docs) {
      // console.log(data.name);
      console.log(docs.data());
      dispatch({
        type: LOAD_USER_SUCCESS,
        payload: docs.data(),
      });
    } else {
      dispatch({
        type: LOAD_USER_FAIL,
        payload: "User not found",
      });
    }

    // dispatch({ type: LOAD_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({type: LOAD_USER_FAIL, payload: error});
    console.log(error);
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await signOut(auth).then(() => {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    });
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    dispatch({
      type: LOGOUT_FAIL,
      payload: errorMessage,
    });
  }
};

export const updateProfileData = (user, user_id) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });
    
    // const curr = auth.currentUser;
    await updateDoc(doc(db, "users", user_id), user);
    // console.log(curr);
    //check if data is updated
    const userRef = await getDocs(collection(db, "users"));
    const docs = userRef.docs.find((doc) => doc.id === user_id);
    if (docs) {
      // await updateProfile(auth.currentUser, {
      //   displayName: user.name, photoURL: user.avatar, email: user.email
      // });
      dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: docs.data() });
    } else {
      dispatch({ type: UPDATE_PROFILE_FAIL, payload: "Error updating profile" });
    }
    // dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({ type: UPDATE_PROFILE_FAIL, payload: error });
    console.log(error);
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
