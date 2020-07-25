import React, { useRef, useEffect, useState } from "react";
import Camera from "./components/Camera";

export default function App() {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.addEventListener(
      "ended",
      () => {
        console.log("test");
      },
      false
    );
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "#333333",
      }}
    >
      <video
        style={{
          position: "absolute",
          minHeight: "80%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        ref={videoRef}
      />
      <Camera
        style={{ position: "absolute", left: "0%", top: 75 }}
        displaySize={{ width: 200, height: 150 }}
        onLoadingFinished={() => {
          videoRef.current.play();
        }}
      />
      <button
        style={{
          position: "absolute",
          minWidth: "50%",
          left: 0,
          minHeight: "20%",
          bottom: -128,
        }}
        onClick={() => {
          videoRef.current.src = "/videos/test1.mp4";
          videoRef.current.play();
        }}
        type="button"
        title="test1"
      >
        TEST 1
      </button>
      <button
        style={{
          position: "absolute",
          minWidth: "50%",
          minHeight: "20%",
          left: "50%",
          bottom: -128,
        }}
        onClick={() => {
          videoRef.current.src = "/videos/test2.mp4";
          videoRef.current.play();
        }}
        type="button"
      >
        TEST 2
      </button>
    </div>
  );
}
