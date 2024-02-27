"use client";

const colorBagroundEffectStyle: any = {
  position: "absolute",
  width: "20rem",
  height: "20rem",
  background: "rgba(25,205,255,0.522)",
  filter: "blur(100px)",
  borderRadius: "15px",
  top: "160px",
};
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    // <ThemeProvidor>
    <div
      style={{
        position: "relative",
        overflowX: "clip",
        // height: "100vh",
      }}
    >
      {children}
      <div style={colorBagroundEffectStyle} />
    </div>
    // </ThemeProvidor>
  );
}
