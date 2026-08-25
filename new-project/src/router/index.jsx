import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProductPage from "../pages/ProductPage";
import CreateProductPage from "../pages/CreateProductPage";
import EditProductPage from "../pages/EditProductPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "products",
                element: <ProductsPage />,
            },
            {
                path: "products/new",
                element: <CreateProductPage />,
            },
            {
                path: "products/:id",
                element: <ProductPage />,
            },
            {
                path: "products/:id/edit",
                element: <EditProductPage />,
            }
        ],
    },
]);
