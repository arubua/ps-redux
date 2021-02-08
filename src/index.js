import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./components/Routes";
import "./index.css";
import configureStore from './redux/configureStore';
import { Provider as ReduxProvider } from 'react-redux';

const store = configureStore();

function App(){
    return (
        <ReduxProvider store={store}>
            <Router>
                <Routes></Routes>
            </Router>
        </ReduxProvider>
        
    )
}

ReactDOM.render(<App/>, document.querySelector("#app"));