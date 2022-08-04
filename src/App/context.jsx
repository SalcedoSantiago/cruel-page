import { createContext, useState, useEffect } from "react";
import Api from "./api";

const ProductsContext = createContext({});

function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);

    const updateProducts = (prods) => setProducts(prods);

    useEffect(() => {
        const gepProducts = async () => {
            const test = await Api.list();
            setProducts(test)
        }

        gepProducts();
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