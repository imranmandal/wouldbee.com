import Header from "./component/Header";
import Detail from "./component/Detail";
import Footer from "./component/Footer";
import Copyright, {  } from "./component/Copyright";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import About from "./component/About";
import FAQ from "./component/FAQ/FAQ";
import ContactUs from './component/Contact_Component/Contact';
import ScrollToTop from "./component/ScrollToTop";

function App() {
  return (
    
      <div className="App">
        <ScrollToTop />
        <Router>
          <Switch>
            <Route exact path="/" >
              <ScrollToTop />
              <Header />
              <Detail />            
            </Route>

            <Route path="/about">
              <ScrollToTop />
              <About />
            </Route>
            
            <Route path="/FAQ">
              <ScrollToTop />
              <FAQ />
            </Route>

            <Route path="/contact-us">
              <ScrollToTop />
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
