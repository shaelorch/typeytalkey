import { useEffect } from "react"
import axios from "axios"
import { useState } from "react";

export default function Channels() {

    const [channels, setChannels] = useState([]);

    useEffect(() => {
        axios.get('/api/channels')
        .then((response) => {
            const channels = response.data
            setChannels(channels)
        })
        
    })

    return (
        <div>
            <h1>Channels</h1>
            <div>
                {channels.map(channel => (
                    <>
                    <div key={channel.id}>
                        <p>{channel.name}</p>
                    </div>
                    
                    </>
                ))}
            </div>
        </div>
    )
}

export default function getServersideProps() {
    
}