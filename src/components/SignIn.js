import firebase from "firebase/app";
import { auth } from "../firebase/config";

import chatGram from "../assets/chatgram-logo.svg";

export default function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div className="sign-in-wrapper">
      <img draggable="false" src={chatGram} className="app-logo home" />
      <button className="sign-in-btn" onClick={signInWithGoogle}>
        Sign In With Google
      </button>
    </div>
  );
}
