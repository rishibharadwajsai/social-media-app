import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import { useState } from "react";
import Loading from "./Loading";

function PostList() {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

      return () => {
        console.log("clearing");
        controller.abort();
      }
  }, []);

  return (
    <>
      {fetching && <Loading/>}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;
