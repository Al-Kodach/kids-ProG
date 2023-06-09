import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops</h1>
      <p>
        The page you'er trying to react cannot be found</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to='/'>Go Home</Link>
    </div>
  );
}
