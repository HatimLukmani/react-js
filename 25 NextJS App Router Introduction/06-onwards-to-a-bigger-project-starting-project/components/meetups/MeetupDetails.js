import classes from "./MeetupDetails.module.css";
export default function MeetupDetails(props) {
  return (
    <>
      <section className={classes.details}>
        <img src={props.images}></img>
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </section>
    </>
  );
}