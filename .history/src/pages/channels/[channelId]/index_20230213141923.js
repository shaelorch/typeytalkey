import { GetServerSideProps } from "next";

export default function Channel() {

    return (
<div>
        <h1>Channel {channel.id}</h1>
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
  