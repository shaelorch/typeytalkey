import { useEffect } from "react"
import axios from "axios"
import { useState } from "react";
import { getAllChannels } from "@/database";
import Server from "comps/Server";
import Link from "next/link";
import styles from "../styles/Home.module.css"
import Logo from "comps/Logo";

export default function Channels({ channels: initialChannels }) {

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
        <><Logo /><div style={{ backgroundColor: "#7880B5", fontFamily: 'play, sans-serif', justifyContent:'left' }}>
            <h1 style={{ color: '#ffffff', fontFamily: 'play, sans-serif', display: 'flex', paddingBottom: 50, padding: '10%' }}>CHOOSE YOUR CHANNEL</h1>
            <form  className={styles.form} onSubmit={handleSubmit}>
                <div style={{flexDirection:'column'}}>
                    <h3>Create new server</h3>
                <input className={styles.input} type="text" placeholder="name"
                    value={text} onChange={(e) => setChannels(e.target.value)} />
                </div>


                <button className={styles.ibutton} type="submit">Send</button>
            </form>
            <div style={{
                backgroundColor: "#6987C9", textAlign: 'left', width: '50%', height: '100%',
                borderRadius: 10, padding: '5%'
            }}>
                {channels.map(channel => (

                    <><Link href={`/channels/${channel.id}`}>
                        <Server key={channel.id} name={channel.name}>

                        </Server>
                    </Link><br /></>





                ))}
            </div>


        </div></>
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