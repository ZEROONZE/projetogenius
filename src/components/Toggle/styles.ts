import styled from 'styled-components';
import Switch, {ReactSwitchProps}  from 'react-switch';




export const Container = styled.div`
display: flex;
align-items: center;
.dark-light{
        font-family: 'Edu QLD Beginner', cursive;
    }
`;


export const ToggleLabel = styled.span`
color: ${props => props.theme.colors.white};
width: 30px;
    
    `;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({theme}) => ({   
     onColor: theme.colors.primary,
     offColor: theme.colors.primary

    }))<ReactSwitchProps>`
    margin: 0 7px;
   
    .dark-light{
        font-family: 'Edu QLD Beginner', cursive;
    }

`;
