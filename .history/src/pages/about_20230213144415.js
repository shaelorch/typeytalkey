import { useEffect } from "react"
import axios from "axios"
import { useState } from "react";
import { getAllChannels } from "@/database";
import Server from "comps/Server";
import Link from "next/link";

export default function Channels({channels}) {

    // const [channels, setChannels] = useState([]);

    // useEffect(() => {
    //     axios.get('/api/channels')
    //     .then((response) => {
    //         const channels = response.data
    //         setChannels(channels)
    //     })
        
    // })
    const [userName, setUserName] = useState('')
    const [text, setText] = useState('')
    const [messages, setMessages] = useState(initialMessages);

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(userName, text)
        const result = await axios.post(`/api/channels/`, {
                userName, text
            })

        const newMessages = result.data   
        setMessages([...messages, newMessages])
    }

    return (
        <div style={{backgroundColor:'teal', }}>
            <h1 style={{color:'pink', fontFamily:'helvetica, cursive', display:'flex', paddingBottom:50}}>Channels</h1>
            <div>
                {channels.map(channel => (
                    <Link href={`/channels/${channel.id}`}>
                            <Server key={channel.id} name={channel.name}>
                                
                            </Server>
                    </Link>
                    
                    
                    
                ))}
            </div>

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

export async function getServerSideProps() {


    const channels = await getAllChannels();

    return {
        props: {
            channels: JSON.parse(JSON.stringify(channels))
        }
    }
}