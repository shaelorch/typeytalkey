import styled from "styled-components"
import styles from "/src/styles/Home.module.css"




export default function Server({
    name="hello"
}) {

    return ( <div className={styles.serverCont}>
        <div style={{backgroundColor:'white', borderRadius:100, width:50, height:50, marginTop:-20}}></div>
        <h4 style={{marginLeft:20, marginTop:-5}}>{name}</h4>

       
    </div>



    )
}