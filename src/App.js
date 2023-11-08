import React, { useState } from "react";
import InitialScreen from "./pages/InitialScreen";
import ChatView from "./pages/ChatView";

function App() {
  const [user, setUser] = useState(null);

  const handleUserSubmit = (firstName, lastName) => {
    setUser({ firstName, lastName });
  };

  return (
    <div>
      {user ? (
        <ChatView user={user} />
      ) : (
        <InitialScreen onSubmit={handleUserSubmit} />
      )}
    </div>
  );
}

export default App;
