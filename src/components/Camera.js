import React, { useRef, useEffect, useState } from "react";

import * as canvas from "canvas";
import * as faceapi from "face-api.js";

export default function Camera({ style, displaySize, onLoadingFinished }) {
  // vars
  let refreshCycles = 0;
  // state
  const [expressions] = useState([]);
  // refs
  const videoRef = useRef();
  const canvasRef = useRef();
  // functions
  function loadModels() {
    return Promise.all([
      faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ]);
  }
  async function refreshExpressions() {
    const result = await faceapi
      .detectAllFaces(videoRef.current)
      .withFaceLandmarks()
      .withFaceExpressions();
    if (!result[0]) {
      return;
    }
    const resizedResults = faceapi.resizeResults(result, displaySize);
    canvasRef.current
      .getContext("2d")
      .clearRect(0, 0, displaySize.width, displaySize.height);
    faceapi.draw.drawDetections(canvasRef.current, resizedResults);
    const minProbability = 0.05;
    faceapi.draw.drawFaceExpressions(
      canvasRef.current,
      resizedResults,
      minProbability
    );
    refreshCycles += 1;
    expressions.push(result[0].expressions);
  }
  async function init() {
    const { ImageData, HTMLVideoElement } = canvas;
    faceapi.env.monkeyPatch({
      Canvas: HTMLCanvasElement,
      Image: HTMLImageElement,
      ImageData: ImageData,
      Video: HTMLVideoElement,
      createCanvasElement: () => document.createElement("canvas"),
      createImageElement: () => document.createElement("img"),
    });
    loadModels().then(() => {
      setInterval(refreshExpressions, 250);
      onLoadingFinished();
    });
  }
  // init
  useEffect(() => {
    init();
    navigator.getUserMedia(
      { video: true },
      (stream) => {
        videoRef.current.srcObject = stream;
      },
      () => console.log("error")
    );
    faceapi.matchDimensions(canvasRef.current, displaySize);
  });
  return (
    <div style={style}>
      <video
        style={{}}
        width={displaySize.width}
        height={displaySize.height}
        ref={videoRef}
        autoPlay
      />
      <canvas style={{ left: 0, position: "absolute" }} ref={canvasRef} />
    </div>
  );
}
