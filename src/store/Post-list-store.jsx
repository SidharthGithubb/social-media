import {
  createContext,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";

export const PostListContext = createContext({
  postLists: [],
  fetching: false,
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

  const [fetching, setFetching] = useState(false);

  const addPost = useCallback(
    (newPost) => {
      const action = {
        type: "ADD_POST",
        payload: { newPost },
      };
      dispatch(action);
    },
    [dispatch],
  );

  const deletePost = useCallback(
    (postId) => {
      const action = {
        type: "DELETE_POST",
        payload: { postId },
      };
      dispatch(action);
    },
    [dispatch],
  );

  const initialPosts = useCallback(
    (posts) => {
      const action = {
        type: "INITIAL_POSTS",
        payload: { posts },
      };
      dispatch(action);
    },
    [dispatch],
  );

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        initialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostListContext.Provider
      value={{
        postLists,
        fetching,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
