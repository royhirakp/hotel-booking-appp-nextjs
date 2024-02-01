import RoomDynamicPage from "@/component/RoutePages/RoomDynamicPage/RoomDynamicPage";

export default function Page({ params }: { params: any }) {
  // console.log("params", params);
  return (
    <div>
      <RoomDynamicPage id={params.id} />
    </div>
  );
}
