import React from 'react';
import axios from 'axios';
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      requestParams: {},
      result:[]
    };
  }

  callApi = (requestParams) => {
    // mock output
    console.log(requestParams);
    let reqBody=requestParams.reqBody
    let method=requestParams.method
    let url=requestParams.url
    if(method=='post'||method=='put'){
      axios[method](url,reqBody).then(result=>{
        this.setState({
          result:result.data,
          requestParams:requestParams
        })
      })
    }else{
      axios[method](url).then(result=>{
        this.setState({
          result:result.data,
          requestParams:requestParams
        })
        console.log(result);
      })
    }
     
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {this.state.requestParams.method}</div>
        <div>URL: {this.state.requestParams.url}</div>
        <Form handleApiCall={this.callApi} />
        <Results data={this.state.result} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
