import { useEffect } from "react"
import axios from "axios"
import { useState } from "react";
import { getAllChannels } from "@/database";

export default function Channels({channels}) {

    // const [channels, setChannels] = useState([]);

    // useEffect(() => {
    //     axios.get('/api/channels')
    //     .then((response) => {
    //         const channels = response.data
    //         setChannels(channels)
    //     })
        
    // })

    return (
        <div>
            <h1>Channels</h1>
            <div>
                {channels.map(channel => (
                    
                    <div key={channel.id}>
                        <p name={channel.name}></p>
                    </div>
                    
                    
                ))}
            </div>
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