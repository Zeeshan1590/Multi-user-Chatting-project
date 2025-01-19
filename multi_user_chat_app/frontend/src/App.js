//import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import ChatBox from "./components/ChatBox";

const socket = io("http://localhost:5000");

const App = () => {
  return (
    <div>
      <h1>Multi-User Chat Application</h1>
      <ChatBox socket={socket} />
    </div>
  );
};

export default App;
