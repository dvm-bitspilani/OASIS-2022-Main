import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

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
      <h2>OOPS!</h2>
      <span styl style={{ color: "red" }}>
        Sorry, an unexpected error has occurred.
      </span>
      <i>{error.statusText || error.message}</i>
    </main>
  );
}
