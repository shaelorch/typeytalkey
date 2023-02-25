import styles from "src/styles/Home.module.css"
import { BiMenu }  from "react-icons/bi"

export default function Logo() {

    return (
        <div className={styles.logocont} >
            <h2>Messagie.</h2>
            <BiMenu width={100} height={100}/>
        </div> 
    )
}