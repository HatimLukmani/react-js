import { useRef, useState, useEffect, useCallback } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import { sortPlacesByDistance } from "./loc.js";
function App() {
  let prevSelectedPlacesId =
    JSON.parse(localStorage.getItem("selectedPlaces")) || [];
  let prevSelected = prevSelectedPlacesId.map((id) => {
    return AVAILABLE_PLACES.find((places) => places.id == id);
  });
  console.log(prevSelected);
  // console.log(prevSelectedPlaces);
  // const modal = useRef();
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState(prevSelected);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [modalOpen, setModalopen] = useState(false);
  useEffect(() => {
    console.log("thisis ke");
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );
      setAvailablePlaces(sortedPlaces);
    });
  }, []);

  function handleStartRemovePlace(id) {
    // modal.current.open();
    setModalopen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    // modal.current.close();
    setModalopen(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });
    let prevSelectedPlaces =
      JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    if (prevSelectedPlaces.indexOf(id) == -1) {
      localStorage.setItem(
        "selectedPlaces",
        JSON.stringify([...prevSelectedPlaces, id])
      );
    }
  }

  const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    let prevSelectedPlaces = JSON.parse(localStorage.getItem("selectedPlaces"));
    localStorage.setItem(
      "selectedPlaces",
      JSON.stringify(
        prevSelectedPlaces.filter((id) => id != selectedPlace.current)
      )
    );
    // modal.current.close();
    setModalopen(false);
  });

  return (
    <>
      <Modal openModal={modalOpen}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
          timSeconds={3}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText="Wait a minute !! Grabbing Your Location"
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
