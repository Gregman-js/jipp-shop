import * as Icon from 'react-bootstrap-icons';
import {NavLink, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {Badge} from "react-bootstrap";

const Header = () => {
    const basket = useSelector((state) => state.basket);
    const itemsCount = basket.length;
    const location = useLocation();

    const isProductsTabActive = location.pathname === "/";
    const isSummaryTabActive = location.pathname === "/summary";

    return (
        <header className={"mb-4"}>
            <div className="px-3 py-2 text-bg-dark border-bottom">
                <div className="container">
                    <div
                        className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <NavLink to={"/"}
                                 className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-decoration-none text-white">
                            <Icon.Shop className={"bi d-block mx-auto mb-1"} size={32}/>
                        </NavLink>

                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li>
                                <NavLink to={"/"}
                                         className={({isActive}) => "nav-link " + (isActive ? "text-white" : "text-secondary")}>
                                    <Icon.House className={"bi d-block mx-auto mb-1"} size={24}/>
                                    Produkty
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/summary"}
                                         className={({isActive}) => "nav-link " + (isActive ? "text-white" : "text-secondary")}>
                                    <div className="position-relative">
                                        <Icon.Cart className={"bi d-block mx-auto mb-1"} size={24}/>
                                        {itemsCount > 0 && (
                                            <Badge pill bg="danger"
                                                   className="ml-1 position-absolute top-0 start-100 translate-middle">
                                                {itemsCount}
                                            </Badge>
                                        )}
                                    </div>
                                    Koszyk
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
