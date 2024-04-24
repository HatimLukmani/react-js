import MeetupDetails from "../../components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";
export default function DetailsMeetup(props) {
  return (
    <MeetupDetails
      images={props.data.image}
      title={props.data.title}
      address={props.data.address}
      description={props.data.description}
    ></MeetupDetails>
  );
}
export async function getStaticPaths() {
  let client = await MongoClient.connect(
    "mongodb+srv://hatiml:123hatim&&&@cluster0.woad9ai.mongodb.net/meetup?retryWrites=true&w=majority&appName=Cluster0"
  );
  let db = client.db();
  let meetupsCollection = db.collection("meetupscollection");
  const dataRes = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: dataRes.map((res) => ({ params: { meetupId: res._id.toString() } })),
  };
}
export async function getStaticProps(context) {
  console.log(context.params.meetupId);
  let meetupId = context.params.meetupId;
  let client = await MongoClient.connect(
    "mongodb+srv://hatiml:123hatim&&&@cluster0.woad9ai.mongodb.net/meetup?retryWrites=true&w=majority&appName=Cluster0"
  );
  let db = client.db();
  let meetupsCollection = db.collection("meetupscollection");
  const dataRes = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  client.close();
  return {
    props: {
      data: {
        id: dataRes._id.toString(),
        title: dataRes.title,
        address: dataRes.address,
        image: dataRes.image,
        description: dataRes.description,
      },
    },
  };
}
