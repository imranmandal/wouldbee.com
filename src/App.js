import Header from "./component/Header";
import Detail from "./component/Detail";
import Footer from "./component/Footer";
import Copyright, {  } from "./component/Copyright";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import About from "./component/About";
import FAQ from "./component/FAQ/FAQ";
import ContactUs from './component/Contact_Component/Contact';

function App() {
  return (
    
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" >
              <Header />
              <Detail />            
            </Route>

            <Route path="/about">
              <About />
            </Route>
            
            <Route path="/FAQ">
              <FAQ />
            </Route>

            <Route path="/contact-us">
              <ContactUs />
            </Route>

          </Switch>
          <Footer />
          <Copyright />
        </Router>
      </div>
    
  );
}

export default App;
