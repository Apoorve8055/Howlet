import React from 'react'
import { useSelector } from 'react-redux';
import GitHubButton from 'react-github-btn'
import styled from 'styled-components';

function Header({pagename}) {
    const theme = useSelector((state)=>state.theme.currentTheme);
    return (
        <Container>
            <PageName theme={theme}>
                {pagename}  
            </PageName>
            <div>
                <GitHubButton href="https://github.com/Apoorve8055/Howlet" data-color-scheme="no-preference: light; light: light; dark: dark;" data-show-count="true" data-size="large" aria-label="Star Apoorve8055/Howlet on GitHub">Star</GitHubButton>
                &nbsp;
                <GitHubButton href="https://github.com/sponsors/Apoorve8055" data-color-scheme="no-preference: dark; light: light; dark: dark;" data-icon="octicon-heart" data-size="large" aria-label="Sponsor @Apoorve8055 on GitHub">Sponsor</GitHubButton>
            </div>
        </Container>
    )
}

export default Header

const PageName = styled.h1`
    height:50px;
`; 

const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin:10px;
`;