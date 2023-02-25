import { GetServerSideProps } from "next";
import { getAllMessages } from "@/database";

export default function Channel({channelId, messages: initialMessages}) {

    return (
<div>
        <h1>Channel {channelId}</h1>
    {messages.map((message) => (
            <div key={message.id}>
        <p>{message.text}</p>
        <p>{message.userName}</p>
      </div>
        ))}
      
</div>
        
    )
  }

  export async function getServerSideProps(context) {
    const messages = await getAllMessages(1);
    const channelId = context.params.channelId;
    return {
        props: {
            channelId,
            messages: JSON.parse(JSON.stringify(messages))
        }
    }
  }
  