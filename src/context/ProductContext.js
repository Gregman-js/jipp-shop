import React, {createContext, useEffect, useState} from 'react';

const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.log(error));
    }, []);

    return <ProductContext.Provider value={products}>{children}</ProductContext.Provider>;
};

export {ProductProvider, ProductContext};
