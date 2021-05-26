import React, { useContext } from "react";
import { FirebaseAuth } from "../auth";
import { UserContext } from "../../contexts/user";

export const Dashboard = () => {
    const { user, logout } = useContext(UserContext);

  return (
    <div>
      Hello world
      {user && user.displayName
        ? <div>{JSON.stringify(user)}<button onClick={logout} style={{paddingLeft:'20px'}}>Sign out</button></div>
        : <FirebaseAuth />
      }
    </div>
  );
}