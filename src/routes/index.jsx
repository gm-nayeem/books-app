import {
    createBrowserRouter, RouterProvider, Outlet
} from "react-router-dom";

import Home from "../pages/Home";
import Book from "../pages/Book";
import Error from "../pages/Error";
import Wishlist from "../pages/Wishlist";
import Navbar from "../components/Navbar";

const Index = () => {

    const Layout = () => {
        return (
            <div className="w-full flex flex-col">
                <Navbar />
                <div className="w-full min-h-[calc(100vh-60px)] px-4 py-7">
                    <Outlet />
                </div>
            </div>
        );
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/wishlist",
                    element: <Wishlist />,
                },
                {
                    path: "/books/:id",
                    element: <Book />,
                },
                {
                    path: "/*",
                    element: <Error />,
                },
            ],
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default Index;