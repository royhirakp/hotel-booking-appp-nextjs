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
      // "http://localhost:3000/api/v1",
      "https://hotailbooking-nestjs-api.onrender.com/api/v1",
    prepareHeaders(headers) {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `${token}`);
        // console.log("from redux, token set ", token);
      }
      headers.set("key", "data");
      return headers;
    },
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, any, {}>,

  endpoints(builder) {
    return {
      //login**********************************************************************************************
      login: builder.mutation({
        query(body) {
          return {
            url: "/auth/logIn",
            method: "POST",
            body: body,
          };
        },
      }),
      googleLogin: builder.mutation({
        query(body) {
          return {
            url: "/auth/google_login",
            method: "POST",
            body: body,
          };
        },
      }),
      //singuo******************************************************************************************************
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

      //FORGET PASSWORD**********************************************************

      forgetPasswordEmailGeneration: builder.mutation({
        query(body) {
          return {
            url: "/auth/forget_password_send_mail_with_token",
            method: "POST",
            body: body,
          };
        },
      }),

      forgetPassword: builder.mutation({
        query({ token, data }) {
          return {
            url: `/auth/forget_password/${token}`,
            method: "POST",
            body: data,
          };
        },
      }),

      //RESET PASSWORD******************************************************************
      otp_Generation_forResetPassword: builder.mutation({
        query(body) {
          return {
            url: "/auth/reset_password_otpGeneration",
            method: "POST",
            body: body,
          };
        },
      }),
      ResetPassword: builder.mutation({
        query(body) {
          return {
            url: "/auth/reset_password_verification",
            method: "POST",
            body: body,
          };
        },
      }),

      //rooms apiii
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
      getUnitRoom: builder.query({
        query({ id }) {
          // console.log("request comming", id);
          return {
            url: `/room/unit/${id}`,
            method: "GET",
          };
        },
      }),

      bookRoom: builder.mutation({
        query(body) {
          return {
            url: "/room/bookroom",
            method: "POST",
            body: body,
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
  useGoogleLoginMutation,
  useGenerateOtpMutation,
  useVerifyOtpMutation,
  useSignUpMutation,
  useGetRoomsForHomeQuery,
  useMakeCommentMutation,
  useGetUnitRoomQuery,
  useAddBooksMutation,
  useGetAllRoomsQuery,
  useBookRoomMutation,
  useForgetPasswordEmailGenerationMutation,
  useForgetPasswordMutation,
  useOtp_Generation_forResetPasswordMutation,
  useResetPasswordMutation,
} = userLoginRegister;
