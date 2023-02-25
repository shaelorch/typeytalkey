import styled from "styled-components"

const ServerCont = styled.div`
    display:flex;
    justify-content:center;
    height:100px;
    background-color:pink;
    border-radius:10px;
   

`;


export default function Server({
    name="hello"
}) {

    return ( <ServerCont>
        <p>{name}</p>
    </ServerCont>


    )
}