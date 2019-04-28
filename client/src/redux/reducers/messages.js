import { SUCCESS } from "../actions/ActionTypes";

const initialState = {
  messages: [],
  status: null
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    case SUCCESS:
      return { ...state, messages: action.messages, status: action.type };
    default:
      return { ...state, status: action.type };
  }
}