import { SUCCESS } from "../actions/ActionTypes";

const initialState = {
  status: null,
  allIds: [],
  byIds: {}
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    case SUCCESS: {
      const {byIds, allIds} = action.payload
      return { ...state, byIds, allIds, status: action.type };
    }
    default:
      return { ...state, status: action.type };
  }
}