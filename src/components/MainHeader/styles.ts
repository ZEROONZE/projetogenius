

import styled from 'styled-components';

export const Container = styled.div`
   grid-area: MH;
   color: ${props => props.theme.colors.success};
   background-color: ${props => props.theme.colors.secondary};
   display: flex;
    justify-content: space-between;
    align-items: center;
    


    padding: 0 10px;

    box-shadow: 60px -16px teal;

`;



export const Profile = styled.div`


color: ${props => props.theme.colors.white};


`;
export const Welcome = styled.h3``;
export const UserName  = styled.span``;