export default function Button({ children, textOnly, classes, ...props }) {
  let classOfBtn = textOnly ? "text-button" : "button";
  classOfBtn += " " + classes;
  return (
    <button className={classOfBtn} {...props}>
      {children}
    </button>
  );
}
