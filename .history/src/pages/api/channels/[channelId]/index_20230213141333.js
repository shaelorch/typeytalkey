import {
    getChannelById,
    updateChannelById,
    deleteChannelById,
  } from "@/database";
  
  export default async function handler(req, res) {
    const { channelId } = req.query;
  
    switch (req.method) {
      case "GET":
        const channel = await getChannelById(channelId);
        if (!channel) {
            res.status(404).json({ message: "channel not found"});
            break;
        }
            res.status(200).json(channel);
        break;
      case "PUT":
        const { name } = req.body;
        if (!name) {
            res.status(400).json({ message: "Missing channel name"});
            break;
        }
        const updatedChannel = await updateChannelById(channelId, name);
        if (!updatedChannel) {
            res.status(404).json({ message: "Channel not found"});
            break;
        }
      res.status(200).json(updatedChannel);
        break;
      case "DELETE":
        // Delete a channel by id
        await deleteChannelById(channelId);
        res.status(204).end();
        break;
       
      default:
        res.status(405).end();
    }
  }

  export default function Channel() {

    return (
      <div>
        <h1>A single channel</h1>
      </div>
    )
  }

  export async function getServerSideProps() {
    const messages = await getAllMessages(channelId)
  }
  