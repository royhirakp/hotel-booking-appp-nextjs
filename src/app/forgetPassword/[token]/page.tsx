import ForgetPassword from "@/component/forgetPassword/ForgetPassword";

export default function Page({ params }: { params: any }) {
  return (
    <div>
      <ForgetPassword token={params?.token} />
    </div>
  );
}
