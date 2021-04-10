import { Dropdown } from "react-bootstrap"


const header = ()=>{

    return(
        <header style={{ display:"flex", }}>

        <h1>header</h1>


        <div style={{ display:"flex", justifySelf:"flex-start", alignSelf: "center" }}>

            <Dropdown style={{ marginLeft:"0.5rem" }}>

                <Dropdown.Toggle variant="" id="dropdown-basic" style={{ color:"white" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle ml-1 " viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item >Sign Up</Dropdown.Item>
                    <Dropdown.Item >Log In</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>

        <nav style={{ display:"flex", marginLeft:"35%", marginTop:"2rem" ,color:"white"}}>

                <h3 style={{ marginLeft:"1rem" }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                </svg> Home</h3>
                
                <h3 style={{ marginLeft:"2rem" }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-compass" viewBox="0 0 16 16">
                <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
                </svg> Cities</h3>
        </nav>
          
        </header>
    )


}

export default header