import styled from "styled-components"

const ServerCont = styled.div`
    display:flex;
    justify-content:center;
    height:50px;
   
    border-radius:20px;
    margin-bottom:20px;
    margin-top:20px;
    color:teal;
    width:60%;
    font-weight:bold;
    font-family: helvetica, cursive;
    padding:12px;
   

`;


export default function Server({
    name="hello"
}) {

    return ( <ServerCont>
        <p>{name}</p>
    </ServerCont>


    )
}