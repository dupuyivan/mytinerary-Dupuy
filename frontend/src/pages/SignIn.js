import Header from "../components/Header"
import Footer from "../components/Footer"
import { Form, Button ,Col } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { connect } from "react-redux"
import authAction from "../redux/actions/authAction"
import { useToasts } from "react-toast-notifications"
import GoogleLogin from 'react-google-login';

const LogIn= ({ submitForm, history })=>{
    const [ datosForm, setDatosForm] = useState({ email:"", password:"" })
    const [ isInvalid , setIsInvalid] = useState(false)
    const { addToast } = useToasts()

    let readFills = e=>{
        setDatosForm({
        ...datosForm,
        [e.target.name]:e.target.value
        })
    }

    const submit = async e =>{ 
        e.preventDefault()
        e.stopPropagation()
        if( !e.currentTarget.checkValidity() ){ return setIsInvalid(true)  }
        const res = await submitForm( "signin", datosForm )
        addToast( res.message , { appearance:res.type , autoDismiss:true })

        res.type === "success" && history.push("/")
    } 

    const google = async ({ profileObj }) =>{
        let googleUser ={
            email: profileObj.email,
            password:"G"+ profileObj.googleId,
        }
       const res = await submitForm( "signin" ,googleUser )
        addToast( res.message , { appearance:res.type , autoDismiss:true })
        
        res.type === "success" && history.push("/")
      }

    
return<>
            <Header />
                <div className="main form-auth ">
                    <div >
                        <div>
                            <h3 className="text-center nada">Sign In</h3>
                            <Form noValidate validated={isInvalid} onSubmit={submit}>
                            <Form.Row>

                            <Form.Group as={Col} md="12" controlId="validationCustom01">
                                <Form.Label>Email</Form.Label>
                                <Form.Control required type="email" name="email" onChange={ readFills } placeholder="Email" />
                                <Form.Control.Feedback>Great!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationCustom02">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required type="password" name="password" onChange={ readFills } placeholder="Enter password" />
                                <Form.Control.Feedback>Great!</Form.Control.Feedback>
                            </Form.Group>
                                    
                            </Form.Row>
                            <Button type="submit" className="w-100 mt-2">Sign In</Button>
                            </Form>
                        </div>
                        <div>
                            <div className="mt-2 d-flex flex-wrap align-items-center">
                                <h6>Or you can sign in with your Google account</h6>
                                <GoogleLogin
                                    clientId="418543337270-33q9p0j27pdhpkentid3tte7ppr43rek.apps.googleusercontent.com"
                                    buttonText="Sign In"
                                    onSuccess={ google }
                                    onFailure={ google }
                                    cookiePolicy={'single_host_origin'}
                                />
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

/* <div>
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
                        </div> */

