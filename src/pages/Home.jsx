import React, { useState } from "react";

import Title from "../components/Title";
import BookList from "../components/BookList";
import useFetchData from "../hooks/useFetchData";
import Pagination from "../components/Pagination";
import NotFoundMessage from "../components/NotFoundMessage";

const Home = () => {
    const [page, setPage] = useState(1);
    const [genre, setGenre] = useState("");
    const [search, setSearch] = useState("");

    const { loading, error, data } = useFetchData(`books?page=${page}`);

    const filteredBooks = data?.results?.filter((book) => {
        const titleMatch = book.title.toLowerCase().includes(search.toLowerCase());
        const genreMatch = genre
            ? book.subjects?.some((s) =>
                s.toLowerCase().includes(genre.toLowerCase())
            )
            : true;
        return titleMatch && genreMatch;
    });

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
                <Title title="Book List" className="w-full md:w-1/2" />

                {/* filters */}
                <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-4">
                    <input
                        type="text"
                        name="search"
                        value={search}
                        placeholder="Search by title..."
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full border py-2 px-3 rounded"
                    />
                    <select
                        name="genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        className="w-full border py-2 px-3 rounded"
                    >
                        <option value="">All Genres</option>
                        <option value="fiction">Fiction</option>
                        <option value="history">History</option>
                        <option value="science">Science</option>
                        <option value="children">Children</option>
                    </select>
                </div>
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
