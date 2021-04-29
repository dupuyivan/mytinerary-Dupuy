import Header from "../components/Header"
import Footer from "../components/Footer"
import { Form, Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { connect } from "react-redux"
import authAction from "../redux/actions/authAction"

const LogIn= ({ submitForm })=>{
    const [ datosForm, setDatosForm] = useState({ email:"", password:"" })
 
    let readFills = e=>{
        setDatosForm({
        ...datosForm,
        [e.target.name]:e.target.value
        })
    }

    const submit = e=>{ 
        e.preventDefault();
        e.stopPropagation()
        submitForm( "signin", datosForm ) 
    } 
    
return<>
            <Header />
                <div className="main form-auth ">
                    <div style={{ display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
                        <div>
                            <h3 className="text-center">Sign In</h3>
                            <Form onSubmit={ submit }>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" required name="email" onChange={ readFills } placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" required name="password" onChange={ readFills } placeholder="Enter password" />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="mt-2 w-100">Sign In</Button>
                            </Form>
                        </div>
            
                        <div >
                        
                            <div className="mt-2 d-flex align-items-center">
                                <h6>Or you can sign in with your Google account</h6>
                                Boton google
                            </div>

                            <div className="mt-2 d-flex align-items-center">
                                <h6>Don't have an account?</h6> 
                                <NavLink className="ml-1 mb-1 btn btn-warning text-dark" to="/signup">Sign up here!</NavLink> 
                            </div>
                        </div>
                    </div> 
                </div>
            <Footer/>          
</>
}


const mapDispatchToProps ={
    submitForm: authAction.submitForm
}


export default connect(null,mapDispatchToProps)(LogIn) 

