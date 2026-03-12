import { useContext, useRef } from "react";
import { PostListContext } from "../store/Post-list-store";

const Createpost = ({ setSelectedTab }) => {
  const { addPost } = useContext(PostListContext);
  const userIdRef = useRef();
  const titleRef = useRef();
  const bodyRef = useRef();
  const likesRef = useRef();
  const dislikesRef = useRef();
  const tagsRef = useRef();

  const handlePostSubmit = (event) => {
    event.preventDefault();
    const userId = userIdRef.current.value;
    const title = titleRef.current.value;
    const body = bodyRef.current.value;
    const likes = likesRef.current.value;
    const dislikes = dislikesRef.current.value;
    const tags = tagsRef.current.value.split(" ");
    const newPost = {
      userId,
      title,
      body,
      reactions: { likes: likes, dislikes: dislikes },
      tags,
    };
    addPost(newPost);
    userIdRef.current.value = "";
    titleRef.current.value = "";
    bodyRef.current.value = "";
    likesRef.current.value = "";
    dislikesRef.current.value = "";
    tagsRef.current.value = "";
    setSelectedTab("Home");
  };

  return (
    <form className="create-post" onSubmit={handlePostSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Enter your user id here"
          ref={userIdRef}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="postTitle"
          placeholder="How are you feeling today"
          ref={titleRef}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows={4}
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
          ref={bodyRef}
        />
      </div>
      <div className="mb-3">
        <span>
          <label htmlFor="likes" className="form-label">
            Number of Likes
          </label>
          <input
            type="text"
            className="form-control"
            id="likes"
            placeholder="How many people like this post"
            ref={likesRef}
          />
        </span>
        <span>
          <label htmlFor="dislikes" className="form-label">
            Number of dislikes
          </label>
          <input
            type="text"
            className="form-control"
            id="dislikes"
            placeholder="How many people dislike this post"
            ref={dislikesRef}
          />
        </span>
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Enter tags separated by spaces"
          ref={tagsRef}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default Createpost;
