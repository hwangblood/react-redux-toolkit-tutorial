import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:3500" }),
  endpoints: (builder) => ({
    getTodos: builder.query({ query: () => "/todos" }),
  }),
});

export const { useGetTodosQuery } = apiSlice;
