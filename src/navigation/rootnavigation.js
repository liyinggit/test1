import React from 'react';
import {BrowserRouter, Route ,Switch} from 'react-router-dom';
import {Provider} from 'mobx-react';
import App from "../App";
import store from "../store";
import Login from "../component/login";
import NoMatch from "../component/404";

class Rootnavigation extends React.Component{

    render(){
        return(
            <Provider {...store}>
                <BrowserRouter basename='/'>
                    <Switch>
                        <Route exact path='/' component={App}/>
                        <Route path='/login' component={Login}/>
                        <Route component={NoMatch}/>
                    </Switch>

                </BrowserRouter>

            </Provider>
        );
    }
}


export default Rootnavigation;
