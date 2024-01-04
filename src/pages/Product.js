import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import {Badge, Button, Card, Col, Container, Row} from 'react-bootstrap';
import {ProductContext} from "../context/ProductContext";

const Product = () => {
    const {productSlug} = useParams();

    const products = useContext(ProductContext);

    if (!products) {
        return <div>Loading...</div>;
    }

    const product = products.find((p) => p.slug === productSlug);

    if (!product) {
        return <div>Product not found!</div>;
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h2>{product.title}</h2>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Img variant="top" src={product.thumb} alt={product.title}/>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                <strong>Price:</strong> {product.price} zł
                            </Card.Text>
                            <Card.Text>
                                <strong>Colors:</strong>{' '}
                                {product.colors.map((color) => (
                                    <Badge key={color.slug} variant="light"
                                           style={{backgroundColor: color.name, marginRight: '0.5em'}}>
                                        {color.name}
                                    </Badge>
                                ))}
                            </Card.Text>
                            <Card.Text>
                                <strong>Specials:</strong> {product.specials.join(', ')}
                            </Card.Text>
                            <Button variant="primary">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h4>Product Variations</h4>
                    <Row>
                        {product.variations.map((variation) => (
                            <Col key={variation.variation_id} md={4} className="mb-3">
                                <Card>
                                    <Card.Img variant="top" src={variation.image} alt={product.title}/>
                                    <Card.Body>
                                        <Card.Text>
                                            <strong>Price:</strong> {variation.price} zł
                                        </Card.Text>
                                        <Card.Text>
                                            <strong>Color:</strong> {variation.term.name}
                                        </Card.Text>
                                        {/* Add more details based on your product data */}
                                        <Button variant="primary">Select</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Product;
