import React from 'react';
import { Route } from 'react-router-dom';
import App from "../App";


const Container = (props) => {
    return (
        <div>{props.children}</div>
    );
};

const routes = (
    <Route path="/" component={Container} >
        <Route path="/app" component={App} />
    </Route>
);

export default routes;
