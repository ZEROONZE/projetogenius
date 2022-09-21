import React from 'react';
import { Container,
            LogImg,
            Header,
            Title,
     
            MenuContainer,
                       
            } from './styles';

            import {
              FcPositiveDynamic,
              FcExport,
              FcAreaChart,
              FcNext,
              FcComboChart,
              FcOrgUnit,
              FcDownRight
              

} from 'react-icons/fc';
import { BiUser } from "react-icons/bi";
import { FiUsers, FiSend, FiLogIn } from "react-icons/fi";
import { GoCommentDiscussion } from "react-icons/go";
import { Link } from 'react-router-dom';


import logoImg from '../../assets/logo192.png'
import Dashboard from '../pages/Dashboard';


const Aside: React.FC = () => {
  return (
<Container>
  
    <Header>
        <LogImg src={logoImg}  alt="Logo Dashboard" />
        <Title className="nome-logo"></Title>
        </Header>
     
        <MenuContainer>

            <div className='menu-geral'> 
            <Link to="/dashboard" className='icon'>

                    <BiUser className='icon' />
                
            </Link>
            <Link to="/list">
            <FiUsers className='icon' />
    
            </Link>
            <Link to="/Disparos">
                
                     <GoCommentDiscussion className='icon'/>
                
            </Link>

            



            <Link to="">

                     <FiSend className='icon'/>
                   
            </Link>
            <Link to="#" className='exit'>

                    <FiLogIn className='icon'/>
                  
            </Link>
            </div>
        </MenuContainer>
     
    </Container>
  );
}

export default Aside;