import { posts } from "../../data";

const postsByFeed = {
  "feed-1": [posts[0], posts[1]],
  "feed-2": [posts[2], posts[3], posts[4]],
  "feed-3": [posts[5]],
  "feed-4": [posts[2], posts[1], posts[6]],
  "feed-5": [posts[3], posts[0]],
  "feed-6": [],
};

export default function handler(req, res) {
  const posts = req.query.slug ? postsByFeed[req.query.slug] : [];
  res.status(200).json(posts);
}
