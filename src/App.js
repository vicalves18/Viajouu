import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Passagens from "./pages/Menu";
import Sobre from "./pages/About";
import Contato from "./pages/Contact";
import Cliente from "./pages/Cliente";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Passagens} />
          <Route path="/about" exact component={Sobre} />
          <Route path="/contact" exact component={Contato} />
          <Route path="/cliente" exact component={Cliente}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
