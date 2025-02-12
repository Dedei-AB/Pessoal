import React from "react";
import Main from "./main";
import { Link } from "react-router-dom";
import SingleItem from "./SingleItem";

const ItemList = ({ title, itens, itensArray, path, idPath }) => {
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title}</h2>
        <Link to={path}>Mostrar tudo</Link>
      </div>
      <div className="item-list__container">
        {itensArray
          .filter((currrentValue, index) => index < itens)
          .map((currObj, index) => (
            <SingleItem
              idPath={idPath}
              {...currObj}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
