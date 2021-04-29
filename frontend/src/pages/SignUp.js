import Header from "../components/Header"
import Footer from "../components/Footer"
import { Form, Button,Col, InputGroup, vali } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { useEffect, useState } from "react"
import authAction from "../redux/actions/authAction"

const SignUp = ({ countries,fetchCountries,submitForm })=>{
  const [ dataForm, setdatosForm ] = useState({ name:"", last_name:"", country:"",picture:"", email:"",password:"" })

  useEffect(()=>{ 
    fetchCountries() 
  },[])

  const leerForm = e =>{
    setdatosForm({
        ...dataForm,
        [e.target.name]: e.target.value
      })
  }
  const submit = (e)=>{
    e.preventDefault()
    e.stopPropagation()
    submitForm( "signup" ,dataForm )
  }

  
return<>
        <Header />
            <div className="main form-auth ">
            <div>
                <h3 className="text-center">Sign Up</h3>
                <Form onSubmit={ submit }>
                        <Form.Group controlId="validate1" >
                            <Form.Label>Name </Form.Label>
                            <Form.Control type="text" required placeholder="Enter your name" name="name" onChange={ leerForm } />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Last name </Form.Label>
                            <Form.Control type="text" required placeholder="Enter your last name" name="last_name" onChange={ leerForm }/>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Picture </Form.Label>
                            <Form.Control type="text" placeholder="Enter the url of your picture" name="picture" onChange={ leerForm }/>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>Country</Form.Label>
                          <Form.Control as="select" required name="country" onChange={ leerForm } >
                              <option >Choose your country</option>
                              { countries.length && countries.map( country => <option key={ country.name } value={ country.name } >{ country.name }</option> ) }
                          </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" required name="email" placeholder="Email" onChange={ leerForm } />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" required name="password" placeholder="Password" onChange={ leerForm } />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit" className="mt-2 w-100">Sign Up</Button>
                    </Form>
                        <div>
                            <div className="mt-2 d-flex align-items-center">
                                <h6>Or you can sign up with Google</h6>
                                Boton google
                            </div>

                            <div className="mt-2 d-flex align-items-center">
                                <h6>Already have an account?</h6> 
                                <NavLink className="ml-1 mb-1 btn btn-warning text-dark"  to="/login">Sign in here!</NavLink> 
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

