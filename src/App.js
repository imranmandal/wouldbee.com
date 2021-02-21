import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Detail from "./Components/Detail";
import Footer from "./Components/Footer";
import About from "./Components/About";
import FAQ from "./Components/FAQ/FAQ";
import ContactUs from './Components/Contact/Contact';
import WBTelegram from './Components/Telegram/Telegram'
import Privacy from './Components/Privacy/Privacy'
import Terms from './Components/Terms/Terms'
import NotFound from "./Components/NotFound";

function App() {
  return (
    
    <div className="App">
        <Router>
          <Switch>
          
          <Route exact path="/" >
            <Header />
            <Detail />            
          </Route>

          <Route exact path="/about">  
            <About />
          </Route>
            
          <Route exact path="/FAQ">
            <FAQ />
          </Route>

          <Route exact path="/contact">
            <ContactUs />
          </Route>

          <Route exact path="/telegram">
            <WBTelegram />
          </Route>
          
          <Route path="/privacy">
            <Privacy />
          </Route>
          
          <Route exact path="/terms">
            <Terms />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
          

          </Switch>
          <Footer />
        </Router>
      </div>
    
  );
}

export default App;
