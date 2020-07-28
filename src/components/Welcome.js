import React, { useRef, useEffect, useState } from "react";
import '../Styles.css';

export default function Welcome({onFinished}) {
  const [next, setNext] = useState(false);

  if (!next) {
    return (
      <div style={{ padding: 16 }}>
        <h1 style={{ width: "70%" }}>
          Herzlich willkommen auf unserer Webseite, bevor es losgeht, wollen wir
          dir noch ein paar Begriffe erklären:
        </h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 2 }} />
          <div style={{ flex: 2, overflowY: "auto" }}>
            <p>
              <b>PoC</b> = Person of Color;
              <br />
              ein selbstgewählter politischer Begriff für nichtweiße Menschen
            </p>
            <p>
              <b>BPoC</b> = Black Person of Color; <br />
              es ist wichtig schwarze Menschen explizit zu erwähnen, da sie
              aufgrund der weltweiten Kolonialisierungsgeschichte andere
              Rassimuserfahrungen machen als andere PoC.
            </p>
            <p>
              Bei den Begriffen <b>schwarz</b> und <b>weiß</b> geht es nicht um
              wirkliche Farben, sie stehen für soziale & politische Positionen,
              die von Rassismus erzeugt wurden.
            </p>
            <p>
              <b>Cop</b> = englisches, umgangssprachliches Wort für die Polizei
            </p>
            <p>
              <small>
                * In unseren Logo verwenden wir aus ästhtischen Gründen die
                Abkürzung PoC, damit wollen wir Rassismuserfahrungen von BPoC
                nicht verharmlosen.
              </small>
            </p>

            <button
              style={{marginLeft: "40%"}}
              className="button"
              onClick={() => setNext(true)}
            >
              Verstanden
            </button>
          </div>
          <div style={{ flex: 1 }} />
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ padding: 16 }}>
        <h1 style={{ width: "70%" }}>
          Du hast die Möglichkeit einen Polizisten und eine BPoC zu folgendem
          Vorfall zu befragen; dazu werden dir jeweils zwei Fragen vorgeschlagen
          aus denen du Eine wählen kannst.
        </h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 2 }} />
          <div style={{ flex: 2, overflowY: "auto" }}>
            <p>
              Ein junger Mann steigt nachts in einen Fernbus. Die Polizei führt
              eine Personenkontrolle in Zivil durch. Dafür setzt sie sich,
              getarnt als Passagier, mit in den Bus. Der junge Mann wird als
              erster kontrolliert. Zwei weitere Personen werden aufgeweckt und
              ebenfalls überprüft.
            </p>
            <p>
              Insgesamt werden in einem vollen Bus drei Personenkontrollen
              durchgeführt. Bei den kontrollierten Personen handelt es sich um
              BPoC, die restlichen Passagiere des Busses sind weiß.
            </p>
            <p>
              Als die Personen sich äußern, dass es sich bei der Kontrolle um
              Racial Profiling handelt, weist die Polizei diesen Vorwurf von
              sich.
            </p>

            <button
              style={{marginLeft: "40%"}}
              className="button"
              onClick={() => onFinished()}
            >
              Start
            </button>
          </div>
          <div style={{ flex: 1 }} />
        </div>
      </div>
    );
  }
}
