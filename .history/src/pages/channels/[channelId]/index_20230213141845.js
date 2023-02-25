import { GetServerSideProps } from "next";

export default function Channel() {

    return (
<div>

    {messages.map((message) => (
            <div key={message.id}>
        <h1>{message.text}</h1>
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
  