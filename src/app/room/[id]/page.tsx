import RoomDynamicPage from "@/component/RoutePages/RoomDynamicPage/RoomDynamicPage";

export default function Page({ params }: { params: any }) {
  return (
    <div>
      <RoomDynamicPage id={params.id} />
    </div>
  );
}
