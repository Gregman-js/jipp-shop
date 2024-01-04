import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Product from "./pages/Product";
import Summary from "./pages/Summary";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {ProductProvider} from "./context/ProductContext";
import Header from "./components/Header";

function App() {
    return (
        <ProductProvider>
            <Router>
                <main>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/product/:productSlug" element={<Product/>}/>
                        <Route path="/summary/:price" element={<Summary/>}/>
                        <Route path="*" element={<ErrorPage/>}/>
                    </Routes>
                </main>
            </Router>
        </ProductProvider>
    );
}

export default App;
