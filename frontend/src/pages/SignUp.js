import Header from "../components/Header"
import Footer from "../components/Footer"
import { Form, Button,Col  } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { useEffect, useState } from "react"
import authAction from "../redux/actions/authAction"
import { useToasts } from "react-toast-notifications"
import GoogleLogin from 'react-google-login';

const SignUp = ({countries, fetchCountries,submitForm,history })=>{
  const [ dataForm, setdataForm ] = useState({ name:"", last_name:"", country:"",picture:"", email:"",password:"" })
  const [ isInvalid, setIsInvalid ] = useState(false)
  const { addToast } = useToasts()

  useEffect(()=>{ 
    fetchCountries()
    window.scrollTo(0,65)  
  },[fetchCountries])

  const readFills = e =>{
    setdataForm({
        ...dataForm,
        [e.target.name]: e.target.value
      })
  }

  const submit = async e =>{
    e.preventDefault()
    e.stopPropagation()
    if ( !e.currentTarget.checkValidity() ) { return setIsInvalid(true)  }
    showToast( await submitForm( "signup" ,dataForm ) )
  }

  const google = async ({ profileObj }) =>{
    let googleUser ={
        email: profileObj.email,
        password:"G"+ profileObj.googleId,
        name: profileObj.givenName,
        last_name: profileObj.familyName,
        picture:profileObj.imageUrl,
        country:"ninguno",
    }
    showToast( await submitForm( "signup" ,googleUser ) ) 
  }

  const showToast =({ message, type })=>{
    addToast( message, { appearance: type , autoDismiss:true })
  }

return<>
        <Header />
            <div className="main form-auth ">

            <div>
                <h3 className="text-center nada">Sign Up</h3>
                    <div>
                        <Form noValidate validated={isInvalid} onSubmit={submit}>
                            <Form.Row>
                                <Form.Group as={Col} md="12" >
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control required pattern="[a-zA-Z]{3,20}"  type="text" placeholder="First name"  name="name" onChange={ readFills } />
                                    <Form.Control.Feedback type="invalid">The name must have a minimum of 3 letters and a maximum of 20</Form.Control.Feedback>
                                    <Form.Control.Feedback>Great!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="12" >
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control required type="text" pattern="[a-zA-Z]{3,20}" placeholder="Last name" name="last_name" onChange={ readFills } />
                                    <Form.Control.Feedback type="invalid">The last name must have a minimum of 3 letters and a maximum of 20</Form.Control.Feedback>
                                    <Form.Control.Feedback>Great!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="12" >
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control as="select" autoFocus required name="country" onChange={ readFills } >
                                    <option></option>
                                    { countries.length && countries.map( country => <option key={ country.name } value={ country.name } >{ country.name }</option> ) }
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid"> Please choose a city </Form.Control.Feedback>
                                    <Form.Control.Feedback>Great!</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} md="12" >
                                    <Form.Label>Picture</Form.Label>
                                    <Form.Control required pattern="^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$" type="text" placeholder="Enter a url" name="picture" onChange={ readFills } />
                                    <Form.Control.Feedback type="invalid">Please enter a valid URL</Form.Control.Feedback>
                                    <Form.Control.Feedback>Great!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="12" >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
                                     onChange={ readFills } placeholder="Enter a email" required />
                                    <Form.Control.Feedback>Great!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Please enter a valid email</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="12" >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$"
                                     name="password" onChange={ readFills } placeholder="Enter a password" required />
                                    <Form.Control.Feedback>Great!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Minimum 3 letters and must contain a number</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                
                            <Button type="submit" className="w-100 mt-1">Sign Up</Button>
                        </Form>
                     </div>

                        <div>
                            <div className="mt-2 d-flex align-items-center">
                                <h6>Or you can sign up with Google</h6>
                                <GoogleLogin className="ml-2"
                                    clientId="418543337270-33q9p0j27pdhpkentid3tte7ppr43rek.apps.googleusercontent.com"
                                    buttonText="Sign Up"
                                    onSuccess={ google }
                                    onFailure={ google }
                                    cookiePolicy={'single_host_origin'}
                                />
                            </div>

                            <div className="mt-2 d-flex align-items-center">
                                <h6>Already have an account?</h6> 
                                <NavLink className="ml-1 mb-1 text-info"  to="/login">Sign in here!</NavLink> 
                            </div>
                        </div>
                </div>

            </div>
        <Footer/>
    </>
}

const mapStateToProps = state =>{
  return{
    countries: state.authReducer.countries
  }
}
const mapDispatchToProps ={
    fetchCountries: authAction.fetchCountries,
    submitForm:authAction.submitForm
}

export default connect (mapStateToProps,mapDispatchToProps)(SignUp)
