import MainNavigation from "../components/MainNavigation";
import PageContent from "./PageContent";
import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
  let error = useRouteError();
  let status = error.status;
  if (status === 500) {
    status = error.data.message;
  } else if (status === 404) {
    status = "page not found ";
  }
  let title = "hey something worng apperaed here ";
  let message = "something phissy";

  return (
    <>
      <MainNavigation></MainNavigation>
      <PageContent title={title} message={message}></PageContent>
    </>
  );
}
