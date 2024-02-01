import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
interface CustomError {
  status: number;
  data: {
    messge: string;
  };
}
export const userLoginRegister = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      // "https://api.dribbble.com/v2",
      "http://localhost:3000",
    prepareHeaders(headers) {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `${token}`);
        console.log("from redux, token set ", token);
      }
      headers.set("key", "data");
      return headers;
    },
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, any, {}>,

  endpoints(builder) {
    return {
      login: builder.mutation({
        query(body) {
          return {
            url: "/auth/logIn",
            method: "POST",
            body: body,
          };
        },
      }),
      generateOtp: builder.mutation({
        query(body) {
          return {
            url: "/auth/signup/otpG",
            method: "POST",
            body: body,
          };
        },
      }),
      verifyOtp: builder.mutation({
        query(body) {
          return {
            url: "/auth/signup/Otp_verify",
            method: "POST",
            body: body,
          };
        },
      }),
      signUp: builder.mutation({
        query(body) {
          return {
            url: "/auth/signup",
            method: "POST",
            body: body,
          };
        },
      }),
      getRoomsForHome: builder.query({
        query() {
          return {
            url: "/room/home",
            method: "GET",
          };
        },
      }),
      getAllRooms: builder.query({
        query() {
          return {
            url: "/room/all",
            method: "GET",
          };
        },
      }),
      makeComment: builder.mutation({
        query({ id, data }) {
          return {
            url: `/bookAuth/${id}`,
            method: "PUT",
            body: data,
          };
        },
      }),
      getUnitPost: builder.query({
        query({ id }) {
          return {
            url: `/book/${id}`,
            method: "GET",
          };
        },
      }),

      addBooks: builder.mutation({
        query(body) {
          return {
            url: "/bookAuth",
            method: "POST",
            body: body,
          };
        },
      }),
    };
  },
});

export const {
  useLoginMutation,
  useGenerateOtpMutation,
  useVerifyOtpMutation,
  useSignUpMutation,
  useGetRoomsForHomeQuery,
  useMakeCommentMutation,
  useGetUnitPostQuery,
  useAddBooksMutation,
  useGetAllRoomsQuery,
} = userLoginRegister;
