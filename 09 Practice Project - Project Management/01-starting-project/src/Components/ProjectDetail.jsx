export default function ProjectDetails({ formData, deleteHandeler }) {
  function sdsad() {
    deleteHandeler(formData.index);
  }
  return (
    <>
      <div>
        <p>{formData.title}</p>
        <p>{formData.dueDate}</p>
        <h3>{formData.description}</h3>
        {/* <form action="">
          <input type="text" />
          <button type="submit">Add Task</button>
        </form>
        <ul>
          <li>you are good</li>
          <li>you are good</li>
          <li>you are good</li>
        </ul> */}
        <button onClick={sdsad}>delete</button>
      </div>
    </>
  );
}
