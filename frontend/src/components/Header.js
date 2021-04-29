import { Navbar , Nav  } from "react-bootstrap"
import { Dropdown } from "react-bootstrap"
import { Link,NavLink } from "react-router-dom"
import { connect } from "react-redux"
import authAction from "../redux/actions/authAction"

const Header = ({ logo = true ,userLogued ,unlogUser})=>{
    
    return <header className={ logo ?"black": "" }>
            <div>
                <Dropdown >
                    <Dropdown.Toggle variant="" className="text-white d-flex align-items-center" >
                    { userLogued.picture 
                        ? <div className="picture-user" style={{ backgroundImage:`url('${ userLogued.picture }')` }} ></div>
                        : <div className="picture-user bg-white" style={{ backgroundImage:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTlBWrqkcAQADicgAlj-cH4f3sRrIzHcee7w&usqp=CAU')` }} ></div>
                        }
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="d-flex flex-column ">
                        { userLogued.token 
                        ? <h6 style={{ cursor:"pointer" }} onClick={ unlogUser } >Log out</h6>
                        : <>
                            <NavLink to="/signup" className="text-dark text-center"><h6>Sign Up</h6></NavLink>
                            <NavLink to="/login" className="text-dark pr-2 text-center"><h6>Log in</h6></NavLink> 
                          </>
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            { 
                logo && 
                <div>
                    <img src={ process.cwd() + "traveller.svg" } alt="logo" className="logo lo-cities " />
                    <h1 className="text-white mt-2 tx-cities">Mytinerary</h1>
                </div>
            }
            <div>
                <Navbar expand="md" variant="dark" className="menu" >
                    <Navbar.Brand></Navbar.Brand>
                        <Navbar.Toggle />
                            <Navbar.Collapse >
                                <Nav className="mr-auto nav">
                                    <Link to="/">
                                        <h3><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                            <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                            </svg> Home
                                        </h3>
                                    </Link>
                                    <Link to="/cities">
                                        <h3><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-compass" viewBox="0 0 16 16">
                                            <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                                            <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
                                            </svg> Cities
                                        </h3>
                                    </Link>
                                </Nav>
                            </Navbar.Collapse>
                </Navbar>
            </div>
        </header>
}

const mapStateToProps = state =>{
    return{
        userLogued: state.authReducer.userLogued
    }
}

const mapDispatchToProps={
    userLoguedFunction: authAction.userLogued,
    unlogUser: authAction.unlogUser
}

export default  connect(mapStateToProps,mapDispatchToProps) (Header)