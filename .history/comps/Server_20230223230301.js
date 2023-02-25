import styled from "styled-components"
import styles from "/src/styles/Home.module.css"




export default function Server({
    name="hello"
}) {

    return ( <div className={styles.serverCont}>
        <div style={{backgroundColor:'white', borderRadius:100}}></div>
        <p>{name}</p>
       
    </div>



    )
}