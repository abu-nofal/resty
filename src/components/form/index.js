import React, { useState } from 'react';

import './form.scss';


function Form (props) {
  
  const [method,setMethod]=useState('get')
  const [url,setUrl]=useState('')
  const [reqBody,setReqBody]=useState({})

  const itemSelect=(e)=>{
    setMethod(e.target.value)
  }

  const urlHandler=(e)=>{
    setUrl(e.target.value)
  }
  const reqBodyHandler=(e)=>{
    setReqBody(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
  
    const formData = {
      method:method,
      url: url,
      reqBody:reqBody
    };
   props.handleApiCall(formData);
  }


    return (
      <>
      

     
        <form onSubmit={handleSubmit}>
        <label className="methods" htmlFor='select'  > select the method you want </label>
            <select name="select" id='select' onChange={itemSelect}> 
            <option id="get" value='get'>GET</option>
            <option id="post" value='post'>POST</option>
            <option id="put" value='put'>PUT</option>
            <option id="delete" value='delete'>DELETE</option>
            </select>
           
            {
            (method=='post'||method=='put')?<textarea id="text" name="text" rows="4" cols="50" defaultValue=' {"object":"write the json for post ,put method,,,"}' 
            onChange={reqBodyHandler}>
            </textarea>:''
          }
          <label >
            <span>URL: </span>
            <input name='url' type='text' id='url' onChange={urlHandler}/>
            <button type="submit">GO!</button>
          </label>
          
          
          
        </form>
       
      </>
    );

}

export default Form;