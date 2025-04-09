const Button = ({ name, setPage, disabled = false }) => {
    return (
        <button
            type='button'
            disabled={disabled}
            onClick={setPage}
            className="px-4 py-2 bg-gray-200 rounded cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
        >
            {name}
        </button>
    )
}

export default Button;