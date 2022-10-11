import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  useDeletePostMutation,
  useGetAllPostQuery,
  useGetPostByLimitQuery,
  useGetSinglePostQuery,
  useAddPostMutation,
  useEditPostMutation,
} from "./services/post";

function App() {
  // const { data, isLoading, isError, isSuccess } = useGetAllPostQuery();
  // const limt = useGetPostByLimitQuery(5);
  // const getSinglePost = useGetSinglePostQuery(1);
  // const [deletePost, respo] = useDeletePostMutation();
  // const [createPost, response] = useAddPostMutation();
  // console.log(response);
  //  const data = {
  //    id: 101,
  //    title: "foo",
  //    body: "bar",
  //    userId: 1,
  //  };

  const [editPost, responseUpdatePost] = useEditPostMutation();
  console.log(responseUpdatePost);

  const updateData = {
    id: 1,
    title: "fodfdfdo",
    body: "bafdfdfr",
    userId: 1,
  };

  return (
    <>
      <h1 className="text-xl text-center">Data</h1>
      {/* {data?.map((post, i) => (
        <div key={i}>
          <h2>
            {post.id}
            {post.title}
          </h2>
          <p>{post.body}</p>
          <hr />
        </div>
      ))} */}
      {/* <button
        onClick={() => {
          deletePost(2);
        }}
      >
        delete
      </button> */}
      {/* <button
        onClick={() => {
          createPost(data);
        }}
      >
        Create Data
      </button> */}
      <button
        onClick={() => {
          editPost(updateData);
        }}
      >
        Edit Data
      </button>
    </>
  );
}

export default App;
