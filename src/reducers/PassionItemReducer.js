import { FETCH_PASSION_ITEMS_SUCCESS, ADD_PASSION, SET_PASSION } from '../actions/types';

const INITIAL_STATE = {
  passionItems: {},
  passion: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PASSION_ITEMS_SUCCESS:
      return { passionItems: action.payload };
    case ADD_PASSION:
      return { ...state };
    case SET_PASSION:
      return { ...state, passion: action.payload };
    default:
      return state;
  }
};
