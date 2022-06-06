import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductFormPage from './product_form_page.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import ToolHomePage from './ToolHomepage.js';
import Dashboard from './Dashboard';
import './CSS/nav.css'
import './CSS/demo_form.css'
import './CSS/transition_tools.css'
import './CSS/tools_homepage.css'
import './CSS/dashboard.css'
import './CSS/chart.css'

const root = ReactDOM.createRoot(document.getElementById('main_home'));
root.render(
    <Router>
        <Switch>
            <Route path={['/', '/home','/billtrancon12/SmartBuyerPersonaReact.git']} exact>
                <App></App>
            </Route>
            <Route path='/product_form' exact>
                <ProductFormPage></ProductFormPage>
            </Route>
            <Route path={['/contact', '/about-us']} exact render={() =>{
                window.location.href= "https://smartbuyerpersona.com/about-us";
            }}></Route>
            <Route path='/homepage' exact render={() =>{
                window.location.href = "https://smartbuyerpersona.com";
            }}></Route>
            <Route path='/tool_homepage' exact>
                <ToolHomePage></ToolHomePage>
            </Route>
            <Route path='/dashboard' exact>
                <Dashboard></Dashboard>
            </Route>
            <Route path='/persona'>
                <Dashboard></Dashboard>
            </Route>
        </Switch>
    </Router>
);

export default root;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
