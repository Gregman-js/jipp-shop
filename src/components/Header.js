import * as Icon from 'react-bootstrap-icons';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={"mb-4"}>
            <div className="px-3 py-2 text-bg-dark border-bottom">
                <div className="container">
                    <div
                        className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <Link to={"/"}
                              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                            <Icon.Shop className={"bi d-block mx-auto mb-1"} size={32}/>
                        </Link>

                        {/*<form className="" role="search">*/}
                        {/*    <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>*/}
                        {/*</form>*/}

                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li>
                                <Link to={"/"} className={"nav-link text-secondary"}>
                                    <Icon.House className={"bi d-block mx-auto mb-1"} size={24}/>
                                    Produkty
                                </Link>
                            </li>
                            <li>
                                <a href="#pricing" className="nav-link text-white">
                                    <Icon.Cart className={"bi d-block mx-auto mb-1"} size={24}/>
                                    Koszyk
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );

};

export default Header;