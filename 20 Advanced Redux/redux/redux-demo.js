const redux = require("redux");
function reduxReducer(state = { counter: 0 }, action) {
  if (action.type == "increament") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type == "decreament") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
}
const store = redux.createStore(reduxReducer);
const component = () => {
  const latestState = store.getState();
  console.log(latestState);
};
store.subscribe(component);
store.dispatch({ type: "increament" });
store.dispatch({ type: "decreament" });
