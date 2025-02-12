import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <h1>Artistar Populares</h1>
      <Link to={<Artists />}>Mostrar tudo</Link>
    </div>
  );
};

export default Main;
