import { useEffect } from "react"
import axios from "axios"

export default function Channels() {

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