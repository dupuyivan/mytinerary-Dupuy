import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css"
import { Home } from "./pages/Home"
import Cities from "./pages/Cities"
import{ BrowserRouter, Switch , Route, Redirect  } from "react-router-dom"

function App() {
  return (
    <>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/cities" component={ Cities } />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
    </>
  );
}   

export default App;
