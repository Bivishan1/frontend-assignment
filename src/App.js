import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import ProductDetails from './components/ProductDetails';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>


    </Router>


  );
}

export default App;
