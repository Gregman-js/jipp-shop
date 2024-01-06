import {useContext} from "react";
import {Container, Row} from "react-bootstrap";
import ProductItem from "../components/ProductItem";
import {ProductContext} from "../context/ProductContext";

const Home = () => {
    const products = useContext(ProductContext);

    return (
        <Container>
            <Row>
                {
                    products.map((el) => <ProductItem data={el} key={el.slug}/>)
                }
            </Row>
        </Container>
    );
};

export default Home;
