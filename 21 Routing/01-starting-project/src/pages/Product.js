import { Link } from "react-router-dom";

export default function Product() {
  let product = [
    {
      id: "p1",
      title: "hey this is product1",
    },
    {
      id: "p2",
      title: "hey this is product2",
    },
    {
      id: "p3",
      title: "hey this is product3",
    },
  ];
  return (
    <>
      <h1>Hey !! welcome to products page..</h1>
      <ul>
        {product.map((ele) => {
          return (
            <li>
              <Link to={`${ele.id}`}>{ele.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
