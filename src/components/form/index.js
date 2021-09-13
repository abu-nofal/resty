import React from 'react';

import './form.scss';


function Form (props) {

  const handleSubmit = e => {
    e.preventDefault();
    let method=e.target.select.value
    let url=e.target.url.value
    let reqBody=e.target.text.value
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
        <label className="methods" for='select' > select hte method you want </label>
            <select name="select" id='select'> 
            <option id="get" value='get'>GET</option>
            <option id="post" value='post'>POST</option>
            <option id="put" value='put'>PUT</option>
            <option id="delete" value='delete'>DELETE</option>
            </select>
           
          <label >
            <span>URL: </span>
            <input name='url' type='text' id='url'/>
            <button type="submit">GO!</button>
          </label>
          <textarea id="text" name="text" rows="4" cols="50">
              write the json for post ,put method,,,
              
              for test get :https://pokeapi.co/api/v2/pokemon
            </textarea>
          
        </form>
       
      </>
    );

}

export default Form;