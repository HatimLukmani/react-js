import { useRef, useState, useCallback, useEffect } from "react";
import Error from "./components/Error.jsx";
import Places from "./components/Places.jsx";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import AvailablePlaces from "./components/AvailablePlaces.jsx";
import updateUserChoice from "./asynchronous.js";
import { getUserChoice } from "./asynchronous.js";
function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [errorUpdating, setErrorUpdating] = useState();
  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }
  useEffect(() => {
    try {
      const data = getUserChoice();
      setUserPlaces(data);
    } catch (error) {}
  }, []);

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (
        prevPickedPlaces.some((place) => place.id === selectedPlace.current.id)
      ) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });
    try {
      await updateUserChoice([...userPlaces, selectedPlace]);
    } catch (error) {
      console.log(error);
      setErrorUpdating({
        message: error.message || "There is some error user-place endpoint ",
      });
      setUserPlaces(userPlaces);
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );
    try {
      await updateUserChoice(
        userPlaces.filter((place) => place.id !== selectedPlace.current.id)
      );
    } catch (error) {
      setUserPlaces(userPlaces);
      setErrorUpdating(error.message);
    }

    setModalIsOpen(false);
  }, []);
  function handelConfirm() {
    console.log("dgdsjhg");
    setErrorUpdating(null);
  }
  return (
    <>
      {/* <Modal open={errorUpdating} onClose={handelConfirm}> */}
      {/* {errorUpdating && (
          <Error title={"some error occured"} mesage="error.message"></Error>
        )} */}

      {/* </Modal> */}
      {/* <Error title={"some error occured"} mesage="error.message"></Error> */}
      <Modal open={errorUpdating} onClose={handelConfirm}>
        {console.log(errorUpdating)}
        {errorUpdating && (
          <Error
            title={"some error occured"}
            mesage={errorUpdating.message}
            onConfirm={handelConfirm}
          ></Error>
        )}
      </Modal>

      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
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
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
