import React from 'react';
import { useSelector} from 'react-redux'

import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/global';
import { darkTheme, lightTheme } from './theme/theme';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


import RestApiPage from './Pages/RestApiPage';
import GraphQLPage from './Pages/GraphQLPage';
import WebSocketPage from './Pages/WebSocketPage';
import SideBar from './Components/SideBar';

function App() {

  const theme = useSelector((state)=>state.theme.currentTheme);
  
  return (
   
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    
    <Container>
        <GlobalStyles />
    
        <Router>
        <SideBar/>
        <Switch>
            <Route exact path="/">
              <RestApiPage/>
            </Route>
            <Route path="/graphql">
            <GraphQLPage/>
            </Route>
            <Route path="/socket">
            <WebSocketPage/>
            </Route>
          </Switch>


        </Router>
      
        </Container>
    
        </ThemeProvider>
  );
}

export default App;


const Container = styled.div`
    display: flex;
    height:100vh;
    width:100vw;
`; 
