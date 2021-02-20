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
import NotFound from "./component/NotFound";

function App() {
  return (
    
    <div className="App">
      <div className="App-body">
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
      </div>
    
  );
}

export default App;
