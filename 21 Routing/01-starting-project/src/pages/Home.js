import { Link, useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  function handelClick() {
    navigate("/product");
  }
  return (
    <>
      <p>hey this is hoem page</p>
      <Link to="/product">Go to product section</Link>

      {/* <a href="/product">go to product section</a> */}
      <p>
        <button onClick={handelClick}>click</button>
      </p>
    </>
  );
}
