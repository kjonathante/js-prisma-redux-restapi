import { connect } from "react-redux";

import { getMessagesInjector, createMessageInjector } from "../redux/actions/messages";
import Main from "../components/Main";

const mapStateToProps = state => ({
  messagesState: state.messages
});

const mapDispatchToProps = dispatch => ({
  getMessages: getMessagesInjector(dispatch),
  createMessage: createMessageInjector(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

