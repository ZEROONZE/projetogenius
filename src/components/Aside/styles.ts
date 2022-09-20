
import { hover } from "@testing-library/user-event/dist/hover";
import { text } from "stream/consumers";
import styled from "styled-components";

export const Container = styled.div`
    grid-area: AS;
    .menu-geral{
      margin: auto;

    }
    color: ${props => props.theme.colors.white};
    .DASHBOARD{
    font-weight: bold;
   
   
}




    background-color: ${props => props.theme.colors.secondary};

    a { 
text-decoration: none;
color: ${props => props.theme.colors.white};

display: flex;
align-items: center;
padding: 6px;

font-size: 13px;
font-weight: bold;
transition: opacity .3s;

transition: all 0.2s;
.segundo{
    margin-left: 5px;
    padding-left: 5px;
}
.segundoo{
    margin-left: 7px; 
    padding-left: 5px;
}
    .icon{
        font-size: 25px;
        margin: 10px;
    }

&:hover{
    opacity: .7;
    transform: translateX(5px);
    color: #179788;
}
>svg{
    font-size: 18px;
    margin-right: 5px;
    
}





}

`;
export const Header = styled.header`
display: flex;
align-items: center;
height: 70px;
justify-content: center;
text-align: center;
align-items: center;
.nome-logo{
    
  color: ${props => props.theme.colors.white};
    font-family: 'Edu QLD Beginner', cursive;
    font-size: 24px;
}


`;


export const LogImg = styled.img`
height: 40px;
width: 40px;

`;


export const Title = styled.h3`
    color: ${props => props.theme.colors.success}
    

`; 


export const MenuContainer = styled.nav`
display: flex;
flex-direction: column;
margin: auto;
justify-content: center;
text-align: center;
padding: 10px;
font-size: 35px;
margin-top: 50px;

`;
export const MenuItemLink = styled.a`


margin: auto;
justify-content: center;
text-align: center;


`;

