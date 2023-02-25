import { getAllChannels, createChannel } from "@/database";


export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
    const channels = await getAllChannels();
    console.log(channels);
        res.status(200).json(channels)
      break;
    case "POST":
      // Create a new channel
      res
        .status(200)
        .json({ message: "POST request to /api/channels not implemented yet" });
      break;
    default:
      res.status(405).end();
  }
}
