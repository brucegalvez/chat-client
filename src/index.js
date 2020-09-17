import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import GlobalStyle from "./styles";
import * as serviceWorker from "./serviceWorker";
import ConversationView from "./components/conversationView";
import MainDrawer from "./components/mainDrawer";

const View = styled.div`
  display: flex;
`;

const App = () => {
  const [conversations, setConversations] = useState(null);
  const [openConversation, setOpenConversation] = useState(null);
  const loggedInUser = "mnoriega";

  useEffect(() => {
    const getConversation = async () => {
      try {
        const dataRaw = await fetch(
          `http://${process.env.REACT_APP_SERVER_ENDPOINT}`,
          {
            method: "GET",
          }
        );
        const data = await dataRaw.json();
        console.log(process.env.REACT_APP_SERVER_ENDPOINT);
        setConversations(data);
      } catch (e) {
        console.log(e);
      }
    };
    getConversation();
  }, []);

  return (
    <View>
      <GlobalStyle />
      {conversations ? (
        <MainDrawer
          conversations={conversations}
          setOpenConversation={setOpenConversation}
        />
      ) : (
        ""
      )}
      {openConversation !== null ? (
        <ConversationView
          conversation={conversations[openConversation]}
          setOpenConversation={setOpenConversation}
          loggedInUser={loggedInUser}
        />
      ) : (
        ""
      )}
    </View>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
