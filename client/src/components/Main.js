import React, { useState } from "react";
import PropTypes from "prop-types";

import { SUCCESS } from "../redux/actions/ActionTypes";

import AddMessage from "../components/AddMessage"

// import MessagePage from "../components/MessagePage";
// import Repos from "../components/Repos";
// import NavBar from "../components/NavBar";
// import User from "./User";

function Main(props) {
  const [editId, setEditId] = useState("")
  const [input, setInput] = useState("")

  const { byIds, allIds, status } = props.messagesState;
  const { createMessage, deleteMessage, updateMessage } = props;

  console.log( props.messagesState )
  const editHandler = id => {
    setEditId(id)
    setInput(byIds[id].message)
  }
  const cancelHandler = () => {
    setEditId("")
    setInput("")
  }

  return (
    <>
      {/* <NavBar getReposByUsername={getReposByUsername} /> */}
      <div>
        <AddMessage createMessage={createMessage} />
        {status === SUCCESS ? (
          <>
            {/* <User repos={repos} /> */}
            {/* <Repos repos={repos} /> */}
            { allIds.map( id => (
                editId === id ? (
                  <p key={id}>
                    <input 
                      type="text" 
                      value={input} 
                      onChange={e => setInput(e.target.value)}
                    />
                    <button onClick={() => {
                      updateMessage({id, message: input})
                      setEditId("")
                      setInput("")    
                    }}>Ok</button>
                    <button onClick={cancelHandler}>Cancel</button>
                  </p>
                ) : (
                  <p 
                    key={id}
                    onClick={ ()=>editHandler(id) }
                  >
                    {byIds[id].message}
                    <button onClick={ ()=>deleteMessage(id) }>delete</button>
                  </p>
                )
            ))}
          </>
        ) : (
            <>
              {/* <MessagePage status={status} /> */}
              <p>{status}</p>
            </>
          )}
      </div>
    </>
  );
}

Main.propTypes = {
  messagesState: PropTypes.object,
  getMessages: PropTypes.func,
  createMessage: PropTypes.func,
  deleteMessage: PropTypes.func,
  updateMessage: PropTypes.func
};

export default Main;