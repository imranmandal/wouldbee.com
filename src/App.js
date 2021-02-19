import Header from "./component/Header";
import Detail from "./component/Detail";
import Footer from "./component/Footer";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import About from "./component/About";
import FAQ from "./component/FAQ/FAQ";
import ContactUs from './component/Contact_Component/Contact';
import WBTelegram from './component/TelegramPageComponent/WBTelegram'
import Privacy from './component/Privacy/Privacy'
import Terms from './component/Terms/Terms'
import Navbar from "./component/Navbar";

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

          <Route path="/WB-telegram">
            <WBTelegram />
          </Route>
          
          <Route path="/privacy">
            <Privacy />
          </Route>
          
          <Route path="/terms">
            <Terms />
          </Route>
          

          </Switch>
          <Footer />
        </Router>
      </div>
    
  );
}

export default App;
