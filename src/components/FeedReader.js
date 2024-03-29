import React from "react";
import { Posts } from "./Posts";
import { Feeds } from "./Feeds";
import { PostContent } from "./PostContent";

export const FeedReader = () => {
  return (
    <div className="feed-reader-container">
      <div className="main-col">
        <Feeds />
      </div>
      <div className="secondry-col">
        <Posts />
      </div>
      <div className="content-col">
        <PostContent />
      </div>
    </div>
  );
};
