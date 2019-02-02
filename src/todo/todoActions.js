import axios from 'axios';
import {
  DESCRIPTION_CHANGED,
  GET_TODO_LIST,
  ADD_TODO_ITEM
} from '../constants';

const URL = 'http://localhost:23003/api/todos';

export const changeDescription = event => ({
  type: DESCRIPTION_CHANGED,
  payload: event.target.value
});

export const getTodoList = () => {
  const request = axios.get(`${URL}?sort=-createdAt`);
  return {
    type: GET_TODO_LIST,
    payload: request
  };
};

export const addTodoItem = description => {
  return dispatch => {
    axios
      .post(URL, { description })
      .then(response =>
        dispatch({
          type: ADD_TODO_ITEM,
          payload: response.data
        })
      )
      .then(response => dispatch(getTodoList()));
  };
};
