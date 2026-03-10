import { useContext } from "react";
import { PostListContext } from "../store/Post-list-store";
import Post from "./Post";

const Postlists = () => {
  const { postLists } = useContext(PostListContext);
  return (
    <>
      {postLists.map((post) => {
        return <Post key={Math.random()} post={post} />;
      })}
    </>
  );
};
export default Postlists;
