import reactImage from "../../assets/react-core-concepts.png";
import "./Header.css";
const reactDiscriptions = ["Crucial", "Core", "Fundamnetal"];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  let dis = reactDiscriptions[getRandomInt(reactDiscriptions.length)];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {dis} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}
