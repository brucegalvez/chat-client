import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  height: 80px;
  padding-left: 30px;
  padding-right: 30px;
  cursor: pointer;
  &:hover {
    background: #f8f8fa;
  }
`;

const ProfilePicture = styled.img`
  margin-right: 10px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

const ParticipantsName = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: 500;
`;

const LastMessageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LastMessageContent = styled.p`
  font-family: "Roboto";
  font-weight: 300;
  letter-spacing: 0;
  font-size: 14px;
  color: #bab8cc;
  margin-right: 10px;
`;

const LastMessageDate = styled.p`
  text-transform: uppercase;
  color: #bab8cc;
  font-size: 12px;
  font-family: "Roboto";
  font-weight: 500;
`;

const ConversationMenuItem = ({ conversation, setOpenConversation }) => {
  return (
    <Wrapper onClick={() => setOpenConversation(conversation.id)}>
      <ProfilePicture
        src={
          conversation.participants[1].profileUrl
            ? conversation.participants[1].profileUrl
            : require(`../assets/account.png`)
        }
      />
      <ContentWrapper>
        <ParticipantsName>{conversation.participants[1].name}</ParticipantsName>
        <LastMessageWrapper>
          <LastMessageContent>
            {conversation.messages[0].content.substring(0, 37) + "..."}
          </LastMessageContent>
          <LastMessageDate>
            {new Date(conversation.messages[0].date).toLocaleDateString("es", {
              month: "short",
              day: "numeric",
            })}
          </LastMessageDate>
        </LastMessageWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ConversationMenuItem;
