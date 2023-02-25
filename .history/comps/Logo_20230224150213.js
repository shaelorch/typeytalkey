import styles from "src/styles/Home.module.css"
import { BiMenu }  from "react-icons/bi"
import { useState } from "react";
import Link from "next/link";
import {AiOutlineClose} from "react-icons/ai"

export default function Logo() {
    const [open, setOpen] = useState(false);
    const [close, setClose] = useState(false);

    const handleClick = () => {
        setOpen(true);
        console.log("hello");
    }

    const handleClickClose = () => {
            setOpen(false);
    }

    return ( <><div className={styles.logocont}>
        <h2>Messagie.</h2>
        <BiMenu size={40} onClick={handleClick} />
    </div><div style={{display:'flex', justifyContent:'right', backgroundColor:"#7880B5", fontFamily:'play, sans-serif', position:'absolute'}}> 
            <div style={{display: open ? "flex" : "none", backgroundColor:'white', height:200, width:250,borderRadius:10, color:"#7880B5", padding:20, flexDirection:'column' }}>
                <AiOutlineClose size={30} style={{marginLeft:"80%"}} onClick={handleClickClose} />
                <Link href="/">Home</Link>
                <Link href="/about">Messages</Link>
                
                
            </div>
        </div></>
            
        
       
    )
}