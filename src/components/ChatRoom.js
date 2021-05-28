import { useState } from "react";
import firebase from "firebase/app";
import { auth, firestore } from "../firebase/config";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Message from "./Message";

const ChatRoom = () => {
  // const dummy = useRef();
  const [formValue, setFormValue] = useState("");

  const messageRef = firestore.collection("ankit");
  const query = messageRef.orderBy("createdAt").limit(25);

  const [messages, loading, error] = useCollectionData(query, {
    idField: "id",
  });

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messageRef.add({
      content: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    // dummy.current.scrollIntoView({ behaviour: "smooth" }); //auto scroll to bottom messages
  };

  return (
    <div className="chat-room">
      {messages ? (
        <div className="messages">
          <ul className="message-list">
            {messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
            {/* <div ref={dummy}></div> */}
          </ul>
          <form onSubmit={sendMessage} className="send-msg-form">
            <input
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              type="text"
              className="msg-input"
              placeholder="Write a message..."
            />
          </form>
        </div>
      ) : (
        <div className="loading-wrapper">
          <p className="select-chat loading">Loading ...</p>
        </div>
      )}
    </div>
  );
};

export default ChatRoom;
