import React from "react";
import {Alert, Col, Container, Row, Table} from "react-bootstrap";
import {useSelector} from "react-redux";
import * as Icon from "react-bootstrap-icons";

const shippingCost = 10;

const SummaryPage = () => {
    const basket = useSelector((state) => state.basket);

    const groupedItems = basket.reduce((acc, item) => {
        const existingItem = acc.find((group) => group.product.slug === item.slug);

        if (existingItem) {
            existingItem.count += 1;
        } else {
            acc.push({product: item, count: 1});
        }

        return acc;
    }, []);

    const itemsCount = basket.length;

    const totalBasketSum = groupedItems.reduce((sum, group) => sum + group.product.price * group.count, 0);

    const totalSum = totalBasketSum + shippingCost;

    return (
        <div className="px-4 px-lg-0">
            <div className="pb-5">
                <Container>
                    <Row>
                        <Col lg={8} className="p-5 mb-5">
                            {itemsCount === 0 ? (
                                <Alert variant="info" className="text-center">
                                    No items in the basket.
                                </Alert>
                            ) : (
                                <Table responsive>
                                    <thead className={"bg-light"}>
                                    <tr>
                                        <th scope="col" className="border-0">
                                            <div className="p-2 px-3 text-uppercase">Produkt</div>
                                        </th>
                                        <th scope="col" className="border-0">
                                            <div className="py-2 text-uppercase">Cena</div>
                                        </th>
                                        <th scope="col" className="border-0">
                                            <div className="py-2 text-uppercase">Ilość</div>
                                        </th>
                                        <th scope="col" className="border-0">
                                            <div className="py-2 text-uppercase">Usuń</div>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {groupedItems.map((group, index) => (
                                        <tr key={index} className={"border-top"}>
                                            <th scope="row" className="border-0">
                                                <div className="p-2 d-flex flex-row">
                                                    <img src={group.product.thumb} alt="" width="70"
                                                         className="img-fluid rounded shadow-sm"
                                                         style={{objectFit: "contain"}}/>
                                                    <div className="ms-3 d-inline-block align-middle">
                                                        <h5 className="mb-0"><a href="#"
                                                                                className="text-dark d-inline-block align-middle text-decoration-none">{group.product.title}</a>
                                                        </h5>
                                                        {group.product.product_cat.length && <span
                                                            className="text-muted font-weight-normal font-italic d-block">Kategoria: {group.product.product_cat[0]}</span>}
                                                    </div>
                                                </div>
                                            </th>
                                            <td className="border-0 align-middle">
                                                <strong>{group.product.price} PLN</strong></td>
                                            <td className="border-0 align-middle"><strong>{group.count}</strong></td>
                                            <td className="border-0 align-middle"><a href="#" className="text-dark">
                                                <Icon.Trash size={16}/>
                                            </a></td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table>
                            )}
                        </Col>
                        <Col lg={4} className={"py-5 p-4"}>
                            <div className="bg-light px-4 py-3 text-uppercase font-weight-bold fw-bold">Podsumowanie
                            </div>
                            <div className="p-4">
                                <p className="font-italic mb-4">Koszty wysyłki i dodatkowe są obliczane na podstawie
                                    wprowadzonych wartości.</p>
                                <ul className="list-unstyled mb-4">
                                    <li className="d-flex justify-content-between py-3 border-bottom"><strong
                                        className="text-muted">Cena
                                        produktów </strong><strong>{totalBasketSum} PLN</strong></li>
                                    <li className="d-flex justify-content-between py-3 border-bottom"><strong
                                        className="text-muted">Cena wysyłki </strong><strong>{shippingCost} PLN</strong>
                                    </li>
                                    <li className="d-flex justify-content-between py-3 border-bottom"><strong
                                        className="text-muted">Total</strong>
                                        <h5 className="font-weight-bold">{totalSum} PLN</h5>
                                    </li>
                                </ul>
                                <a href={"https://www.youtube.com/watch?v=ZZ5LpwO-An4"}
                                   className="btn btn-dark btn-block rounded-pill py-2">Proceed to checkout</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default SummaryPage;
