import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { List } from "./List";
import { formatListItems } from "@/utils";

export const Feeds = () => {
  const [feeds, setFeeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setError("");

    const fetchFeeds = async () => {
      try {
        const res = await fetch("/api/users/my-slug/feeds");
        const data = await res.json();
        setFeeds(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeeds();
  }, []);

  return (
    <Card title="Feeds">
      {isLoading && <span>Loading...</span>}
      {error && <span>{error}</span>}
      {!isLoading && !error && (
        <List items={formatListItems({ items: feeds })} />
      )}
    </Card>
  );
};
