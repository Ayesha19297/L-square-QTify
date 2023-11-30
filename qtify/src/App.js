import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import "./App.css";
import NavBar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Section from "./Components/Section";
import FilterSection from "./Components/FilterSection";
import Faq from "./Components/Accordian";

function App() {
  const endpoint = "https://qtify-backend-labs.crio.do/";
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);

  useEffect(() => {
    axios.get(`${endpoint}albums/top`).then(({ data }) => {
      //console.log(data);
      setTopAlbums(data);
    });
    axios.get(`${endpoint}albums/new`).then(({ data }) => {
      setNewAlbums(data);
    });
    axios.get(`${endpoint}songs`).then(({ data }) => {
      setSongs(data);
      setFilteredSongs(data);
    });
    axios.get(`${endpoint}genres`).then((res) => {
      setGenres([{ key: "all", label: "All" }, ...res.data.data]);
    });
  }, []);

  return (
    <>
      <NavBar />
      <HeroSection />
      <Section btnId="ta" title="Top albums" data={topAlbums} />
      <Section btnId="na" title="New albums" data={newAlbums} />
      <FilterSection
        btnId="s"
        title="songs"
        data={filteredSongs}
        filters={genres}
        executeFilter={(genre) => {
          if (genre === "all") {
            setFilteredSongs(songs);
          } else {
            setFilteredSongs(songs.filter((song) => song.genre.key === genre));
          }
        }}
      />
      <Faq />
    </>
  );
}

export default App;
