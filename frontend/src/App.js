import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css"
import { Home } from "./pages/home"
import{ BrowserRouter, Switch , Route  } from "react-router-dom"
import Cities from "./pages/cities"

function App() {
  return (
    <>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/cities" component={ Cities } />
    </Switch>
  </BrowserRouter>
    </>
  );
}   

export default App;
