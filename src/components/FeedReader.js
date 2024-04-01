import React, { useCallback, useState } from "react";
import { Posts } from "./Posts";
import { Feeds } from "./Feeds";
import { PostContent } from "./PostContent";

const FeedContent = ({ feedSlug }) => {
  const [selectedPostSlug, setSelectedPostSlug] = useState("");

  const handleChange = useCallback((posts) => {
    setSelectedPostSlug(posts[0]?.slug);
  }, []);

  return (
    <>
      <div className="secondry-col">
        <Posts
          feedSlug={feedSlug}
          onClick={(post) => {
            setSelectedPostSlug(post?.id);
          }}
          onChange={handleChange}
        />
      </div>
      <div className="content-col">
        <PostContent slug={selectedPostSlug} />
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
          onDataLoad={(feeds) => {
            if (feeds[0]) {
              setSelectedFeed({
                id: feeds[0].slug,
                label: feeds[0].title,
              });
            }
          }}
        />
      </div>
      <FeedContent feedSlug={selectedFeed?.id} />
    </div>
  );
};
