import { useContext, useEffect, useState } from "react";
import { PostListContext } from "../store/Post-list-store";
import Post from "./Post";
import Spinner from "./Spinner";

const Postlists = () => {
  const { postLists, fetching } = useContext(PostListContext);

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
