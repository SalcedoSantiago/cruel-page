import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { ProductsProvider } from '../context'
import Home from './Home'
import Menu from './Menu'

const App = () => {
    return (
        <ProductsProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" index element={<Home />} />
                    <Route path="/menu/:id" element={<Menu />} />
                </Routes>
            </BrowserRouter>
        </ProductsProvider>
    )
}

export default App