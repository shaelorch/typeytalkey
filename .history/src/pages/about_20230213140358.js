import { useEffect } from "react"
import axios from "axios"
import { useState } from "react";
import { getAllChannels } from "@/database";
import Server from "comps/Server";

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
        <div style={{backgroundColor:'teal'}}>
            <h1 style={{color:'pink', fontFamily:'helvetica, cursive', display:'flex', justifyContent:'center', paddingBottom:50}}>Channels</h1>
            <div>
                {channels.map(channel => (
                    
                    <Server key={channel.id} name={channel.name}>
                        
                    </Server>
                    
                    
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