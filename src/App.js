import React, { useState } from "react";
import Welcome from "./components/Welcome";
import Video from "./components/Video";
import Result from "./components/Result";
import Collection from "./components/Collection";

export default function App() {
  const [screen, setScreen] = useState("welcome");

  const [points, setPoints] = useState(0);

  if (screen === "welcome") {
    return <Welcome onFinished={() => setScreen("video")} />;
  }
  if (screen === "video") {
    return (
      <Video
        points={points}
        setPoints={setPoints}
        onFinished={() => setScreen("result")}
      />
    );
  }
  if (screen === "result") {
    return (
      <Result points={points} onFinished={() => setScreen("collection")} />
    );
  }
  if (screen === "collection") {
    return <Collection />;
  }
}
