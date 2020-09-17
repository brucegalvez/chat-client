import React from "react";
import styled from "styled-components";
import Icon from "../assets/icons/icon";
import ItemMessage from "./itemMessage";
import NewMessageBar from "./newMessageBar";

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #000425;
  height: 100vh;
`;

const GoBackBar = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  background: #5640ff;
  padding: 15px 0 15px 20px;
  color: white;
  & :nth-child(1) {
    cursor: pointer;
    margin-right: 10px;
  }
  svg {
    fill: #fff;
    height: 20px;
  }
`;

const ParticipantsBar = styled.div`
  z-index: 10;
  border: 2px solid #f8f8fa;
  display: flex;
  align-items: center;
  height: 88px;
  width: auto;
  padding-left: 30px;
`;

const ParticipantPic = styled.img`
  margin-right: 20px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
`;

const ParticipantName = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const MessagesArea = styled.div`
  overflow-y: scroll;
  flex-grow: 1;
  border: 2px solid #f8f8fa;
  padding: 0 5% 20px 10%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #000425;
  }
  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }
`;

const ConversationWindow = ({
  conversation,
  setOpenConversation,
  loggedInUser,
}) => {
  return (
    <Wrapper>
      <GoBackBar onClick={() => setOpenConversation(null)}>
        <Icon name="LeftArrow" />
        Volver
      </GoBackBar>
      <ParticipantsBar>
        <ParticipantPic src="https://picsum.photos/100/100" alt="" />
        <div>
          <ParticipantName>{conversation.participants[1].name}</ParticipantName>
          <p>Front-End</p>
        </div>
      </ParticipantsBar>
      <MessagesArea>
        {conversation.messages.map(({ sender, content, date }, index) => (
          <ItemMessage
            key={index}
            content={content}
            isSender={sender === loggedInUser}
            date={index === 0 ? date : ""}
          />
        ))}
      </MessagesArea>
      <NewMessageBar sendMessage={console.log} />
    </Wrapper>
  );
};

export default ConversationWindow;
