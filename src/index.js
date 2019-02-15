import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Calculator from "./component/reactexcesice/temperature/Calculator";

/*function Root(){
    return(
        <Rootnavigation/>
    )
}*/


ReactDOM.render(
    <Calculator/>,
    document.getElementById('root')
);


serviceWorker.unregister();
