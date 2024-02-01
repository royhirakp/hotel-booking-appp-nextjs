import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getBooksData = createApi({
  reducerPath: "getBook-api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://flturr.onrender.com/",
    prepareHeaders(headers) {
      headers.set("key", "data");
      return headers;
    },
  }),

  endpoints(builder) {
    return {
      login: builder.query({
        query(body) {
          return {
            url: "/book",
            method: "GET",
            body: body,
          };
        },
      }),
    };
  },
});

export const { useLoginQuery } = getBooksData;
