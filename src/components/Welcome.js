import React, { useRef, useEffect, useState } from "react";
import "../Styles.css";

export default function Welcome({ onFinished }) {
  const [next, setNext] = useState(false);

  if (!next) {
    return (
      <div>
        <h1
          style={{
            marginLeft: 64,
            marginTop: 64,
            width: "70%",
          }}
        >
          Herzlich willkommen auf unserer Webseite!
          <br />
          Bevor es losgeht, wollen wir dir noch ein
          <br />
          paar Begriffe erklären:
        </h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 3 }} />
          <div style={{ flex: 4, overflowY: "auto" }}>
            <p>
              <b>PoC</b> (People of Color), ein selbstgewählter politischer
              Begriff für nicht-weiße Menschen mit Rassismuserfahrungen
            </p>
            <p>
              <b>BPoC*</b> (Black People of Color), weist explizit auf Schwarze
              Menschen hin, da sie aufgrund der weltweiten
              Kolonialisierungsgeschichte andere Rassismuserfahrungen machen als
              PoC.
            </p>
            <p>
              Bei den Begriffen <b>schwarz</b> und <b>weiß</b> geht es nicht um
              wirkliche Farben, sie stehen für soziale & politische Positionen,
              die von Rassismus erzeugt wurden und werden.
            </p>
            <p>
              <b>Cop**</b>, englisches, umgangssprachliches Wort für die
              Polizei.
            </p>
            <p>
              <small>
                * In unserem Logo verwenden wir aus gestalterischen Gründen die
                Abkürzung PoC. Damit wollen wir Rassismuserfahrungen von BPoC
                nicht verharmlosen.
              </small>
            </p>
            <p>
              <small>
                ** Cop wird im amerikanischen Raum teilweise als Beleidigung
                verwendet, das soll hier ausdrücklich nicht der Fall sein.
                Sondern ist auf den gestalterischen Ansatz zurückzuführen.
              </small>
            </p>

            <button
              style={{ marginTop: 32, marginLeft: "40%" }}
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
      <div>
        <h1 style={{ marginLeft: 64, marginTop: 64, width: "70%" }}>
          Du hast die Möglichkeit einen Polizisten und <br />
          eine BPoC zu folgendem Vorfall zu befragen.
        </h1>
        <h1 style={{ marginLeft: 64, width: "70%" }}>
          Dazu werden dir jeweils zwei Fragen vorgeschlagen.
          <br /> Du kannst eine von beiden auswählen.
        </h1>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 3 }} />
          <div style={{ flex: 4, overflowY: "auto" }}>
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
            <br />
            <p>
              Timon, 28, ist in Köln geboren und aufgewachsen. Er hat schon
              zahlreiche Rassismuserfahrungen machen müssen. Diese gingen
              teilweise auch von der Polizei aus. Er steht hier stellvertretend
              für die Rolle der BPoC und wird den Fall aus seiner Perspektive
              beurteilen.
            </p>
            <p>
              Leon, 31, ist seit 10 Jahren im Dienst und hat sich viel mit
              strukturellem und institutionellem Rassismus auseinandergesetzt.
              Er steht hier stellvertretend für die Polizei und wird den Fall
              aus seiner Perspektive beurteilen.
            </p>

            <button
              style={{ marginTop: 32, marginBottom: 32, marginLeft: "40%" }}
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
