import { posts } from "../data";

export default function handler(req, res) {
  const post = req.query.slug
    ? posts.filter(({ slug }) => req.query.slug === slug)
    : null;

  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404);
  }
}
