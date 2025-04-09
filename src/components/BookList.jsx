import BookCard from "./BookCard";

const BookList = ({ books, onWishlistUpdate }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
            {books?.map((book) => (
                <BookCard
                    key={book?.id}
                    book={book}
                    onWishlistUpdate={onWishlistUpdate}
                />
            ))}
        </div>
    );
};

export default BookList;
