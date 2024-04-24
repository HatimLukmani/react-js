import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";
export default function EditEventPage() {
  let data = useRouteLoaderData("fetching-events");
  let event = data.event;
  return <EventForm event={event} method="PATCH"></EventForm>;
}
