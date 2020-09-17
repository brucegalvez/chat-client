import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../assets/icons/icon";

const Wrapper = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  background: #5640ff;
  padding: 10px;
  & :nth-child(1) {
    margin-right: 10px;
  }
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  padding-left: 15px;
  border-radius: 15px;
  color: white;
  height: 30px;
  width: 100%;
  cursor: text;
  margin-right: 10px;
`;

const TextBoxInput = styled.input`
  outline: none;
  border: 0;
  width: 100%;
  cursor: text;
  & :active,
  :focus {
    outline: none;
  }
`;

const Button = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  svg {
    fill: #fff;
    height: 20px;
  }
`;

const NewMessageBar = ({ sendMessage }) => {
  const [newMessage, setNewMessage] = useState("");
  const handleKeyDown = ({ key }) => {
    if (key === "Enter") sendMessage(newMessage);
  };
  return (
    <Wrapper>
      <TextBox>
        <TextBoxInput
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
      </TextBox>
      <Button onClick={() => sendMessage(newMessage)}>
        <Icon name="Send" />
      </Button>
    </Wrapper>
  );
};

export default NewMessageBar;
