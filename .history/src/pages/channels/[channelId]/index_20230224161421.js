import { GetServerSideProps } from "next";
import { getAllMessages } from "@/database";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "src/styles/Home.module.css"
import Logo from "comps/Logo";

export default function Channel({channelId, 
    messages: initialMessages}) {

    const [userName, setUserName] = useState('')
    const [text, setText] = useState('')
    const [messages, setMessages] = useState(initialMessages);

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(userName, text)
        const result = await axios.post(`/api/channels/${channelId}/messages`, {
                userName, text
            })

        const newMessages = result.data   
        setMessages([...messages, newMessages])
    }
   

    return (<Logo/>
<div className={styles.main}>

        <h1>Channel {channelId}</h1>
        
    {messages.map((message) => (
            <div className={styles.message} key={message.id} 
            style={{}}>
        <h3 style={{color:"#5887C9"}}>{message.userName}:</h3>
        <p style={{color:"white"}} >{message.text}</p>

      </div>
        ))}
    <div styles={{display:'flex', justifyContent:'center'}}>
        <form className={styles.form} onSubmit={handleSubmit}>
                <input className={styles.input} type="text" placeholder="name" 
                value={userName} onChange={(e) => 
                setUserName(e.target.value)} />
                <input className={styles.input} type="text" placeholder="message" 
                value={text} onChange={(e) => 
                setText(e.target.value)} />
                <button className={styles.ibutton} type="submit">Send</button>
        </form>
      
    </div>
       
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