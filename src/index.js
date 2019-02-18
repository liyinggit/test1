import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Rootnavigation from "../src/navigation/rootnavigation";

function Root(){
    return(
        <Rootnavigation/>
    )
}


ReactDOM.render(
    Root(),
    document.getElementById('root')
);


serviceWorker.unregister();
