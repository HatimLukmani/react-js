import { Link, useNavigate } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchEvent, updateEvent } from "../../util/http.jsx";
import { queryClient } from "../../util/http.jsx";
import { useMutation } from "@tanstack/react-query";
export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();
  let { data, isPending, isError, error } = useQuery({
    queryKey: ["events", params.id],
    queryFn: ({}) => {
      fetchEvent({ signal, id: params.id });
    },
  });
  let { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      const newData = data.event;
      await queryClient.cancelQueries({ queryKey: ["events", params.id] });
      let previousData = queryClient.getQueryData(["events", params.id]);
      queryClient.setQueryData(["events", params.id], newData);
      return { previousData };
    },
    onError: (error, data, context) => {
      queryClient.setQueryData(["events", params.id], context.previousData);
    },
  });
  function handleSubmit(formData) {
    mutate({ id: params.id, event: formData });
    navigate("../");
  }

  function handleClose() {
    navigate("../");
  }
  if (data) {
    return (
      <Modal onClose={handleClose}>
        <EventForm inputData={data} onSubmit={handleSubmit}>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Update
          </button>
        </EventForm>
      </Modal>
    );
  }
}
