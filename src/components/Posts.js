import React from "react";
import { useApiData } from "@/hooks";
import { formatListItems } from "@/utils";
import { Card } from "./Card";
import { List } from "./List";
import { Loader } from "./Loader";
import { Error } from "./Error";

export const Posts = ({ feedSlug, onClick }) => {
  const {
    data: posts,
    isLoading,
    error,
  } = useApiData({ endpoint: `/api/feeds/${feedSlug}/posts` });

  if (!feedSlug || posts.length === 0) {
    return <Card title="Posts">No content</Card>;
  }

  return (
    <Card title="Posts">
      <Loader isLoading={isLoading} />
      <Error message={error} />
      {!isLoading && !error && (
        <List items={formatListItems({ items: posts })} onClick={onClick} />
      )}
    </Card>
  );
};
