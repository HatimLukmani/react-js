import useHttps from "../useHttps";
import Menuitem from "./Menuitem";
import Error from "./UI/Error";

export default function Meals() {
  const {
    data: loadedRecipes,
    errorState,
    isLoading,
  } = useHttps("http://localhost:3000/meals");
  console.log(loadedRecipes);
  if (isLoading) {
    return <p className="center">fetching !!! just wait </p>;
  }
  if (errorState) {
    return <Error title={"an error occured"} message={errorState}></Error>;
  }
  return (
    <ul id="meals">
      {loadedRecipes &&
        loadedRecipes.map((recipe) => {
          return <Menuitem key={recipe.id} meal={recipe}></Menuitem>;
        })}
    </ul>
  );
}
