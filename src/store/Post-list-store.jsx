import React, { createContext, useContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = () => {};

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
    title: "Going to karnataka!!!!",
    body: "Enjoying in summer vacation",
    reactions: 2,
    userId: "user-23",
    tags: ["summer", "vacation", "enjoying"],
  },

  {
    id: "2",
    title: "Buy milk",
    body: "going to buy milk",
    reactions: 2,
    userId: "user-23",
    tags: ["milk", "buying"],
  },
];

export default PostListProvider;
