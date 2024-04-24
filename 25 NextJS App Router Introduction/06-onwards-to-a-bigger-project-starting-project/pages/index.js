import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
let meetups = [
  {
    id: "m1",
    title: "First-meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrzI92zhg5SliG4CGpGNQ2cpJ94j-Oq4b4ws-K7sH4JQ&s",
    address: "c-37/AQsa society",
    description: "this is my first meetup",
  },
  {
    id: "m2",
    title: "second-meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrzI92zhg5SliG4CGpGNQ2cpJ94j-Oq4b4ws-K7sH4JQ&s",
    address: "c-37/AQsa society",
    description: "this is my second meetup",
  },
];
export default function HomePage(props) {
  return <MeetupList meetups={props.data}></MeetupList>;
}
// export async function getStaticProps() {
//   return {
//     props: {
//       data: meetups,
//     },
//   };
// }
export async function getServerSideProps() {
  let client = await MongoClient.connect(
    "mongodb+srv://hatiml:123hatim&&&@cluster0.woad9ai.mongodb.net/meetup?retryWrites=true&w=majority&appName=Cluster0"
  );
  let db = client.db();
  let meetupsCollection = db.collection("meetupscollection");
  const dataRes = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      data: dataRes.map((val) => ({
        title: val.title,
        address: val.address,
        image: val.image,
        id: val._id.toString(),
      })),
    },
  };
}
