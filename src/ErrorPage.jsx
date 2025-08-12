import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center my-20"
    >
      <h1 className="text-pink-500 text-5xl m-1">Oops!</h1>
      <p className="m-1 text-violet-500">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="m-1 text-red-500">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
