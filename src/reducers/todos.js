import * as actionTypes from '../constants/actionTypes';

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
];

export default function (state = initialState, action) {
  switch(action.type) {
    case(actionTypes.ADD_TODO): {
      return [
        ...state,
        {
          text: action.text,
          id: state.length,
          completed: false
        }
      ];
    }
    default:
      return state;
  }
}
