import styles from "src/styles/Home.module.css"
import BiMenu from "react-icons/bi"

export default function Logo() {

    return (
        <div className={styles.logocont} >
            <h2>Messagie</h2>
            <BiMenu style={{width:50, height:50}}/>
        </div> 
    )
}