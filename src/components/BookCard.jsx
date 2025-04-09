import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import defaultImg from '../assets/default.png';

const BookCard = ({ book, onWishlistUpdate }) => {
    const [wishlisted, setWishlisted] = useState(false);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
        const isWished = stored.some((item) => item.id === book?.id);
        setWishlisted(isWished);
    }, [book?.id]);

    const toggleWishlist = () => {
        let stored = JSON.parse(localStorage.getItem("wishlist")) || [];

        if (wishlisted) {
            stored = stored.filter((b) => b.id !== book?.id);
        } else {
            stored.push(book);
        }

        localStorage.setItem("wishlist", JSON.stringify(stored));
        setWishlisted(!wishlisted);

        if (onWishlistUpdate) onWishlistUpdate();
    };

    return (
        <div className="h-full bg-white shadow-md rounded flex flex-col gap-3 relative group">
            {/* wishlist icon */}
            <div onClick={toggleWishlist} className="absolute top-2 right-2 z-10 bg-black/50 p-1 rounded-full">
                {wishlisted ? (
                    <AiFillHeart size={22} className="text-red-500 cursor-pointer" />
                ) : (
                    <AiOutlineHeart size={22} className="text-white cursor-pointer" />
                )}
            </div>

            {/* book details */}
            <Link to={`/books/${book?.id}`} className="flex flex-col h-full">
                <img
                    src={book?.formats["image/jpeg"] ?? defaultImg}
                    alt={book?.title}
                    className="w-full h-48 object-cover rounded-t"
                />

                <div className="w-full p-3 pt-2 flex flex-col gap-1 text-sm text-gray-600">
                    <h3 className="text-base text-black font-bold line-clamp-2">{book?.title}</h3>
                    <p>Author: {book?.authors?.[0]?.name ?? "N/A"}</p>
                    <p>Genre: {book?.subjects?.[0] ?? "N/A"}</p>
                    <p className="text-xs text-gray-400">ID: {book?.id}</p>
                </div>
            </Link>
        </div>
    );
};

export default BookCard;
