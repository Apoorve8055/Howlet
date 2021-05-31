import React from 'react'
import styled from 'styled-components';
import Header from '../Components/Header';

function GraphQLPage() {
    return (
        <section>
        <Conatiner>
           <Header pagename="GraphQL"/>
                <Layout>
                    <article>
                        <RequestLayout>
                            Request
                        </RequestLayout>
                    </article>
                    
                    <article>                 
                        <RequestLayout>
                            Response
                        </RequestLayout>
                    </article>
                </Layout>
        
                </Conatiner>
    </section>
    )
}

export default GraphQLPage

const Conatiner = styled.div`
    display:flex;
    flex-direction:column;
`;

const Layout = styled.div`
    display:flex;
    @media all and (max-width: 768px) { 
        flex-direction:column;
    }
`;

const RequestLayout = styled.div`
    width:43vw;
    padding:10px;
    @media all and (max-width: 768px) { 
        width:90vw;
    }
`;