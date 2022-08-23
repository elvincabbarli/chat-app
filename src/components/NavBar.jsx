import React from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase";
import { updateDoc, doc } from "firebase/firestore";
import { signOut } from "firebase/auth";

const NavBar = () => {
  const handleSignOut = async () => {
    await updateDoc(db , 'users' , auth.currentUser.uid , {
      isOnline: false
    })
    await signOut(auth)
  }
  return (
    <nav>
      <h3>
        <Link to={"/"}>Messenger</Link>
      </h3>
      <div>
        {auth.currentUser ? (
          <>
            <Link to={"/profile"}>Profile</Link>
            <button className="btn" onClick={handleSignOut}>Log Out</button>
          </>
        ) : (
          <>
            <Link to={"/registr"}>Registr</Link>
            <Link to={"/login"}>Login</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
