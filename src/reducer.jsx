/*
* reducer
*/
import * as actions from './actions.jsx';
export function formReducer(state, action) {
  switch (action.type) {
    case actions.SEND:
      return Object.assign({}, state, {
        value: action.value,
      });
    default:
      return state;
  }
};
