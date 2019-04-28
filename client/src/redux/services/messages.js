import fetch from "isomorphic-unfetch";

export const messagesServiceFunction = fetch => ({
  getMessages: async () =>
    fetch(`/messages`)
});

export default messagesServiceFunction(fetch);