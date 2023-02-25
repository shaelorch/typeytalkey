import { getAllMessages, createMessage } from "@/database";

export default async function handler(req, res) {
  const { channelId } = req.query;

  switch (req.method) {
    case "GET":
      // Get all messages for a channel
      res
        .status(200)
        .json({ message: "GET request to /api/channels/[channelId]/messages not implemented yet" });
      break;
    case "POST":
      // Create a new message
      res
        .status(200)
        .json({ message: "POST request to /api/channels/[channelId]/messages not implemented yet" });
      break;
    default:
      res.status(405).end();
  }
}
