import { useContext } from "react"
import { ProductsContext } from "./context"


export const useProducts = () => {

    const {
        state: {
            products,
        },
        actions: {
            updateProducts
        }
    } = useContext(ProductsContext)


    return {
        products,
        updateProducts
    }

}