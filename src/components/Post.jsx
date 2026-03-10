import { MdDelete } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { useContext } from "react";
import { PostListContext } from "../store/Post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);
  return (
    <div className="card" style={{ width: "28rem", margin: "20px 0 0 20px" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => {
              deletePost(post.id);
            }}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => {
          return (
            <span
              key={tag}
              className="badge text-bg-primary"
              style={{ margin: "2px" }}
            >
              {tag}
            </span>
          );
        })}
        <div style={{ marginTop: "10px" }}>
          <span style={{ marginRight: "10px" }}>
            <AiFillLike />
            {post.reactions.likes}
          </span>
          <span style={{ marginRight: "10px" }}>
            <AiFillDislike />
            {post.reactions.dislikes}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Post;
