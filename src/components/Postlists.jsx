import { useContext, useEffect, useState } from "react";
import { PostListContext } from "../store/Post-list-store";
import Post from "./Post";
import Spinner from "./Spinner";

const Postlists = () => {
  const { postLists, initialPosts } = useContext(PostListContext);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        initialPosts(data.posts);
        setFetching(false);
      });
  }, []);

  return (
    <>
      {fetching && <Spinner />}
      {!fetching &&
        postLists.map((post) => {
          return <Post key={Math.random()} post={post} />;
        })}
    </>
  );
};
export default Postlists;
