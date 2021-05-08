import firebase from "firebase/app";
import { auth, firestore } from "../firebase/config";

import SearchBar from "./SearchBar";
import createRoom from "../assets/create-room.svg";
import signOut from "../assets/sign-out-new.svg";
import chatGram from "../assets/chatgram-logo.svg";
import { useState } from "react";

const db = firestore.collection("chatgram");
export default function Header() {
  let roomName = "";
  const createNewRoom = async (e) => {
    e.preventDefault();
    roomName = prompt("Enter New Room Name");

    // db.add({
    //   title: roomName,
    //   createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    // }).then(() => {});
  };
  return (
    <header>
      <section className="appbar">
        {auth.currentUser && (
          <>
            <img draggable="false" src={chatGram} className="app-logo" />
            <div className="header-btn-wrapper">
              <img
                draggable="false"
                src={createRoom}
                alt="signout icon"
                className="header-btn create-room"
                onClick={createNewRoom}
              />
              <img
                draggable="false"
                src={signOut}
                alt="signout icon"
                className="header-btn sign-out-btn"
                onClick={() => auth.signOut()}
              />
            </div>
            {/* <h3 className="app-name">ChatGram</h3> */}
          </>
        )}
      </section>
      <section className="search-and-chat-detail">
        <SearchBar />
        <section className="reciever-section">
          <div>
            <h3 className="reciever-name">Room Name</h3>
            <p className="status">people</p>
          </div>
        </section>
      </section>
    </header>
  );
}
