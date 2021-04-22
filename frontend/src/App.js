import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css"
import{ BrowserRouter, Switch , Route, Redirect  } from "react-router-dom"

import { Home } from "./pages/Home"
import Cities from "./pages/Cities"
import City from "./pages/City"

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cities" component={ Cities } />
        <Route exact path="/city/:id" component={ City } />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
    </>
  );
}   

export default App;
