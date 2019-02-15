import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import NameForm from "./component/reactexcesice/NameForm";

/*function Root(){
    return(
        <Rootnavigation/>
    )
}*/


ReactDOM.render(
    <NameForm/>,
    document.getElementById('root')
);


serviceWorker.unregister();
