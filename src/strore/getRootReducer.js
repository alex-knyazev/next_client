import { combineReducers } from 'redux';
import teaFilter from './reducers/teaFilter';

export default function getReducer() {
  return combineReducers({
    page,
    teaFilter,
  });
}

const initPageState = {
  language: 'rus',
};

function page(state = initPageState) {
  return state;
}
