import React, { useState } from 'react'
import styled from 'styled-components';
import Header from '../Components/Header';
import {ChevronRightCircle} from '@styled-icons/boxicons-solid/ChevronRightCircle';

function RestApiPage() {
    const [url, setURL] = useState('');
    const [method, setMethod] = useState('GET');
    const [requestResponse, setRequestResponse] = useState('');

    const handleChange = (event) => {
        if(event.target.name === "url"){
            setURL(event.target.value);
        }

        else if(event.target.name === "method"){
            setMethod(event.target.value);
        }
    
}


const handleSubmit = () => {
    fetch(url,{
        method:method
    })
    .then(res=>{    
        console.log(res.status);
        console.log(res.headers.get('Content-Type'));
        console.log(res.headers.get('Date'));
        console.log(res.status);
        console.log(res.statusText);
        console.log(res.type);
        console.log(res.url);
    
    
        return res.json()
    })
    .then(res=>setRequestResponse(res));
    console.log(url,method);
} ;

    return (
        <section>
            <Conatiner>
               <Header pagename="REST API"/>
               <Layout>
               <article>
                   <RequestLayout>
                   

                   <RequestForm>
                       
                       <RequestSection >
                           <MethodSelect name="method" value={method} onChange={handleChange}>
                               <option value="GET">GET</option>
                               <option value="POST">POST</option>
                               <option value="PUT">PUT</option>
                               <option value="DELETE">DELETE</option>

                               <option value="CONNECT">CONNECT</option>                               
                               <option value="HEAD">HEAD</option>
                               <option value="OPTIONS">OPTIONS</option>                               
                               <option value="TRACE">TRACE</option>
                               <option value="PATCH">PATCH</option>
                              
                           </MethodSelect>
                       </RequestSection>

                       <RequestSection wid>
                           <MethodInput 
                               type="text"
                               placeholder="URL"
                               name="url"
                               value={url}
                               onChange={handleChange} 
                               />
                       </RequestSection>

                       <RequestSection Bwid>
                           <MethodButton onClick={handleSubmit}><ChevronRightCircle/></MethodButton>
                       </RequestSection>
                   </RequestForm>

     
                   

                   </RequestLayout>
               </article>
               
               <article>                 
                   <RequestLayout>
                       Response

                       <article>
                        
                        {JSON.stringify(requestResponse)}
                                                  
                       </article>
                   </RequestLayout>
               </article>
           </Layout>
   
                    </Conatiner>
        </section>
    )
}

export default RestApiPage

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
    width:${props=>props.wid?'60%':props.Bwid?'10%':'30%'};
    height:60px;
    padding:10px 5px;

    @media all and (max-width: 768px) { 
        width:${props=>props.wid?'60%':props.Bwid?'15%':'25%'};
    }
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
    color:black;
`;

const MethodButton = styled.button`
    width:100%;
    height:100%;
    cursor:pointer;
`;