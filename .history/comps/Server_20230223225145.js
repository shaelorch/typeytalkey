import styled from "styled-components"

const ServerCont = styled.div`
    display:flex;
    height:50px;
   t
    border-radius:20px;
    margin-bottom:20px;
    margin-top:20px;
    color:white;
    width:60%;
    font-weight:bold;
    font-family: play, sans-serif;
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