import { FETCH_PASSION_ITEMS_SUCCESS, ADD_PASSION, SET_PASSION } from './types';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

export const fetchPassions = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/passions`)
    .on('value', snapshot => {
      dispatch({ type: FETCH_PASSION_ITEMS_SUCCESS, payload: snapshot.val()});
    });
  };
};

export const addPassion = ({ passion }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/passions`)
    .push({ passion })
    .then(() => {
      dispatch({ type: ADD_PASSION, payload: passion });
    });
  };
};

export const setPassion = ( passion ) => {
  return (dispatch) => {
    dispatch({type: SET_PASSION, payload: passion});

    Actions.passionView({ passion });
  }
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};
