import React from "react";

const ListItem = ({ id, label, onClick }) => {
  return (
    <li className="list-item">
      <button onClick={onClick}>{label}</button>
    </li>
  );
};

export const List = ({ items, onClick }) => {
  if (items.length) {
    return (
      <ul className="list">
        {items.map((item) => (
          <ListItem key={item.id} onClick={onClick} {...item} />
        ))}
      </ul>
    );
  }
};
