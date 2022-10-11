import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    // Get All Data
    getAllPost: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),
    // Get Single Post
    getSinglePost: builder.query({
      query: (id) => {
        console.log("ID", id);
        return {
          url: `posts/${id}`,
          method: "GET",
        };
      },
    }),
    // get Data by limit
    getPostByLimit: builder.query({
      query: (num) => {
        console.log("ID", num);
        return {
          url: `posts?_limit=${num}`,
          method: "GET",
        };
      },
    }),
    // For delete data
    deletePost: builder.mutation({
      query: (id) => {
        console.log(id);
        return {
          url: `posts/${id}`,
          method: "DELETE",
        };
      },
    }),
    // Add Data
    addPost: builder.mutation({
      query: (body) => {
        console.log("body", body);
        return {
          url: `posts`,
          method: "POST",
          body: body,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
    // Update Data
    editPost: builder.mutation({
      query: (body) => {
        const { id, ...data } = body;
        console.log("Edit ID=>", id);
        console.log("EditedData", data);
        return {
          url: `posts/${id}`,
          method: "PUT",
          body: data,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetSinglePostQuery,
  useGetPostByLimitQuery,
  useDeletePostMutation,
  useAddPostMutation,
  useEditPostMutation,
} = postApi;
