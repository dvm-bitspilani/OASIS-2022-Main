import { useRouteError } from "react-router-dom";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";

export default function ErrorPage() {
  const error = useRouteError();
  document.title = "ERROR"

  const trailProps = {
    lineDuration: 15,
    lineWidthStart: 10,
    strokeColor: "#EBB935",
    lag: 0,
  };

  return (
    <main
      style={{
        fontFamily: "Mulish",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
      }}
      id="error-page"
    >
      <div style={{ zIndex: 1000 }}>
        <MouseTrail {...trailProps} />
      </div>
      <h2>OOPS!</h2>
      <span style={{ color: "red" }}>Sorry, this is under development.</span>
      <i>{error.statusText || error.message}</i>
    </main>
  );
}
