import { GetServerSideProps } from "next";
import { getAllMessages } from "@/database";
import { useState, useEffect } from "react";

export default function Channel({channelId, messages}) {

    const [userName, setUserName] = useState('')
    const [text, setText] = useState('')
    const [messages, setMessages] = useState(initialMessages)

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(userName, text)


    return (
<div>
        <h1>Channel {channelId}</h1>
    {messages.map((message) => (
            <div key={message.id}>
        <p>{message.text}</p>
        <p>{message.userName}</p>
      </div>
        ))}

       <form onSubmit={handleSubmit}>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <button type="submit">Send</button>
        </form>
      
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
  