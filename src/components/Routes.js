import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from "./home/Home";
import About from "./about/About";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import Courses from "./courses/Courses";

const Routes = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/courses" component={Courses} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    
    )
}

export default Routes;