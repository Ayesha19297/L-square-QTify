import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import "./App.css";
import NavBar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Section from "./Components/Section";

function App() {
  const endpoint = "https://qtify-backend-labs.crio.do/";
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    axios.get(`${endpoint}albums/top`).then(({ data }) => {
      console.log(data);
      setTopAlbums(data);
    });
    axios.get(`${endpoint}albums/new`).then(({ data }) => {
      setNewAlbums(data);
    });
  }, []);

  return (
    <>
      <NavBar />
      <HeroSection />
      <Section title="Top albums" data={topAlbums} />
      <Section title="New albums" data={newAlbums} />
    </>
  );
}

export default App;
