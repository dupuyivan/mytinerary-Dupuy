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
    const [ dataForm, setDataForm] = useState({ email:"", password:"" })
    const [ isInvalid , setIsInvalid] = useState(false)
    const { addToast } = useToasts()

    let readFills = e=>{
        setDataForm({
        ...dataForm,
        [e.target.name]:e.target.value
        })
    }

    const submit = async e =>{ 
        e.preventDefault()
        e.stopPropagation()
        if( !e.currentTarget.checkValidity() ){ return setIsInvalid(true)  }

        showToast( await submitForm( "signin", dataForm ) )
    } 

    const google = async ({ profileObj }) =>{
        let googleUser ={
            email: profileObj.email,
            password:"G"+ profileObj.googleId,
        }
        showToast( await submitForm( "signin" ,googleUser ) ) 
    }

    const showToast =({ message, type })=>{
        addToast( message, { appearance: type , autoDismiss:true })
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
                                <NavLink className="ml-1 mb-1 text-info" to="/signup">Sign up here!</NavLink> 
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


