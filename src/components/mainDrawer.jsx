import React from "react";
import ConversationMenuItem from "./conversationMenuItem";

const MainDrawer = ({ conversations, setOpenConversation }) => {
  return (
    <div>
      {conversations.map((conversation, index) => (
        <ConversationMenuItem
          key={index}
          conversation={conversation}
          setOpenConversation={setOpenConversation}
        />
      ))}
    </div>
  );
};

export default MainDrawer;
