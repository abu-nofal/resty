import React from 'react';
import axios from 'axios';
import './app.scss';
import { useState ,useEffect } from 'react';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function  App (props) {

  const [requestParams,setRequestParams]=useState({})
  const [result,setResult]=useState([])
  const [render,setRender]=useState('')

   const callApi = (requestParams) => {
    // mock output
    console.log(requestParams);
    let reqBody=requestParams.reqBody
    let method=requestParams.method
    let url=requestParams.url
    if(method=='post'||method=='put'){
      axios[method](url,reqBody).then(results=>{
        setResult([...result,results.data])
        setRequestParams({...requestParams,requestParams})
        //  requestParams:requestParams
      })
    }else{
      axios[method](url).then(results=>{
        setResult([...result,results.data])
        setRequestParams({...requestParams,requestParams})
        console.log(result);
      })
    }
     
  }

  useEffect(() => {

      setRender(`method : ${requestParams.method}, URL : ${requestParams.url}`)
    })

 
    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <div>i run from useEffect : {render}</div>
        <Form handleApiCall={callApi} />
        <Results data={result} />
        <Footer />
      </React.Fragment>
    );
 
}

export default App;
