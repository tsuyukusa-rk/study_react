import { combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import { store } from './store.jsx' ;
import * as actions from './actions.jsx';
import * as containerView from './views/container.jsx';

/*
* Connect to Redux
*/
function mapStateToProps(state) {
  return {
    value: state.value,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onClick(value) {
      dispatch(actions.send(value));
    },
  };
}
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(containerView.FormApp);

/*
* Rendering
*/
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.querySelector('.content')
);
