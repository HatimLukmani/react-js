import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
// import { useRouteLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  // let fetchData = useRouteLoaderData("event-details");
  let fetchData = useLoaderData();
  let event = fetchData.events;
  return (
    <>
      <h1>hey</h1>
      <EventsList events={event} />
    </>
  );
}

export default EventsPage;
