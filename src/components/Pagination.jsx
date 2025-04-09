import Button from "./Button";

const Pagination = ({ prev, next, page, setPage }) => {
    return (
        <div className="w-full flex justify-center items-center gap-3">
            <Button name="Previous" disabled={!prev} setPage={() => setPage((prev) => Math.max(prev - 1, 1))} />
            <span className="px-4">{page}</span>
            <Button name="Next" disabled={!next} setPage={() => setPage(prev => prev + 1)} />
        </div>
    )
}

export default Pagination;