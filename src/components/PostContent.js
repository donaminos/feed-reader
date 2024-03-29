import React from "react";
import { Card } from "./Card";
import { useApiData } from "@/hooks";
import { Loader } from "./Loader";
import { Error } from "./Error";

export const PostContent = ({ slug }) => {
  const {
    data: [post],
    isLoading,
    error,
  } = useApiData({ endpoint: `/api/posts/${slug}` });

  if (!slug || !post) {
    return <Card title="Post content">No content</Card>;
  }

  return (
    <Card title="Post content">
      <Loader isLoading={isLoading} />
      <Error message={error} />
      <p>{post.content}</p>
    </Card>
  );
};
