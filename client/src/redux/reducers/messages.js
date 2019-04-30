import { SUCCESS, ADD, DELETE } from "../actions/ActionTypes";

const initialState = {
  status: null,
  allIds: [],
  byIds: {}
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    case SUCCESS: {
      const { byIds, allIds } = action.payload
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
    case DELETE: {
      const { id } = action.payload;
      const { allIds, byIds, ...noChild } = state;
      const newAllIds = allIds.filter(element => id !== element);
      const { [id]: removedValue, ...newByIds } = byIds;
      return { ...noChild, allIds: newAllIds, byIds: newByIds, status: SUCCESS };
    }
    default:
      return { ...state, status: action.type };
  }
}