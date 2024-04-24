import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { createNewEvent } from "../../util/http.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { queryClient } from "../../util/http.jsx";
// import { useNavigate } from "react-router-dom";
export default function NewEvent() {
  const navigate = useNavigate();
  let { mutate, isError, isPending, error } = useMutation({
    mutationFn: createNewEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      navigate("/events");
    },
  });

  function handleSubmit(formData) {
    console.log(formData);
    mutate({ event: formData });
  }

  return (
    <Modal onClose={() => navigate("../")}>
      {isPending && <p>Submitting......</p>}
      <EventForm onSubmit={handleSubmit}>
        {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError && (
        <ErrorBlock
          title={"Something wrong occured while post req"}
          message={"Something wrong occured while post req"}
        ></ErrorBlock>
      )}
    </Modal>
  );
}
