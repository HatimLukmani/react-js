import { MongoClient } from "mongodb";
async function handeler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    let { title, image, address, description } = data;
    let client = await MongoClient.connect(
      "mongodb+srv://hatiml:123hatim&&&@cluster0.woad9ai.mongodb.net/meetup?retryWrites=true&w=majority&appName=Cluster0"
    );
    let db = client.db();
    let meetupsCollection = db.collection("meetupscollection");
    let result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "inserted succesfully" });
  }
}
export default handeler;
