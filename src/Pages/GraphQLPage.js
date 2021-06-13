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

const RequestForm = styled.div`
display: flex;
justify-content: space-between;
`;

const RequestSection = styled.div`
    width:${props=>props.wid?'60%':'20%'};
    padding:10px 5px;
`;

const MethodSelect = styled.select`
    width:100%;
    height:100%;
    text-align:center;
`;

const MethodInput = styled.input`
    width:100%;
    height:100%;
    padding:10px 20px;
`;

const MethodButton = styled.button`
    width:100%;
    height:100%;
`;