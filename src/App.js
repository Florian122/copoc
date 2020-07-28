import React, { useState } from "react";
import Welcome from "./components/Welcome";
import Video from "./components/Video";
import Result from "./components/Result";

export default function App() {
  const [screen, setScreen] = useState("welcome");

  const choices = [];

  if (screen === "welcome") {
    return <Welcome onFinished={() => setScreen("video")} />;
  }
  if (screen === "video") {
    return <Video choices={choices} onFinished={() => setScreen("result")} />;
  }
  if (screen === "result") {
    return <Result choices={choices} />;
  }
}