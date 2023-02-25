import styles from "src/styles/Home.module.css"
import { BiMenu }  from "react-icons/bi"
import { useState } from "react";

export default function Logo() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
        console.log("hello");
    }
    return ( <><div className={styles.logocont}>
        <h2>Messagie.</h2>
        <BiMenu size={40} onClick={handleClick} />
    </div><div style={{display: open ? "flex" : "none", backgroundColor:'white', height:200", width:100}}> 

        </div></>
            
        
       
    )
}