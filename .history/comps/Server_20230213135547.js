import styled from "styled-components"

const ServerCont = styled.div`
    display:flex;
    justify-content:center;
    height:50px;
    background-color:pink;
    border-radius:20px;
    margin-bottom:20px;
    margin-top:20px;
    color:black;
    width:60%;
    margin-left:30%;
   

`;


export default function Server({
    name="hello"
}) {

    return ( <ServerCont>
        <p>{name}</p>
    </ServerCont>


    )
}