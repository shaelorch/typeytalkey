import { useEffect } from "react"
import axios from "axios"
import { useState } from "react";
import { getAllChannels } from "@/database";
import Server from "comps/Server";
import Link from "next/link";

export default function Channels({channels: initialChannels}) {

    // const [channels, setChannels] = useState([]);

    // useEffect(() => {
    //     axios.get('/api/channels')
    //     .then((response) => {
    //         const channels = response.data
    //         setChannels(channels)
    //     })
        
    // })
    
    const [text, setText] = useState('')
    const [channels, setChannels] = useState(initialChannels);

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(text)
        const result = await axios.post(`/api/channels/`, {
                text
            })

        const newChannels = result.data   
        setChannels([...channels, newChannel])
    }

    return (
        <div style={{backgroundColor:"dark purple"}}>
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
                value={text} onChange={(e) => 
                setChannels(e.target.value)} />
                
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