// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider, json } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import { NewEventPage, action as NewAction } from "./pages/NewEventPage";
// import { NewEventPage } from "./pages/NewEventPage";
// import EventsPage from "./pages/EventsPage";
import EventsPage from "./components/Events";
import { Loader } from "./components/Events";
import EventDetailPage from "./pages/EventDetailPage";
import EditEventPage from "./pages/EditEventPage";
import ErrorPage from "./pages/ErrorPage";
import RootElement from "./pages/RootElement";
import NewEventPage from "./pages/NewEventPage";
import { action as NewAction } from "./pages/NewEventPage";
import { action as eventdeleter } from "./pages/EventDetailPage";
import { action as actionCombiner } from "./components/EventForm";
// import action from "./"
let router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement></RootElement>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "", element: <HomePage></HomePage> },
      {
        path: "events",
        element: <EventsPage></EventsPage>,
        loader: async () => {
          const response = await fetch("http://localhost:8080/events");

          if (!response.ok) {
            throw json({ message: "something happend here " }, { status: 500 });
          } else {
            return response;
          }
        },
      },

      {
        path: "/events",
        id: "fetching-events",
        children: [
          {
            path: "/events/:eid",
            element: <EventDetailPage></EventDetailPage>,
            action: eventdeleter,
          },
          {
            path: "/events/:eid/edit",
            element: <EditEventPage></EditEventPage>,
            action: actionCombiner,
          },
        ],
        loader: async ({ req, params }) => {
          console.log(params);
          console.log("inside loader ");

          let response = await fetch(
            `http://localhost:8080/events/${params.eid}`
          );
          console.log(response);
          if (!response.ok) {
            throw json(
              { message: "something happend here bro.." },
              { status: 500 }
            );
          }
          return response;
        },
      },

      {
        path: "events/new",
        element: <NewEventPage></NewEventPage>,
        action: actionCombiner,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
