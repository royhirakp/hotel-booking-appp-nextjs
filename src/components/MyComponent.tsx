"use client";
import React from "react";
import { useSignUpMutation } from "@/lib/apiRequest/LoginRegister";
const MyComponent = () => {
  const [Singup, { isLoading, isError }] = useSignUpMutation();

  return (
    <div>
      MyComponent
      <button
        onClick={async () => {
          const res = await Singup({
            email: "royhirakp@gmail.com",
            password: "apappapaH22@Jjj",
          });

          console.log("red===", res);
        }}
      >
        ckiiiiiii
      </button>
    </div>
  );
};

export default MyComponent;
