import React, { useRef, useEffect, useState } from "react";
import "../Styles.css";

export default function Result({ onFinished }) {
  const [screen, setScreen] = useState("result");

  if (screen === "result") {
    return (
      <div style={{ padding: 16 }}>
        <h1 style={{ width: "70%" }}>
          Die Auswahl deiner Fragen deuten darauf hin, dass du dich eher in
          meine Lage versetzen kannst
        </h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 2 }} />
          <div style={{ flex: 2, overflowY: "auto" }}>
            <p>
              ...mir ist es wichtig dir zu sagen, dass es hierbei nicht darum
              geht Position zu beziehen, sondern beide Seiten zu verstehen und
              deren Problematik anzuerkennen.
            </p>
            <p>
              Falls du dich noch mehr mit der Thematik (der Rolle des BPoC)
              Rassismus auseinander setzen möchtest, haben wir dir auf der
              nächsten Seite eine Sammlung zusammengestellt, die dir hilft das
              Problem besser zu verstehen und Meachnsimen aufzeigt, wie du daran
              arbeiten kannst.
            </p>
            <button
              style={{ marginLeft: "40%" }}
              className="button"
              onClick={() => setScreen("end")}
            >
              alles klar!
            </button>
          </div>
          <div style={{ flex: 1 }} />
        </div>
      </div>
    );
  }
  if (screen === "end") {
    return (
      <div style={{ padding: 16 }}>
        <h1 style={{ width: "70%" }}>
          Vielen Dank fürs Zuhören. Unsere Linkliste steht dir jederzeit,
          kostenfrei zur Verfügung bla bla
        </h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 2 }} />
          <div style={{ flex: 2, overflowY: "auto" }}>
            <p>
              Faccatem fugia earum everferis aut rerferibus aut vendionseque por
              magnam corrorere exped mo exped quiducim andae nullest emporatis
              incta nam reruntiis di ad quas escipsam harcidus non cum quos atem
              adio molupta volupta ssitaspid molupta noneceatem et estibus
              aperrum alit, volore pre, que num quia que si nihilit que nus mo
              il eos acepel ipsandu scillaut ommolor eriberestia nonet harchil
              eum ere ma quo volupta venda nonsed quame volori offic te omni as
              proria alia sent re quam et, sus, odiscil intiosae iur? Ratestium
              est facerfe rorerferest, occullitis a non parum, cus earchicid
              est, sum quaeptatium non placcatus cum, occust ant. Occae
              soluptaquiae simenim enisqui conserum reruntore explant asiminimus
              moluptat. Udam quia nihicimus. Aquis estem que etur, cone a nat.
            </p>
          </div>
          <div style={{ flex: 1 }} />
        </div>
        <button
          style={{
            position: "absolute",
            border: "none",
            backgroundColor: "white",
          }}
          className="question"
          onClick={() => setScreen("contact")}
        >
          Kontakt
        </button>
      </div>
    );
  }
  if (screen === "contact") {
    return (
      <div style={{ padding: 16 }}>
        <h1 style={{ width: "70%" }}>Kontakt</h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 2 }} />
          <div style={{ flex: 2, overflowY: "auto" }}>
            <p>
              Faccatem fugia earum everferis aut rerferibus aut vendionseque por
              magnam corrorere exped mo exped quiducim andae nullest emporatis
              incta nam reruntiis di ad quas escipsam harcidus non cum quos atem
              adio molupta volupta ssitaspid molupta noneceatem et estibus
              aperrum alit, volore pre, que num quia que si nihilit que nus mo
              il eos acepel ipsandu scillaut ommolor eriberestia nonet harchil
              eum ere ma quo volupta venda nonsed quame volori offic te omni as
              proria alia sent re quam et, sus, odiscil intiosae iur? Ratestium
              est facerfe rorerferest, occullitis a non parum, cus earchicid
              est, sum quaeptatium non placcatus cum, occust ant.
            </p>
          </div>
          <div style={{ flex: 1 }} />
        </div>
      </div>
    );
  }
}
