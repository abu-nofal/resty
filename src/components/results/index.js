import React from 'react';
import Loading from '../loading/index';
import './result.scss';
function Results (props){

    return (
      <section>
        <div id="ss">
        <pre >{props.data ? JSON.stringify(props.data, undefined, 2) :<Loading/> }</pre>
        </div>
      </section>
    );

}

export default Results;
