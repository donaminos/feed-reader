
import { posts } from "../../data";

  
  export default function handler(req, res) {
    const post = req.slug ? posts.filter(({ slug}) => req.slug === slug): null;

    if(post) {
        res.status(200).json(posts);
    } else {
        res.status(400).json("NOT FOUND");
    }
  }
  