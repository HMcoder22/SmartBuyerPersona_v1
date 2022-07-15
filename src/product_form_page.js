import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import Nav from './component/nav';
import ProductForm from './component/product_form';
// import Transition from './component/transition';

class ProductFormPage extends Component {
    state = {  } 
    render() { 
        document.title = "Product Form"

        if(sessionStorage.getItem('loginSuccess')){
            return (
                <div className='App'>
                    <Nav></Nav>
                    <ProductForm></ProductForm>
                    <div className='footer'>
                        <div className='label_wrapper'><span className='label' id='label_copyright'>Copyright 2022</span></div>
                    </div>
                </div>
            );
        }
        else{
            return(
                <Navigate to='/login'></Navigate>
            )
        }
    }
}
 
export default ProductFormPage;