import React from "react";
import { Card } from "./Card";
import { List } from "./List";
import { formatListItems } from "@/utils";
import { useApiData } from "@/hooks";
import { Loader } from "./Loader";
import { Error } from "./Error";

export const Feeds = ({ onClick, onDataLoad }) => {
  const {
    data: feeds,
    isLoading,
    error,
  } = useApiData({
    endpoint: "/api/users/:slug/feeds",
    pathParams: {
      slug: "my-slug",
    },
    onDataLoad,
  });

  if (!feeds.length) {
    return <Card title="Feeds">No content</Card>;
  }

  return (
    <Card title="Feeds">
      <Loader isLoading={isLoading} />
      <Error message={error} />
      {!isLoading && !error && (
        <List items={formatListItems({ items: feeds })} onClick={onClick} />
      )}
    </Card>
  );
};
