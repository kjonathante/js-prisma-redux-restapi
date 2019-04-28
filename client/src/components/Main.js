import React from "react";
import PropTypes from "prop-types";

import { SUCCESS } from "../redux/actions/ActionTypes";

// import MessagePage from "../components/MessagePage";
// import Repos from "../components/Repos";
// import NavBar from "../components/NavBar";
// import User from "./User";

function Main(props) {
  const { byIds, allIds, status } = props.messagesState;
  const { getMessages } = props;

  console.log( props.messagesState )

  return (
    <>
      {/* <NavBar getReposByUsername={getReposByUsername} /> */}
      <div>
        <button onClick={getMessages}>Hello</button>
        {status === SUCCESS ? (
          <>
            {/* <User repos={repos} /> */}
            {/* <Repos repos={repos} /> */}
            {allIds.map(id => (<p key={id}>{byIds[id].message}</p>))}
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
  getMessages: PropTypes.func
};

export default Main;