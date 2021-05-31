import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setCurrentTheme } from '../features/theme/themeSlice';
import { Link } from 'react-router-dom'
import {Fastapi} from '@styled-icons/simple-icons/Fastapi';
import {Graphql} from '@styled-icons/simple-icons/Graphql';
import {Sun} from '@styled-icons/boxicons-regular/Sun';
import {Moon} from '@styled-icons/boxicons-regular/Moon';

function Sidebar() {

    const theme = useSelector((state)=>state.theme.currentTheme);
    const dispatch = useDispatch();

    const toggleTheme = () => {
        if (theme === 'light') {
          dispatch(setCurrentTheme(('dark')));
        } else {
          dispatch(setCurrentTheme(('light')));
        }
      }

    return (
        <aside>
        <Container>

        <LinkButton to="/" theme={theme}>
          <FastApi  size="30" theme={theme}/>
          <TipText className="tip" space="20" theme={theme}>REST API</TipText>
        </LinkButton>

        
        <LinkButton to="/graphql" theme={theme}>
          <GraphGL  size="30" theme={theme}/>
          <TipText className="tip" space="89" theme={theme}>GraphQL</TipText>
        </LinkButton>


        
            <DarkModeToggale onClick={toggleTheme}>
           {theme === 'dark'?<SunIcon/>:<MoonIcon/>}
            </DarkModeToggale>            


        </Container>
        </aside>
    )
}

export default Sidebar;


const Container = styled.div`

    display:flex;
    flex-direction:column;

    @media all and (max-width: 768px) { 
      flex-direction:row;
     }
`;

const LinkButton = styled(Link)`
    
    height:50px;
    width:50px;

    margin:10px;
    padding:10px;
    background:${props=>props.theme === 'dark'?'white':'black'};
    
    border-radius:10px;
    align-items: center;
    justify-content: center;

    &:hover .tip {
      visibility: visible;
    }



`;

const FastApi = styled(Fastapi)`

color:${props=>props.theme === 'dark'?'black':'white'};
font-size: large;
transition: all .2s ease-in-out; 

:hover{
  transform: scale(1.2);
}

`;

const GraphGL = styled(Graphql)`
color:${props=>props.theme === 'dark'?'black':'white'};

font-size: large;
transition: all .2s ease-in-out; 

:hover{
  transform: scale(1.2);
}
`;

const SunIcon = styled(Sun)`

color:orange;
font-size: large;
transition: all .2s ease-in-out; 
  
  :hover{
    transform: scale(1.2);
  }
`;

const MoonIcon = styled(Moon)`
  color:black;
  font-size: large;
  transition: all .2s ease-in-out; 
    
    :hover{
      transform: scale(1.2);
    }
`;
const DarkModeToggale = styled.div`
height:50px;
width:50px;

margin:10px;
padding:10px;
align-items: center;
justify-content: center;

`;


const TipText = styled.div`

   position:absolute;
   top:${props=>props.space}px;
   left:85px;
   visibility: hidden; 

    background-color: ${props=>props.theme === 'dark'?'white':'black'};
    color:${props=>props.theme === 'dark'?'black':'white'};
    font-weight:500;
    text-align: center;
    border-radius: 6px;
    padding: 5px 15px;
    z-index: 1;

   @media all and (max-width: 768px) { 
   top:-40px;
   left:${props=>props.space - 15}px;
   }
`;