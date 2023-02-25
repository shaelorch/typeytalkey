import styles from "src/styles/Home.module.css"
import { BiMenu }  from "react-icons/bi"
import { useState } from "react";

export default function Logo() {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(true);
        console.log("hello")
    }
    return (
        <><div className={styles.logocont}>
            <h2>Messagie.</h2>
            <BiMenu size={40} onClick={handleClick} />
        </div><div>
                {open &&
                    <div style={{ display: 'flex', height: '100%', width: "100%", backgroundColor:"white" }}>

                    </div>}
            </div></>
       
    )
}