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
  else if (action.type === "ADD_POST"){
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    // console.log(`${userId} ${postTitle} ${postBody} ${reactions} ${tags}`)
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      }
    })
  };

  const deletePost = (postId) => {
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
      "id": "1",
      "title": "Exploring the Beaches of Bali",
      "body": "Spent an incredible week exploring the pristine beaches of Bali. Crystal-clear waters, golden sands, and breathtaking sunsets every evening. Can't wait to go back!",
      "reactions": 124,
      "userId": "user-123",
      "tags": ["Bali", "beach", "travel"]
    },
    {
      "id": "2",
      "title": "Hiking Adventures in the Swiss Alps",
      "body": "Just returned from an exhilarating hiking trip in the Swiss Alps. The views from the top were absolutely stunning, with snow-capped peaks as far as the eye could see. Feeling accomplished!",
      "reactions": 89,
      "userId": "user-456",
      "tags": ["Swiss Alps", "hiking", "adventure"]
    },  
];

export default PostListProvider;
