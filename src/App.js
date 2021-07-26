import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./reset.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/watch/:id">
            <Watch />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
