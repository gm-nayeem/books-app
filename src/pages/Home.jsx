import React, { useState } from "react";

import Title from "../components/Title";
import BookList from "../components/BookList";
import useFetchData from "../hooks/useFetchData";
import Pagination from "../components/Pagination";
import BookFilters from "../components/BookFilters";
import NotFoundMessage from "../components/NotFoundMessage";

const Home = () => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState(localStorage.getItem("searchTerm") || "");
    const [genre, setGenre] = useState(localStorage.getItem("selectedGenre") || "");

    const { loading, error, data } = useFetchData(`books?page=${page}`);

    const onChange = (e) => {
        const { name, value } = e.target;

        if (name === 'search') {
            setSearch(value);
            localStorage.setItem("searchTerm", value);
        }

        if (name === 'genre') {
            setGenre(value);
            localStorage.setItem("selectedGenre", value);
        }
    };

    const filteredBooks = data?.results?.filter((book) => {
        const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase());
        const matchesGenre = genre
            ? book.subjects?.some((s) =>
                s.toLowerCase().includes(genre.toLowerCase())
            )
            : true;

        return matchesSearch && matchesGenre;
    });

    return (
        <div className="w-full h-full flex flex-col gap-7">
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
                <Title title="Book List" className="w-full md:w-1/2" />
                <BookFilters
                    genre={genre}
                    search={search}
                    onChange={onChange}
                />
            </div>

            {loading && <p>Loading books...</p>}
            {!loading && filteredBooks?.length < 1 && (
                <NotFoundMessage message="No books found for your current filters." />
            )}
            {!loading && !error && filteredBooks?.length > 0 && (
                <BookList books={filteredBooks} />
            )}

            <Pagination
                next={data?.next}
                prev={data?.previous}
                page={page}
                setPage={setPage}
            />
        </div>
    );
};

export default Home;
