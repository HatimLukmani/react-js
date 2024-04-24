import { useParams } from "react-router-dom";
export default function ProductDetails() {
  let params = useParams();
  return (
    <>
      <h1>Welcome to products deatils page</h1>
      <p>it is for {params.pid}</p>
    </>
  );
}
