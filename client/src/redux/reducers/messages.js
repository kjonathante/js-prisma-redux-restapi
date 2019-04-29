import { SUCCESS, ADD } from "../actions/ActionTypes";

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
    case ADD: {
      const { id, message } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            message
          }
        },
        status: SUCCESS
      };
    }
    default:
      return { ...state, status: action.type };
  }
}