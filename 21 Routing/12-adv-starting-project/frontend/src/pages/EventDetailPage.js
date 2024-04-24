// import { useParams } from "react-router-dom";
import { useLoaderData, redirect } from "react-router-dom";
import EventsList from "../components/EventsList";
import EventItem from "../components/EventItem";
import { useRouteLoaderData } from "react-router-dom";

export default function EventDetailPage() {
  let data = useRouteLoaderData("fetching-events");

  return <EventItem event={data.event}></EventItem>;
  // return <h1>husdfhusdehuf</h1>;
}
export function action({ request, params }) {
  window.confirm("sure once again");
  let response = fetch("http://localhost:8080/" + params.eid, {
    method: "DELETE",
  });
  if (response.status === 522) {
    return response;
  }
  if (!response.ok) {
  }

  redirect("/events");
}
