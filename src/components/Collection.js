import React, { useState } from "react";
import "../Styles.css";

const books = [
  {
    title: "„Eure Heimat ist unser Albtraum“",
    author: "Fatma Aydemir, Hengameh Yaghoobifarah",
    link:
      "https://www.ullstein-buchverlage.de/nc/buch/details/eure-heimat-ist-unser-albtraum-9783961010363.html",
  },
  {
    title: "„Black Lives Matter. Eine Geschichte vom Überleben”",
    author: "Patrisse Khan-Cullors und Asha Bandele",
    link:
      "https://www.kiwi-verlag.de/buch/patrisse-khan-cullors-asha-bandele-blacklivesmatter-9783462001297",
  },
  {
    title: "„Wir müssen über Rassismus sprechen“",
    author: "Robin DiAngelo",
    link:
      "http://www.hoffmann-und-campe.de/buch-info/wir-muessen-ueber-rassismus-sprechen-buch-12230/",
  },
  {
    title: "„Warum ich nicht länger mit Weißen über Hautfarbe rede”",
    author: "Eddo Lodge",
    link:
      "https://www.perlentaucher.de/buch/reni-eddo-lodge/warum-ich-nicht-laenger-mit-weissen-ueber-hautfarbe-spreche.html",
  },
];

const movies = [
  {
    title: "„13th“",
    author: "Ava Duvaney",
    link: "Verfügbar auf: NETFLIX",
  },
  {
    title: "„BlacKkKlansman“",
    author: "Spike Lee",
    link: "Verfügbar auf: AmazonPrime",
  },
  {
    title: "„Speak Up“",
    author: "Amandine Gay",
    link: "Verfügbar kostenpflichtig auf: AmazonPrime",
  },
  {
    title: "„La Haine (Hass)“",
    author: "Mathieu Kassovitz",
    link: "Verfügbar kostenpflichtig auf: AmazonPrime",
  },
  {
    title: "„12 Years a Slave“",
    author: "Steve McQueen",
    link: "Verfügbar auf: NETFLIX",
  },
  {
    title: "„Selma“",
    author: "Ava DuVernay",
    link: "Verfügbar auf: AmazonPrime",
  },
  {
    title: "“Hidden Figures“",
    author: "Theodore Melf",
    link: "Verfügbar auf: NETFLIX",
  },
];

const podcasts = [
  {
    title: "„Exit Racism“",
    author: "Tupoka Ogette",
    link:
      "https://open.spotify.com/album/6LLl2tvQel0dJiTLQpTAUE?si=LFbujvmNS1yFF7aiAtbNBQ",
  },
  {
    title:
      "„Was weiße Menschen nicht über Rassismus hören wollen: aber wissen sollten“",
    author: "Alice Hasters",
    link:
      "https://open.spotify.com/album/0FhTAyG7izSGUi7x8xaPgm?si=1MkcyXiPTZCgEvk9l2-4Zg",
  },
  {
    title: "„Halbe Katoffl“",
    author: "Frank Joung",
    link:
      "https://open.spotify.com/show/1vbxMKkMTiNtRwH2hE5UPP?si=KOR3SAhlQ-SWmGtWx-H1bg",
  },
  {
    title: "Neue Normalität",
    author: "Gerald und Angelika Groß",
    link:
      "https://open.spotify.com/episode/7BHKPovDPPQpedgFVF4jw6?si=w9w-azfYQ0SiJc9ClJFv_g",
  },
];

export default function Collection({ points }) {
  return (
    <div style={{}}>
      <h1
        style={{
          position: "fixed",
          marginTop: 0,
          paddingLeft: 64,
          paddingTop: 64,
          width: "100%",
          backgroundColor: "#fcfbf9",
        }}
      >
        Danke fürs Zuhören!
        <br /> Hier findest du eine Sammlung rund um das Thema
        <br /> Rassismus und Racial Profiling.
      </h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flex: 2 }}></div>
        <div style={{ flex: 2, marginTop: "15%" }}>
          <h1>Bücher</h1>
          <br />
          {books.map((e) => {
            return (
              <div>
                <h2>{e.title}</h2>
                <p>{e.author}</p>
                <a href={e.link}>Hier klicken</a>
                <div
                  style={{ marginTop: 32, height: 1, backgroundColor: "black" }}
                />
              </div>
            );
          })}
          <h1>Filme</h1>
          <br />
          {movies.map((e) => {
            return (
              <div>
                <h2>{e.title}</h2>
                <p>{e.author}</p>
                <p>{e.link}</p>
                <div
                  style={{ marginTop: 32, height: 1, backgroundColor: "black" }}
                />
              </div>
            );
          })}
          <h1>Podcast</h1>
          <br />
          {podcasts.map((e) => {
            return (
              <div>
                <h2>{e.title}</h2>
                <p>{e.author}</p>
                <a href={e.link}>Hier klicken</a>
                <div
                  style={{ marginTop: 32, height: 1, backgroundColor: "black" }}
                />
              </div>
            );
          })}
        </div>
        <div style={{ flex: 1 }} />
      </div>
    </div>
  );
}
