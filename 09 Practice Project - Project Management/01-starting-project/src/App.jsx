import Navbar from "./Components/Navbar";
import { useRef, useState } from "react";
import NoSelected from "./Components/NoSelected";
import AddProject from "./Components/AddProject";
import ProjectDetails from "./Components/ProjectDetail";
import { data } from "autoprefixer";

function App() {
  function onSubmitHandeler(formData) {
    setProjectData((prevProjectData) => {
      let updatedProjectData = [...prevProjectData, formData];
      return updatedProjectData;
    });
    // isAddProject(false);
    setIsAddProject(false);
  }
  let dataDisplay;
  function onCancelHandeler() {
    setIsAddProject(false);
  }
  function deleteHandeler(index) {
    setProjectData((prevProjectData) => {
      let updatedProjectData = [
        ...prevProjectData.slice(0, index),
        ...prevProjectData.slice(index + 1),
      ];
      return updatedProjectData;
    });
    setIsProjectDeatils(false);
  }
  function onProjectClickhandeler(index) {
    console.log(projectData[index]);
    dataDisplay = { ...projectData[index], index: index };
    // console.log(dataDisplay);
    setFormData(dataDisplay);
    setIsProjectDeatils(true);
  }
  const [projectData, setProjectData] = useState([]);
  const [component, setComponent] = useState(NoSelected);
  const [isAddProject, setIsAddProject] = useState(false);
  const [isProjectDeatils, setIsProjectDeatils] = useState(false);
  const [formData, setFormData] = useState();
  // const [temp, setTemp] = useState(false);
  const contentRef = useRef();
  function addprojectClickHandeler() {
    console.log("button has been clicked");
    console.log(AddProject);
    setComponent(<AddProject onSubmit={onSubmitHandeler} />);
    setIsAddProject(true);
    // setTemp(true);
  }
  let components = <NoSelected></NoSelected>;

  if (isAddProject) {
    components = <AddProject onSubmit={onSubmitHandeler} />;
  } else if (isProjectDeatils) {
    console.log(formData);
    components = (
      <ProjectDetails formData={formData} deleteHandeler={deleteHandeler} />
    );
  }
  return (
    <>
      <Navbar
        projectData={projectData}
        addprojectClickHandeler={addprojectClickHandeler}
        onProjectClickhandeler={onProjectClickhandeler}
      ></Navbar>

      {/* <NoSelected></NoSelected> */}
      {/* <AddProject></AddProject> */}
      {/* {isAddProject ? (
        <AddProject onSubmit={onSubmitHandeler} onCancel={onCancelHandeler} />
      ) : (
        <NoSelected></NoSelected>
      )} */}
      {/* {temp && <AddProject />} */}
      {components}
    </>
  );
}

export default App;
