import React, { useState } from "react";
import { Posts } from "./Posts";
import { Feeds } from "./Feeds";
import { PostContent } from "./PostContent";

const FeedContent = ({ feedSlug }) => {
  const [selectedPost, setSelectedPost] = useState("");

  return (
    <>
      <div className="secondry-col">
        <Posts
          feedSlug={feedSlug}
          onClick={(post) => {
            setSelectedPost(post);
          }}
        />
      </div>
      <div className="content-col">
        <PostContent slug={selectedPost?.id} />
      </div>
    </>
  );
};

export const FeedReader = () => {
  const [selectedFeed, setSelectedFeed] = useState("");

  return (
    <div className="feed-reader-container">
      <div className="main-col">
        <Feeds
          onClick={(feed) => {
            setSelectedFeed(feed);
          }}
        />
      </div>
      <FeedContent feedSlug={selectedFeed?.id} />
    </div>
  );
};
