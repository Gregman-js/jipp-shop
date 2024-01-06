import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Product from "./pages/Product";
import Summary from "./pages/Summary";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {ProductProvider} from "./context/ProductContext";
import Header from "./components/Header";
import {Provider} from "react-redux";
import store from "./store";

function App() {
    return (
        <Provider store={store}>
            <ProductProvider>
                <Router>
                    <main>
                        <Header/>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/product/:productSlug" element={<Product/>}/>
                            <Route path="/summary" element={<Summary/>}/>
                            <Route path="*" element={<ErrorPage/>}/>
                        </Routes>
                    </main>
                </Router>
            </ProductProvider>
        </Provider>
    );
}

export default App;
