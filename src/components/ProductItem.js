import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToBasket} from "../reducers/basketReducer";

const ProductItem = ({data}) => {
    const dispatch = useDispatch();

    const clickHandler = (e) => {
        e.preventDefault();
        dispatch(addToBasket(data));
    };

    return (

        <Col className={"mb-4 col-6 col-md-3"}>
            <Card className={"h-100"}>
                <div className={"d-flex flex-grow-1"}>
                    <Link to={`/product/${data.slug}`} className={"d-inline-flex"}>
                        <Card.Img variant="top" src={data.thumb} className={"flex-grow-1"}
                                  style={{objectFit: "contain"}}/>
                    </Link>
                </div>
                <Card.Body className={"flex-grow-0"}>

                    <Card.Title>
                        <Link className={"text-decoration-none text-black"} to={`/product/${data.slug}`}>
                            {data.title}
                        </Link>
                    </Card.Title>
                    <Card.Text>
                        <Link className={"text-decoration-none text-black"} to={`/product/${data.slug}`}>
                            Cena: {data.price} zł
                        </Link>
                    </Card.Text>
                    <Button variant="primary" onClick={clickHandler}>Dodaj do koszyka</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ProductItem;
