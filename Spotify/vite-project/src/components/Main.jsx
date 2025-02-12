import React from "react";
import ItemList from "./ItemList.jsx";
import { artistArray } from "../assets/database/artists.js";
import { songsArray } from "../assets/database/songs.js";

const Main = () => {
  return (
    <div className="main">
      <ItemList
        title="Artistas"
        itens={5}
        itensArray={artistArray}
        path="/artists"
        idPath="/artist"
      />
      <ItemList
        title="Músicas"
        itens={20}
        itensArray={songsArray}
        path="/songs"
        idPath="/song"
      />
    </div>
  );
};

export default Main;
