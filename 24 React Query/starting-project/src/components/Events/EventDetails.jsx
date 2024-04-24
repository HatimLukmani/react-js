import { Link, Outlet, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import Header from "../Header.jsx";
import { fetchEvent, deleteEvent } from "../../util/http.jsx";
import { useParams } from "react-router-dom";
import { queryClient } from "../../util/http.jsx";
import { useState } from "react";
import Modal from "../UI/Modal.jsx";
export default function EventDetails() {
  let [startDeleting, setStartDeleting] = useState(false);
  function deleteStart() {
    setStartDeleting(true);
  }
  function deleteStop() {
    setStartDeleting(false);
  }
  let params = useParams();
  let navigate = useNavigate();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => {
      return fetchEvent({ id: params.id, signal });
    },
  });
  let { mutate, isPending: isPendingDelete } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });
      navigate("/events");
    },
  });
  function deleteHandeler() {
    console.log(params.id);
    mutate({ id: params.id });
  }
  console.log(isError);
  console.log("data", data);
  if (data) {
    return (
      <>
        {startDeleting && (
          <Modal>
            <h1>Are u sure ?/</h1>
            <p>Do you really want to delete</p>
            <p className="form-actions">
              {isPendingDelete && <p>wait while submitting</p>}
              {!isPendingDelete && (
                <>
                  <button onClick={deleteStop} className="button-text">
                    cancel
                  </button>
                  <button onClick={deleteHandeler} className="button">
                    okay
                  </button>
                </>
              )}
            </p>
          </Modal>
        )}

        <Outlet />
        <Header>
          <Link to="/events" className="nav-item">
            View all Events
          </Link>
        </Header>
        <article id="event-details">
          <header>
            <h1>{data.title}</h1>
            <nav>
              <button onClick={deleteStart}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img src={`http://localhost:3000/${data.image}`} alt="" />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>
                  {data.date} @ {data.time}
                </time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
        </article>
      </>
    );
  }
}
