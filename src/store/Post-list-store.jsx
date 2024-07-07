import React, { createContext, useContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = (postId) => {
    // console.log(`delete post called for ${postId}`);
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Lorem, ipsum dolor.",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi totam nam veritatis vero culpa laboriosam ducimus, nostrum aut omnis ea.",
    reactions: 2,
    userId: "user-23",
    tags: ["summer", "vacation", "enjoying"],
  },

  {
    id: "2",
    title: "Lorem ipsum dolor sit.",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rem fuga esse assumenda. Dignissimos dolorum, commodi porro odio, iste tenetur nisi ad veritatis ratione asperiores obcaecati temporibus earum dicta praesentium? ",
    reactions: 10,
    userId: "user-23",
    tags: ["milk", "buying"],
  },
  {
    id: "3",
    title: "Lorem ipsum dolor sit.",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rem fuga esse assumenda. Dignissimos dolorum, commodi porro odio, iste tenetur nisi ad veritatis ratione asperiores obcaecati temporibus earum dicta praesentium? ",
    reactions: 100,
    userId: "user-23",
    tags: ["milk", "buying"],
  },
  {
    id: "4",
    title: "Lorem ipsum dolor sit.",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rem fuga esse assumenda. Dignissimos dolorum, commodi porro odio, iste tenetur nisi ad veritatis ratione asperiores obcaecati temporibus earum dicta praesentium? ",
    reactions: 0,
    userId: "user-23",
    tags: ["milk", "buying"],
  },
  
];

export default PostListProvider;
