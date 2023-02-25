import styled from "styled-components"

const serverCont = styled.div`
    display:flex;
    justify-content:center;
    height:100px;
    background-color:pink;

`;


export default function Server({
    name="hello"
}) {

    return ( <serverCont>
        <p>{name}</p>
    </serverCont>


    )
}