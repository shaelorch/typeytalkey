import styled from "styled-components"
import styles from "/src/styles/Home.module.css"




export default function Server({
    name="hello"
}) {

    return ( <div className={styles.serverCont}>
        <div style={{backgroundColor:'white', borderRadius:100, width:50, height:50, marginTop:-50}}></div>
        <p style={{marginLeft:20}}>{name}</p>

       
    </div>



    )
}