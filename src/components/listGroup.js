import React from "react";

const ListGroup = ({ genres, onItemSelect, selectedGenre }) => {
  const list = genres.map((item) => (
    <li
      onClick={() => onItemSelect(item)}
      key={item}
      className={
        item === selectedGenre ? "list-group-item active" : "list-group-item"
      }
    >
      {item}
    </li>
  ));
  return (
    <ul className="list-group">
      <li
        onClick={() => onItemSelect("")}
        className={
          "" === selectedGenre ? "list-group-item active" : "list-group-item"
        }
      >
        All Movies
      </li>
      {list}
    </ul>
  );
};

export default ListGroup;
