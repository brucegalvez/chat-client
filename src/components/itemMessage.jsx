import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  align-self: ${({ isSender }) => (isSender ? "flex-start" : "flex-end")};
`;

const Content = styled.div`
  max-width: 277px;
  width: auto;
  line-height: 130%;
  margin-bottom: 2px;
  padding: 10px;
  border-radius: 25px;
  font-size: 14px;
  font-family: "Roboto";
  background: ${({ isSender }) => (isSender ? "#f8f8fa" : "#8e80ff")};
  color: ${({ isSender }) => (isSender ? "auto" : "white")};
`;
const MessageDate = styled.p`
  margin-top: 10px;
  font-family: "Roboto";
  color: #bab8cc;
  text-transform: uppercase;
`;

const ItemMessage = ({ content, isSender, date }) => {
  return (
    <Wrapper isSender={isSender}>
      <Content isSender={isSender}>{content}</Content>
      {date ? (
        <MessageDate>
          {new Date(date).toLocaleDateString("es", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </MessageDate>
      ) : (
        ""
      )}
    </Wrapper>
  );
};

export default ItemMessage;
