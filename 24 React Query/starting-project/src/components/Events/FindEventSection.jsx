import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import fetchEvents from "../../util/http";
import LoadingIndicator from "../UI/LoadingIndicator";
import ErrorBlock from "../UI/ErrorBlock";
import EventItem from "./EventItem";
export default function FindEventSection() {
  const searchElement = useRef();
  let [searchTerm, setSearchTerm] = useState();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["events", { search: searchTerm }],
    queryFn: ({ signal }) => fetchEvents({ signal, searchTerm }),
    enabled: searchTerm !== undefined,
  });
  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(searchElement.current.value);
  }
  let content = "Search for your relevant ";
  if (isLoading) {
    content = <LoadingIndicator></LoadingIndicator>;
  }
  if (isError) {
    content = (
      <ErrorBlock
        title={"An error occurd"}
        message={
          "Something wrong occured while searching for your specific search events"
        }
      ></ErrorBlock>
    );
  }
  if (data) {
    content = (
      <ul className="events-list">
        {data.map((events) => (
          <li>
            <EventItem event={events}></EventItem>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}
