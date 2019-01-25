import { combineReducers } from 'redux';

export default function getReducer() {
  return combineReducers({
    page,
  });
}

const initPageState = {
  language: 'rus',
};

function page(state = initPageState) {
  return state;
}
