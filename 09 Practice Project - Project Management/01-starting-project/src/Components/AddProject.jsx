import { useRef } from "react";

function AddProject({ onSubmit, onCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function submithandeler(event) {
    // Prevent default form submission
    event.preventDefault();
    // const title = titleRef.current.value;
    // const description = descriptionRef.current.value;
    // const dueDate = dueDateRef.current.value;
    // console.log("hey inside submit handeler");
    // console.log("Title:", title);
    // console.log("Description:", description);
    // console.log("Due Date:", dueDate);
    let formData = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      dueDate: dueDateRef.current.value,
    };
    onSubmit(formData);
  }

  return (
    <form onSubmit={submithandeler}>
      <p className="element-flexer">
        <label htmlFor="title">Title</label>
        <input ref={titleRef} type="text" id="title" required />
        {/* <input type="text" id="title" /> */}
      </p>
      <p className="element-flexer">
        <label htmlFor="description">Description</label>
        <textarea ref={descriptionRef} id="description" required />
        {/* <textarea id="description" /> */}
      </p>
      <p className="element-flexer">
        <label htmlFor="dueDate">Due Date</label>
        <input ref={dueDateRef} type="date" id="dueDate" required />
        {/* <input type="date" id="dueDate" /> */}
      </p>
      <p className="element-flexer">
        <button type="submit">Save</button>
        <button onClick={onCancel}>Cancel</button>
      </p>
    </form>
  );
}

export default AddProject;
