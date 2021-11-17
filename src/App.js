import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './pages/Checkout'
import Login from './pages/Login';
import Register from './pages/Register'
import MenShoes from './components/Shoes/MenShoes';
import WomenShoes from './components/Shoes/WomenShoes';
import Kids from './components/Shoes/Kids';
import ProductDetails from './components/ProductDetails';
import Me from './components/Shoes/Me';
import MenShoes1 from './components/Shoes/MenShoes1';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/shoes/men" component={MenShoes} />
            <Route exact path="/shoes/women" component={WomenShoes} />
            <Route exact path="/shoes/kids" component={Kids} />
            <Route exact path="/products" component={MenShoes1} />
            <Route exact path="/products/:id" component={ProductDetails} />
            <Route exact path="/cart/:id?" component={Checkout} />
            {/* <Route exact path="/product/:id" component={Me} /> */}
          </Switch>
        </div>
      </Router >
    </div >
  );
}

export default App;
