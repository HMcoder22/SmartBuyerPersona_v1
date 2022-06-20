import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductFormPage from './product_form_page.js'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import ToolHomePage from './ToolHomepage.js';
import Dashboard from './Dashboard';
import Persona from './persona';
import CopyGenerator from './CopyGenerator';
import ResultPage from './ResultPage';
import './CSS/nav.css';
import './CSS/demo_form.css';
import './CSS/transition_tools.css';
import './CSS/tools_homepage.css';
import './CSS/dashboard.css';
import './CSS/chart.css';
import './CSS/persona.css';
import './CSS/copy_generator.css';
import './CSS/result_page.css'


const root = ReactDOM.createRoot(document.getElementById('main_home'));
root.render(
    <Router>
        <Routes>
            <Route path='/home' exact element={<App></App>}>
            </Route>
            <Route path='/billtrancon12/SmartBuyerPersonaReact.git' exact element={<App></App>}>
            </Route>
            <Route path='/' exact element={<App></App>}>
            </Route>
            <Route path='/product_form' exact element={<ProductFormPage></ProductFormPage>}>
            </Route>
            {/* <Route path='/contact' exact element={()=>{
                window.location.href = "https://smartbuyerpersona.com/";
                return null;
            }}></Route> */}
            {/* <Route path='/about-us' exact render={() =>{
                window.location.href= "https://smartbuyerpersona.com/about-us";
            }}></Route>
            <Route path='/homepage' exact render={() =>{
                window.location.href = "https://smartbuyerpersona.com";
            }}></Route> */}
            <Route path='/tool_homepage' exact element={<ToolHomePage></ToolHomePage>}>
            </Route>
            <Route path='/dashboard' exact element={<Dashboard></Dashboard>}>
            </Route>
            <Route path='/persona' exact element={<Persona></Persona>}>
            </Route>
            <Route path='/facebook' exact render={() => {
                window.location.href = "https://www.facebook.com/";
            }}></Route>
            <Route path='/twitter' exact render={() => {
                window.location.href = "https://www.twitter.com/";
            }}></Route>
            <Route path='/instagram' exact render={() => {
                window.location.href = "https://www.instagram.com/";
            }}></Route>
            <Route path='/copy_generator' exact element={<CopyGenerator></CopyGenerator>}>
            </Route>
            <Route path='/results' exact element={<ResultPage></ResultPage>}>
            </Route>
        </Routes>
    </Router>
);

export default root;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
