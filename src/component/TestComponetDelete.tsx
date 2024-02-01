import React from "react";
import { useSignUpMutation } from "@/redux/apiRequest/LoginRegister";

const TestComponetDelete = () => {
  const [Singup, { isLoading, isError }] = useSignUpMutation();

  return (
    <div>
      <div>
        MyCom
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
    </div>
  );
};

export default TestComponetDelete;
