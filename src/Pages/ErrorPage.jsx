import { useRouteError } from "react-router-dom";
import { MouseTrail } from "../Components/MouseTrail";

export default function ErrorPage() {
  const error = useRouteError();
  document.title = "Archive page unavailable — Oasis 2022"

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
      <p style={{ color: "#ead28f" }}>{error.status === 404 ? "This archive page does not exist." : "This archive page could not be opened."}</p>
      <a href="/" style={{ color: "#fcd776" }}>Return to Oasis 2022</a>
    </main>
  );
}
