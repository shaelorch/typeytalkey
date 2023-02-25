import { useEffect } from "react"
import axios from "axios"
import { useState } from "react";

export default function Channels() {

    const [channels, setChannels] = useState();

    useEffect(() => {
        axios.get('/api/channels')
        .then((response) => {
            const channels = response.data
        })
        
    })

    return (
        <div>
            <h1>Channels</h1>
        </div>
    )
}