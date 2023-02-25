import { useEffect } from "react/cjs/react.development"


export default function Channels() {

    useEffect(() => {
        axios.get('/api/channels')
        .then((response) => {
            console.log(response.data)
        })
        
    })

    return (
        <div>
            <h1>Channels</h1>
        </div>
    )
}