import { useNavigate, useNavigation, redirect } from "react-router-dom";

import classes from "./EventForm.module.css";
import { Form } from "react-router-dom";
function EventForm({ method, event }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state == "submitting";
  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          defaultValue={event && event.title}
          required
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          defaultValue={event && event.date}
          required
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          defaultValue={event && event.description}
          required
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "submitting" : "save"}
        </button>
      </div>
    </Form>
  );
}
export async function action({ request, params }) {
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  let url = "http://localhost:8080/";
  console.log("hey bro inside the action");
  let methodUsing = request.method;
  let eventId = params.eid;
  console.log(methodUsing, eventId);
  if (methodUsing == "PATCH") {
    console.log("inside patch");
    url = "http://localhost:8080/" + eventId;
  }

  const response = await fetch(url, {
    method: methodUsing,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });
  console.log(response);

  return redirect("/events");
}
export default EventForm;
