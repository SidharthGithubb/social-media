import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postLists: [],
  addPost: () => {},
  deletePost: () => {},
  initialPosts: () => {},
});
const postListReducer = (currentPostLists, action) => {
  let newPostLists = currentPostLists;
  if (action.type === "DELETE_POST") {
    newPostLists = currentPostLists.filter(
      (post) => post.id !== action.payload.postId,
    );
    return newPostLists;
  } else if (action.type === "ADD_POST") {
    newPostLists = [action.payload.newPost, ...currentPostLists];
    return newPostLists;
  } else if (action.type === "INITIAL_POSTS") {
    newPostLists = action.payload.posts;
    return newPostLists;
  } else {
    return currentPostLists;
  }
};
const PostListProvider = ({ children }) => {
  const [postLists, dispatch] = useReducer(postListReducer, []);

  const addPost = (newPost) => {
    console.log("new post", newPost);
    const action = {
      type: "ADD_POST",
      payload: { newPost },
    };
    dispatch(action);
  };

  const deletePost = (postId) => {
    const action = {
      type: "DELETE_POST",
      payload: { postId },
    };
    dispatch(action);
  };

  const initialPosts = (posts) => {
    const action = {
      type: "INITIAL_POSTS",
      payload: { posts },
    };
    dispatch(action);
  };
  return (
    <PostListContext.Provider
      value={{
        postLists,
        addPost,
        deletePost,
        initialPosts,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
