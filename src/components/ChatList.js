import { useEffect, useState } from "react";
import Chat from "./Chat";

// firestore collection call
import { firestore } from "../firebase/config";
const collection = firestore.collection("chatgram");

const ChatList = () => {
  const [chatRooms, setChatsRooms] = useState([
    { uid: 1, title: "Chat 1", text: "Subtext 1" },
    { id: 2, title: "Chat 2", text: "Subtext 2" },
    { id: 3, title: "Chat 3", text: "Subtext 3" },
    { id: 4, title: "Chat 4", text: "Subtext 4" },
    { id: 1, title: "Chat 1", text: "Subtext 1" },
    { id: 2, title: "Chat 2", text: "Subtext 2" },
    { id: 3, title: "Chat 3", text: "Subtext 3" },
    { id: 4, title: "Chat 4", text: "Subtext 4" },
    { id: 1, title: "Chat 1", text: "Subtext 1" },
    { id: 2, title: "Chat 2", text: "Subtext 2" },
    { id: 3, title: "Chat 3", text: "Subtext 3" },
    { id: 4, title: "Chat 4", text: "Subtext 4" },
  ]);
  // useEffect(() => {
  //   collection
  //     .doc("dKZ6Bv2n8QnRJwN5pSVF")
  //     .collection("room-1")
  //     .onSnapshot((snapshot) => {
  //       const fbData = [];
  //       snapshot.forEach((doc) => {
  //         fbData.push({ ...doc.data(), id: doc.id });
  //       });
  //       setChatsRooms(fbData);
  //     });
  // }, []);

  return (
    <ul className="chat-list">
      {chatRooms
        ? chatRooms.map((chatRoom) => (
            <Chat
              key={chatRoom.id}
              title={chatRoom.title}
              text={chatRoom.text}
            />
          ))
        : null}
    </ul>
  );
};

export default ChatList;
