import React, { useState, useEffect } from "react";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import userData from "./user.json";

function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    if (isAuthenticated && user) {
      const currentUser = userData.find(
        (userData) => userData.email === user.email
      );
      if (currentUser) {
        setUserRole(currentUser.role);
      }
    } else {
      setUserRole(null);
    }
  }, [isAuthenticated, user]);

  console.log("current user", user);

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Authentication Application</h1>
        {isAuthenticated && (
          <h3>
            Hello, {user.name} <br></br>
            <br></br>
            This Dashboard for {userRole}
          </h3>
        )}
        {isAuthenticated ? (
          <button onClick={() => logout()}>Logout</button>
        ) : (
          <button onClick={() => loginWithRedirect()}>Login</button>
        )}
      </header>
    </div>
  );
}

export default App;
