import {useContext, useState} from "react";
import {Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom"
import ProductItem from "../components/ProductItem";
import {ProductContext} from "../context/ProductContext";

const Home = () => {
    const [basket, setBasket] = useState([]);

    const products = useContext(ProductContext);

    return (
        <Container>
            <Row>
                <ul>
                    {
                        basket.map((el, i) => <li key={i}>{el.title}</li>)
                    }
                </ul>
                {
                    Boolean(basket.length)
                    &&
                    <>
                        <h2 style={{color: "magenta"}}>Suma: {basket.reduce((prev, curr) => prev + curr.price, 0)} zł</h2>
                        <Link to={`/summary/${basket.reduce((prev, curr) => prev + curr.price, 0)}`}>Podsumowanie</Link>
                    </>
                }
            </Row>
            <Row>
                {
                    products.map((el) => <ProductItem data={el} addToBasket={setBasket} key={el.slug}/>)
                }
            </Row>
        </Container>
    );
};

export default Home;
