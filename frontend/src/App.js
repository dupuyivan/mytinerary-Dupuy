import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css"
import{ BrowserRouter, Switch , Route, Redirect  } from "react-router-dom"

import { Home } from "./pages/Home"
import Cities from "./pages/Cities"
import City from "./pages/City"
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"
import { ToastProvider } from 'react-toast-notifications';



function App() {
  return (
    <>
    <ToastProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route  path="/cities" component={ Cities } />
        <Route  path="/city/:id" component={ City } />
        <Route  path="/signup" component={ SignUp } />
        <Route  path="/login" component={ LogIn } />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
    </ToastProvider>
    </>
  );
}   

export default App;
