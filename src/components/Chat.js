import Avatar from "../assets/chat-room.svg";

const Chat = ({ title, text }) => {
  return (
    <li className="chat">
      <img src={Avatar} alt="avatar-img" className="avatar-img" />
      <div className="chat-content">
        <h5 className="chta-title">{title}</h5>
        <p className="chat-text">{text}</p>
      </div>
    </li>
  );
};

export default Chat;
