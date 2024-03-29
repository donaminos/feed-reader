import React from "react";
import { Card } from "./Card";
import { List } from "./List";

const items = [
  {
    id: "1",
    label: "Item 1",
  },
  {
    id: "2",
    label: "Item 2",
  },
];

export const Feeds = () => {
  return (
    <Card title="Feeds">
      <List items={items} />
    </Card>
  );
};
