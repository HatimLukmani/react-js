import EventForm from "../components/EventForm";
import { json } from "react-router-dom";
export default function NewEventPage() {
  return <EventForm method="POST"></EventForm>;
}
// export default NewEventPage;
// export async function action({ request, params }) {
//   const data = await request.formData();
//   const eventData = {
//     title: data.get("title"),
//     image: data.get("image"),
//     date: data.get("date"),
//     description: data.get("description"),
//   };
//   try {
//     const response = await fetch("http://localhost:8080/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(eventData),
//     });
//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }

//   // if (!response.ok) {
//   //   throw json(
//   //     { message: "something wrong while tryng to upload dfata" },
//   //     { status: 500 }
//   //   );
//   // }
// }
