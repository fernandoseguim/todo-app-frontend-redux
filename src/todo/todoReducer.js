import {
  TODO_INITIAL_STATE,
  DESCRIPTION_CHANGED,
  GET_TODO_LIST,
  ADD_TODO_ITEM
} from '../constants';

export default (state = TODO_INITIAL_STATE, action) => {
  switch (action.type) {
    case DESCRIPTION_CHANGED:
      return { ...state, description: action.payload };

    case GET_TODO_LIST:
      return { ...state, list: action.payload.data };

    case ADD_TODO_ITEM:
      return { ...state, description: '' };

    default:
      return state;
  }
};
