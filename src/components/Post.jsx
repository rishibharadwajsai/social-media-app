import { useContext } from "react";
import "../routes/App.css";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/Post-list-store";
function Post({ post }) {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card m-4 post-card">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge p-2 bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key = {tag} className="badge me-1 rounded-pill text-bg-primary ">
            {tag}
          </span>
        ))}
        <div className="alert alert-success mt-2" role="alert">
          This post got {post.views} views
        </div>
      </div>
    </div>
  );
}

export default Post;
