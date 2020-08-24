import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Shop from './Shop';
import CommentDetail from './CommentDetail';

const Main = () => {
    return (
<Router>
<Switch>
<Route path="/" exact component={Home}/>
<Route path="/about" component={About}/>
<Route path="/shop" exact component={Shop}/>
<Route path="/shop/:id" component={CommentDetail}/>
</Switch>
</Router>
    );
}

export default Main;