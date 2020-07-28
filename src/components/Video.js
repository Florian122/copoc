import React, { useRef, useEffect, useState } from "react";
import "../Styles.css";
import Questions from "../Questions.json";

export default function Video({ choices, onFinished }) {
  const leftVideo = useRef();
  const rightVideo = useRef();

  const [progress, setProgress] = useState(8);
  const [selectedVideo, setSelectedVideo] = useState("none");

  const [questionType, setQuestionType] = useState("none");

  const videoFinished = (id) => {
    if (progress === 11) {
      onFinished();
      return;
    }
    console.log(id);
    setQuestionType(Questions[progress].type);
  };

  const handleNext = (choice) => {
    choices.push(choice);
    setProgress(progress + 1);
    setQuestionType("none");
    if (Questions[progress].video === "left") {
      leftVideo.current.src =
        process.env.PUBLIC_URL + Questions[progress].videoSrc;
      leftVideo.current.play();
    } else {
      rightVideo.current.src =
        process.env.PUBLIC_URL + Questions[progress].videoSrc;
      rightVideo.current.play();
    }
  };

  useEffect(() => {});

  const renderFooter = () => {
    if (questionType === "none") {
      return null;
    }
    if (questionType === "single") {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "40%",
              padding: 16,
            }}
          >
            {Questions[progress].video === "left" ? (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <button
                  style={{ border: "none", backgroundColor: "white" }}
                  className="question"
                  onClick={() => handleNext()}
                >
                  {Questions[progress].content[0]}
                </button>
                <button
                  style={{ border: "none", backgroundColor: "white" }}
                  className="question"
                  onClick={() => handleNext()}
                >
                  {Questions[progress].content[1]}
                </button>
              </div>
            ) : null}
          </div>
          <div
            style={{
              width: "20%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1>COP</h1>
          </div>
          <div
            style={{
              width: "40%",
              padding: 16,
            }}
          >
            {Questions[progress].video === "right" ? (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <button
                  style={{ border: "none", backgroundColor: "white" }}
                  className="question"
                  onClick={() => handleNext()}
                >
                  {Questions[progress].content[0]}
                </button>
                <button
                  style={{ border: "none", backgroundColor: "white" }}
                  className="question"
                  onClick={() => handleNext()}
                >
                  {Questions[progress].content[1]}
                </button>
              </div>
            ) : null}
          </div>
        </div>
      );
    } else {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <button
            style={{ border: "none", backgroundColor: "white" }}
            className="question"
            onClick={() => handleNext()}
          >
            {Questions[progress].content[1]}
          </button>
          <button
            style={{ border: "none", backgroundColor: "white" }}
            className="question"
            onClick={() => handleNext()}
          >
            {Questions[progress].content[2]}
          </button>
          <button
            style={{ border: "none", backgroundColor: "white" }}
            className="question"
            onClick={() => handleNext()}
          >
            {Questions[progress].content[3]}
          </button>
        </div>
      );
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: 16,
        }}
      >
        {questionType === "both" ? (
          <div
            style={{
              position: "absolute",
              backgroundColor: "rgba(0,0,0,0.5)",
              width: "100%",
              height: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ textAlign: "center", color: "white" }}>
              {Questions[progress].content[0]}
            </h1>
          </div>
        ) : null}
        {questionType === "none" && false ? (
          <div
            style={{
              position: "absolute",
              backgroundColor: "rgba(0,0,0,0.5)",
              width: "50%",
              height: "60%",
              left: Questions[progress].video === "left" ? 0 : "50%",
            }}
          />
        ) : null}

        <video
          src={process.env.PUBLIC_URL + "/videos/test1.mp4"}
          onEnded={() => videoFinished(0)}
          onClick={() => setSelectedVideo("left")}
          style={{
            width: selectedVideo === "left" ? "60%" : "50%",
          }}
          ref={leftVideo}
        />

        <video
          autoPlay
          src={process.env.PUBLIC_URL + "/videos/test1.mp4"}
          onEnded={() => videoFinished(1)}
          onClick={() => setSelectedVideo("right")}
          style={{
            width: selectedVideo === "right" ? "60%" : "50%",
          }}
          ref={rightVideo}
        />
      </div>
      {renderFooter()}
    </div>
  );
}
