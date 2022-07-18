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
import Login from './login';
import LoginRequirement from './component/loginRequirement';
import CreateAccount from './create_account';
import Verification from './verification';
import VerifySuccess from './component/verify_success';
import ForgotPassword from './forgot_password';
import EmailVerifcation from './email_verification';
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

// main home of application
root.render(
    <Router>
        <Routes>
            <Route path='/login' exact element={<Login></Login>}>
            </Route>
            <Route path='/create_account' exact element={<CreateAccount></CreateAccount>}></Route>
            <Route path='/forgot/password' exact element={<ForgotPassword></ForgotPassword>}></Route>
            <Route path='/forgot/password/email_verification' exact element={<EmailVerifcation></EmailVerifcation>}></Route>
            <Route path='/login/requirement' exact element={<LoginRequirement></LoginRequirement>}></Route>
            <Route path='/login/code_verify' exact element={<Verification></Verification>}></Route>
            <Route path='/login/code_verify/success' exact element={<VerifySuccess></VerifySuccess>}></Route>
            <Route path='/home' exact element={<App></App>}>
            </Route>
            <Route path='/' exact element={<App></App>}>
            </Route>
            <Route path='/billtrancon12/SmartBuyerPersonaReact.git' exact element={<App></App>}>
            </Route>
            <Route path='/welcome' exact element={<App></App>}>
            </Route>
            <Route path='/product_form' exact element={<ProductFormPage></ProductFormPage>}>
            </Route>
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
            <Route path='/*' exact element={
                <div className='result_not_found' style={{textAlign: "center"}}>
                    <span>404 Not Found</span>
                </div>
            }></Route>
        </Routes>
    </Router>
);
// }

export default root;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
