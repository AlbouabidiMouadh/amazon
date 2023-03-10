import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">amazon</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen/>}/>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
          
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
