import React, { useRef, useState } from "react";
import "../Styles.css";
import Questions from "../Questions.json";

const videoWidth = 720;
const videoHeight = 405;

export default function Video({ choices, onFinished }) {
  const leftVideo = useRef();
  const rightVideo = useRef();

  const [progress, setProgress] = useState(0);

  const [questionType, setQuestionType] = useState("single");

  const videoFinished = (currentProgress) => {
    if (currentProgress === 13) {
      onFinished();
      return;
    }
    if (Questions[currentProgress].type === "none") {
      handleNext(0);
    }
    setQuestionType(Questions[currentProgress].type);
  };

  const handleNext = (choice) => {
    console.log(Questions[progress].videoSrc);
    choices.push(choice);

    if (progress === 0) {
      leftVideo.current.play();
    } else if (Questions[progress].video === "left") {
      leftVideo.current.src =
        process.env.PUBLIC_URL + Questions[progress].videoSrc;
      leftVideo.current.play();
    } else if (Questions[progress].video === "right") {
      rightVideo.current.src =
        process.env.PUBLIC_URL + Questions[progress].videoSrc;
      rightVideo.current.play();
    }

    setQuestionType("none");
    if (Questions[progress].video === "none") {
      videoFinished(progress + 1);
    }
    setProgress(progress + 1);
  };

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
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: videoWidth - 50,
              paddingTop: 16,
            }}
          >
            {Questions[progress].video === "left" ? (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <button
                  style={{
                    border: "none",
                    backgroundColor: "#fcfbf9",
                    padding: 8,
                  }}
                  className="question"
                  onClick={() =>
                    handleNext(Questions[progress].content[0].points)
                  }
                >
                  {Questions[progress].content[0].text}
                </button>
                <button
                  style={{
                    padding: 8,
                    border: "none",
                    backgroundColor: "#fcfbf9",
                  }}
                  className="question"
                  onClick={() =>
                    handleNext(Questions[progress].content[1].points)
                  }
                >
                  {Questions[progress].content[1].text}
                </button>
              </div>
            ) : null}
          </div>
          <div
            style={{
              width: 100,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1>COP</h1>
          </div>
          <div
            style={{
              width: videoWidth - 50,
              paddingTop: 16,
            }}
          >
            {Questions[progress].video === "right" ? (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <button
                  style={{
                    padding: 8,
                    border: "none",
                    backgroundColor: "#fcfbf9",
                  }}
                  className="question"
                  onClick={() =>
                    handleNext(Questions[progress].content[0].points)
                  }
                >
                  {Questions[progress].content[0].text}
                </button>
                <button
                  style={{
                    padding: 8,
                    border: "none",
                    backgroundColor: "#fcfbf9",
                  }}
                  className="question"
                  onClick={() =>
                    handleNext(Questions[progress].content[1].points)
                  }
                >
                  {Questions[progress].content[1].text}
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
            paddingTop: 16,
          }}
        >
          <button
            style={{ padding: 8, border: "none", backgroundColor: "#fcfbf9" }}
            className="question"
            onClick={() => handleNext(Questions[progress].content[1].points)}
          >
            {Questions[progress].content[1].text}
          </button>
          <button
            style={{ padding: 8, border: "none", backgroundColor: "#fcfbf9" }}
            className="question"
            onClick={() => handleNext(Questions[progress].content[2].points)}
          >
            {Questions[progress].content[2].text}
          </button>
          <button
            style={{ padding: 8, border: "none", backgroundColor: "#fcfbf9" }}
            className="question"
            onClick={() => handleNext(Questions[progress].content[3].points)}
          >
            {Questions[progress].content[3].text}
          </button>
        </div>
      );
    }
  };

  return (
    <div style={{ marginTop: 32 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 16,
        }}
      >
        {questionType === "both" ? (
          <div
            style={{
              position: "absolute",
              backgroundColor: "rgba(0,0,0,0.5)",
              width: videoWidth * 2,
              height: videoHeight,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              style={{ textAlign: "center", color: "white", width: videoWidth }}
            >
              {Questions[progress].content[0].text}
            </h1>
          </div>
        ) : null}
        {questionType === "none" && false ? (
          <div
            style={{
              position: "absolute",
              backgroundColor: "rgba(0,0,0,0.5)",
              width: videoWidth,
              height: videoHeight,
              left: Questions[progress].video === "left" ? 0 : "50%",
              top: 32,
            }}
          />
        ) : null}
        <video
          controls
          src={process.env.PUBLIC_URL + "/videos/BPOC_Szene1.mp4"}
          onEnded={() => videoFinished(progress)}
          style={{
            width: videoWidth,
            height: videoHeight,
          }}
          ref={leftVideo}
        />
        <video
          controls
          src={process.env.PUBLIC_URL + "/videos/COP_Szene1.mp4"}
          onEnded={() => videoFinished(progress)}
          style={{
            width: videoWidth,
            height: videoHeight,
          }}
          ref={rightVideo}
        />
      </div>
      {renderFooter()}
    </div>
  );
}
