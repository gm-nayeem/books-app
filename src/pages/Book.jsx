import { useParams } from "react-router-dom";

import Title from "../components/Title";
import defaultImg from "../assets/default.png";
import useFetchData from "../hooks/useFetchData";
import NotFoundMessage from "../components/NotFoundMessage";

const Book = () => {
    const { id } = useParams();
    const { loading, error, data: book } = useFetchData(`books/${id}`);

    if (loading) return <p className="p-4">Loading...</p>;

    if (!loading && error) {
        return <NotFoundMessage message="No book found with this ID!" />;
    }

    return (
        <div className="max-w-full md:max-w-4/5 mx-auto space-y-4">
            <Title title={book?.title} />

            <img
                src={book?.formats?.["image/jpeg"] ?? defaultImg}
                alt={book?.title}
                className="w-full aspect-video rounded"
            />

            <div className="space-y-1">
                <p>
                    <strong>Author(s):</strong>{" "}
                    {book?.authors?.map((a) => a.name).join(", ") || "Unknown"}
                </p>
                <p>
                    <strong>Genres:</strong>{" "}
                    {book?.subjects?.slice(0, 5).join(", ") || "N/A"}
                </p>
                <p>
                    <strong>Language:</strong> {book?.languages?.join(", ") || "N/A"}
                </p>
                <p>
                    <strong>ID:</strong> {book?.id}
                </p>
                <p>
                    <strong>Summarises:</strong> {book?.summaries}
                </p>
            </div>
        </div>
    );
};

export default Book;
