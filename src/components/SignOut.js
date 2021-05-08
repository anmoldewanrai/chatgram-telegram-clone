import { auth } from "../firebase/config";
import signOut from "../assets/sign-out.svg";

export default function SignOut() {
  return (
    auth.currentUser && (
      <img
        src={signOut}
        alt="signout icon"
        className="sign-out-btn"
        onClick={() => auth.signOut()}
      />
    )
  );
}
