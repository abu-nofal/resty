import React from 'react';
import './result.scss';
function Results (props){

    return (
      <section>
        <div id="ss">
        <pre >{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
        </div>
      </section>
    );

}

export default Results;
