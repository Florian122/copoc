import React, { useState } from "react";
import "../Styles.css";

export default function Result({ points, onFinished }) {
  const [position] = useState(() => {
    if (points > 0) {
      return "bpoc";
    } else if (points < 0) {
      return "cop";
    } else {
      return "neutral";
    }
  });

  const getMessage = () => {
    if (position === "neutral") {
      return (
        <>
          <p>
            ...das ist gut, denn es geht hier nicht darum Position zu beziehen,
            sondern beide Seiten zu verstehen und deren Problematik
            anzuerkennen.
          </p>
          <p>
            Allerdings ist es uns wichtig zu sagen, dass es unabdinglich sich in
            der Rassismusdebatte klar zu positionieren, eine neutrale Haltung
            bedeut dass du ein kack rassist bist.
          </p>
        </>
      );
    }
    if (position === "cop") {
      return (
        <>
          <p>
            ...mir ist es wichtig dir zu sagen, dass es hierbei nicht darum geht
            Position zu beziehen, sondern beide Seiten zu verstehen und deren
            Problematik anzuerkennen.
          </p>
          <p>
            Falls du dich noch mehr mit der Thematik (der Rolle des BPoC)
            Rassismus auseinander setzen möchtest, haben wir dir auf der
            nächsten Seite eine Sammlung zusammengestellt, die dir hilft das
            Problem besser zu verstehen und Meachnsimen aufzeigt, wie du daran
            arbeiten kannst.
          </p>
        </>
      );
    }
    if (position === "bpoc") {
      return (
        <>
          <p>
            ...das zeigt mir, dass du dich eventuell schon mit der Thematik
            auseinander gesetzt hast oder selber schon von Rassismus betroffen
            warst. Mir ist es wichtig dir zu sagen, dass es hierbei nicht darum
            geht Position zu beziehen, sondern beide Seiten zu verstehen und
            deren Problematik anzuerkennen.
          </p>
        </>
      );
    }
  };

  return (
    <div style={{}}>
      <h1 style={{ marginLeft: 64, marginTop: 64, width: "60%" }}>
        {position === "neutral"
          ? "Die Auswahl deiner Fragen deuten darauf hin, dass du neutral eingestellt bist.."
          : "Die Auswahl deiner Fragen deuten darauf hin, dass du dich eher in meine Lage versetzen kannst"}
      </h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flex: 2 }}>
          <img
            alt={position}
            style={{ marginLeft: 64 }}
            src={process.env.PUBLIC_URL + "/images/" + position + ".png"}
          />
        </div>
        <div style={{ flex: 2, overflowY: "auto" }}>
          {getMessage()}
          <button
            style={{ marginTop: 32, marginLeft: "40%" }}
            className="button"
            onClick={() => onFinished()}
          >
            Zur Sammlung
          </button>
        </div>
        <div style={{ flex: 1 }} />
      </div>
    </div>
  );
}
