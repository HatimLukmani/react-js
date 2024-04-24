import NewMeetupForm from "../../components/meetups/NewMeetupForm";
export default function NewMeetUp() {
  async function onAddMeetup(data) {
    let response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let datas = await response.json();
    console.log(datas);
  }
  return <NewMeetupForm onAddMeetup={onAddMeetup}></NewMeetupForm>;
}
