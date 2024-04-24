import "../index.css";
export default function Navbar({
  projectData,
  addprojectClickHandeler,
  onProjectClickhandeler,
}) {
  function projectHandeler(e, key) {
    onProjectClickhandeler(key);
  }
  return (
    <>
      <nav className="navbar">
        <h1>Your projects</h1>

        <button onClick={addprojectClickHandeler}>Add Your Project</button>

        <ul>
          {projectData.map((data, dataIndex) => (
            <li key={dataIndex} onClick={(e) => projectHandeler(e, dataIndex)}>
              {/* <button onClick={projectHandeler}>{data.title}</button> */}
              {data.title}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
