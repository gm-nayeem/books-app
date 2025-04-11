import { genres } from "../constants";

const BookFilters = ({ search, genre, onChange }) => {
    return (
        <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-4">
            <input
                type="text"
                name="search"
                value={search}
                placeholder="Search by title..."
                onChange={onChange}
                className="w-full border py-2 px-3 rounded"
            />
            <select
                name="genre"
                value={genre}
                onChange={onChange}
                className="w-full border py-2 px-3 rounded"
            >
                <option value="">Genres</option>
                {genres?.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default BookFilters;
