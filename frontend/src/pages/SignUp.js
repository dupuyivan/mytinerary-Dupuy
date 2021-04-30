import Header from "../components/Header"
import Footer from "../components/Footer"
import { Form, Button,Col, InputGroup } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { useEffect, useState } from "react"
import authAction from "../redux/actions/authAction"
import { useToasts } from "react-toast-notifications"


const SignUp = ({ countries,fetchCountries,submitForm })=>{
  const [ dataForm, setdatosForm ] = useState({ name:"", last_name:"", country:"",picture:"", email:"",password:"" })
  const [ isInvalid, setIsInvalid ] = useState(false)
  const { addToast } = useToasts()

    const [ errors, setErrors ] = useState([])

  useEffect(()=>{ 
    fetchCountries() 
  },[])

  const readForm = e =>{
    setdatosForm({
        ...dataForm,
        [e.target.name]: e.target.value
      })
  }

  const submit = async (e)=>{
    e.preventDefault()
    e.stopPropagation()
    if ( !e.currentTarget.checkValidity() ) { return setIsInvalid(true)  }
    const res = await submitForm( "signup" ,dataForm )

   res.map( err => err )
    addToast( res.message , { appearance:res.type , autoDismiss:true })
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
                                    <Form.Control required pattern="[a-zA-Z]{3,20}"  type="text" placeholder="First name" name="name" onChange={ readForm } />
                                    <Form.Control.Feedback type="invalid">The name must have a minimum of 3 letters and a maximum of 20</Form.Control.Feedback>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="12" >
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control required type="text" pattern="[a-zA-Z]{3,20}" placeholder="Last name" name="last_name" onChange={ readForm } />
                                    <Form.Control.Feedback type="invalid">The name must have a minimum of 3 letters and a maximum of 20</Form.Control.Feedback>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="12" >
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control as="select" autoFocus required name="country" onChange={ readForm } >
                                    <option  ></option>
                                    { countries.length && countries.map( country => <option key={ country.name } value={ country.name } >{ country.name }</option> ) }
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid"> Please choose a city </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} md="12" >
                                    <Form.Label>Picture</Form.Label>
                                    <Form.Control required pattern="^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$" type="text" placeholder="Enter a url" name="picture" onChange={ readForm } />
                                    <Form.Control.Feedback type="invalid">Please enter a valid url</Form.Control.Feedback>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="12" >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$" onChange={ readForm } placeholder="Enter a email" required />
                                    <Form.Control.Feedback type="invalid">Please enter a valid email</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="12" >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" minLength={4} name="password" onChange={ readForm } placeholder="Enter a password" required />
                                    <Form.Control.Feedback type="invalid">Please enter a valid password</Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                
                            <Button type="submit" className="w-100 mt-1">Sing Up</Button>
                        </Form>
                     </div>

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


/*  <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        placeholder="Bill"
                        {...register("firstName", {
                        required: "this is a required",
                        maxLength: {
                            value: 2,
                            message: "Max length is 2"
                        }
                        })}
                    />
                    {errors.firstName && <p>{errors.firstName.message}</p>}

                    <label htmlFor="lastName">Last Name</label>
                    <input
                        placeholder="Luo"
                        {...register("lastName", {
                        required: "this is required",
                        minLength: {
                            value: 2,
                            message: "Min length is 2"
                        }
                        })}
                    />
                    {errors.lastName && <p>{errors.lastName.message}</p>}

                    <label htmlFor="email">Email</label>
                    <input
                        placeholder="bluebill1049@hotmail.com"
                        type="text"
                        {...register("email", {
                        required: "this is required",
                        pattern: {
                            value: /^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                            message: "Invalid email address"
                        }
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                    <input type="submit" />
                    </form> */





/* <div>
                <h3 className="text-center">Sign Up</h3>

                    <div>
                        <Form noValidate validated={isInvalid} onSubmit={submit}>
                            <Form.Row>
                                <Form.Group as={Col} md="12" >
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control required minLength={ 3 } maxLength={ 20 } type="text" placeholder="First name" name="name" onChange={ readForm } />
                                    <Form.Control.Feedback type="invalid">The name must have a minimum of 3 letters and a maximum of 20</Form.Control.Feedback>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="validationCustom02">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control required type="text" minLength={ 3 } maxLength={ 20 } placeholder="Last name" name="last_name" onChange={ readForm } />
                                    <Form.Control.Feedback type="invalid">The name must have a minimum of 3 letters and a maximum of 20</Form.Control.Feedback>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="exampleForm.ControlSelect2">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control as="select" required name="country" onChange={ readForm } >
                                    <option >Choose your country</option>
                                    { countries.length && countries.map( country => <option key={ country.name } value={ country.name } >{ country.name }</option> ) }
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid"> Please choose a city </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationCustom03">
                                <Form.Label>Picture</Form.Label>
                                <Form.Control type="text" name="picture" onChange={ readForm } placeholder="Enter a picture URL" />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid URL.
                                </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="validationCustom04">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" onChange={ readForm } placeholder="Enter a email" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid email.
                                </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="12" controlId="validationCustom05">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" onChange={ readForm } placeholder="Enter a password" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid password.
                                </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                
                            <Button type="submit" className="w-100">Sing Up</Button>
                        </Form>
                     </div>

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
                </div> */