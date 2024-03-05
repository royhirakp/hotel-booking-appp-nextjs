"use client";
import ForgetPassword from "@/component/forgetPassword/ForgetPassword";
import { useRouter } from "next/router";
export default function Page({ params }: { params: any }) {
  // const { token } = router.query;
  // console.log(params);
  return (
    <div>
      <ForgetPassword token={params?.token} />
    </div>
  );
}
