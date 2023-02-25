import { GetServerSideProps } from "next";
import { getAllMessages } from "@/database";
import { useState, useEffect } from "react";

export default function Channel({channelId, messages}) {

    const [userName, setUserName] = useState('')
    const [text, setText] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(userName, text)

    }

    const result = await axios.post(`/api/channels/${channelId}/messages`, {
        userName, text
    })
    
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
                <input type="text" placeholder="name" 
                value={userName} onChange={(e) => 
                setUserName(e.target.value)} />
                <input type="text" placeholder="message" 
                value={text} onChange={(e) => 
                setText(e.target.value)} />
                <button type="submit">Send</button>
        </form>
      
</div>
        
    )
  }

  export async function getServerSideProps(context) {
    // This is always server side
    // From the server, we can connect to the database
    const channelId = context.query.channelId
    const messages = await getAllMessages(channelId)
    return {
        props: {
            channelId,
            messages: JSON.parse(JSON.stringify(messages))
        }
    }
}