import messagesService from "../services/messages";
import {
  REQUEST,
  EMPTY,
  SUCCESS,
  NOT_FOUND,
  ERROR
} from "./ActionTypes";

const receiveMessages = (messages) => {
  let allIds = []
  let byIds = {}
  messages.forEach( message => {
    allIds[allIds.length]= message.id
    byIds[message.id] = { message: message.message }
  })
  return {
    type: SUCCESS,
    payload: {
      byIds,
      allIds
    }
  }
}

export const getMessages = async (dispatch, messagesService) => {
  //Set the applications to a "Loading" state
  dispatch({ type: REQUEST });

  try {
    const response = await messagesService.getMessages()

    if (!response.ok) {
      const error = {response}
      throw error
    }

    const messages = await response.json();
    const isMessagesEmpty = messages.length === 0;
    if (isMessagesEmpty) dispatch({ type: EMPTY });
    else dispatch( receiveMessages(messages) );
  } catch (error) {
    const isError404 = error.response && error.response.status === 404;
    if (isError404) dispatch({ type: NOT_FOUND });
    else dispatch({ type: ERROR });
  }
};

export const getMessagesInjector = dispatch => {
  return () => {
    getMessages(dispatch, messagesService);
  };
};