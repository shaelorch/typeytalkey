import { getAllChannels, createChannel } from "@/database";


export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
    const channels = await getAllChannels();
    console.log(channels);
        res.status(200).json(channels)
      break;
    case "POST":
        const name = req.body.name

        if (!name) {
            res.status(400).json({error: "Missing channel name"});
            break;
        }
        const channel = await createChannel(name)
      res.status(201).json(channel);
      break;
       
    default:
      res.status(405).end();
  }
}
