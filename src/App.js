import SignIn from "./components/SignIn";
import Header from "./components/Header";
import ChatList from "./components/ChatList";
import ChatRoom from "./components/ChatRoom";

import { auth } from "./firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user, loading] = useAuthState(auth);
  console.log(loading);
  // const [chatId, setChatId] = useState("");
  return (
    <>
      {user && <Header user={user} />}
      {!loading && (
        <div className="App">
          {user ? (
            <>
              <main className="main-container">
                <ChatList />
              </main>
              <section className="chat-room-section">
                <ChatRoom />
              </section>
            </>
          ) : (
            <SignIn />
          )}
        </div>
      )}
    </>
  );
}

export default App;
