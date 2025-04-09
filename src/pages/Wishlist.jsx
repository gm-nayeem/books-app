import React, { useEffect, useState } from "react";

import Title from "../components/Title";
import BookList from "../components/BookList";
import NotFoundMessage from "../components/NotFoundMessage";

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);

    const fetchWishlist = () => {
        const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlist(stored);
    };

    const onWishlistUpdate = () => {
        fetchWishlist();
    };

    useEffect(() => {
        fetchWishlist();
    }, []);

    return (
        <div className="space-y-4">
            <Title title="Your Wishlist" />
            {wishlist.length < 1 ? (
                <NotFoundMessage message="No books found in your wishlist!" />
            ) : (
                <BookList books={wishlist} onWishlistUpdate={onWishlistUpdate} />
            )}
        </div>
    );
};

export default Wishlist;
