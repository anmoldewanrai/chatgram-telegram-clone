import { auth } from "../firebase/config";

const Message = ({ message }) => {
  const { uid, content, id, photoURL } = message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "recieved";

  return (
    <li key={id} className={`message ${messageClass}`}>
      <img src={photoURL} alt="user-icon" className="user-icon" />
      <p>{content}</p>
    </li>
  );
};

export default Message;
