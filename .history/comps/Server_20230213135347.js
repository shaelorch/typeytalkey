import styled from "styled-components"

const ServerCont = styled.div`
    display:flex;
    justify-content:center;
    height:50px;
    background-color:pink;
    border-radius:20px;
    margin-bottom:20px;
    margin-top:50px;
   

`;


export default function Server({
    name="hello"
}) {

    return ( <ServerCont>
        <p>{name}</p>
    </ServerCont>


    )
}