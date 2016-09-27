/*
* store
*/

import { createStore } from 'redux';
import * as reducer from './reducer.jsx';

// 初期state変数（initialState）の作成
const initialState = {
  value: null,
};
// createStore（）メソッドを使ってStoreの作成
export const store = createStore(reducer.formReducer, initialState);
