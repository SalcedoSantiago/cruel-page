import { createContext, useState, useEffect } from "react";
import Api from "./api";

const ProductsContext = createContext({});

function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);

    const updateProducts = (prods) => setProducts(prods);

    useEffect(() => {
        console.log('testing');
        const testing = async () => {
            const test = await Api.list();
            setProducts(test)
            localStorage.setItem('products', JSON.stringify(test));
        }

        const preloadProducts = JSON.parse(localStorage.getItem('products'));

        if (preloadProducts) {
            setProducts(preloadProducts)
        } else {
            testing();
        }

    }, [])


    const values = {
        state: {
            products,
        },
        actions: {
            updateProducts
        }
    }


    return (
        <ProductsContext.Provider value={values}>
            {children}
        </ ProductsContext.Provider>
    );
}

export {
    ProductsProvider,
    ProductsContext
}