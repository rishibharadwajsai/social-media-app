import { useContext, useRef } from "react";
import { PostList } from "../store/Post-list-store";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const viewsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const views = viewsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    viewsElement.current.value = "";
    tagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        views: views,
        userId: userId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((resObj) => {
        addPost(resObj);
        navigate("/");
      });
  };

  return (
    <form id="post-form" className="m-4 create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label fw-semibold">
          Enter your user Id
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control border border-secondary"
          id="userId"
          placeholder="Your user Id"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label fw-semibold">
          Enter the title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control border border-secondary"
          id="title"
          placeholder="How are you feeling today....."
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label fw-semibold">
          Enter the content
        </label>
        <textarea
          rows={4}
          ref={postBodyElement}
          type="text"
          className="form-control border border-secondary"
          id="body"
          placeholder="Tell us more about it"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="views" className="form-label fw-semibold">
          Number of views
        </label>
        <input
          type="text"
          ref={viewsElement}
          className="form-control border border-secondary"
          id="views"
          placeholder="How many people viewed this"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label fw-semibold">
          Enter your hashtags
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control border border-secondary"
          id="tags"
          placeholder="Please enter tags using space"
          required
        />
      </div>
      <div>
        <button type="submit" className="btn btn-primary border-dark">
          Post
        </button>
      </div>
    </form>
  );
}

export default CreatePost;
