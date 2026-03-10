import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postLists: [],
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currentPostLists, action) => {
  let newPostLists = currentPostLists;
  if (action.type === "DELETE_POST") {
    newPostLists = currentPostLists.filter(
      (post) => post.id !== action.payload.postId,
    );
    return newPostLists;
  }
  return currentPostLists;
};
const PostListProvider = ({ children }) => {
  const [postLists, dispatch] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = () => {
    //dispatch();
  };

  const deletePost = (postId) => {
    const action = {
      type: "DELETE_POST",
      payload: { postId },
    };
    dispatch(action);
  };
  return (
    <PostListContext.Provider
      value={{
        postLists,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "His mother had always taught him",
    body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    tags: ["history", "american", "crime"],
    reactions: {
      likes: 192,
      dislikes: 25,
    },
    views: 305,
    userId: 121,
  },
  {
    id: 2,
    title: "His mother had always taught him",
    body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    tags: ["history", "american", "crime"],
    reactions: {
      likes: 192,
      dislikes: 25,
    },
    views: 305,
    userId: 121,
  },
];
export default PostListProvider;
