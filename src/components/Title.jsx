const Title = ({ title, className }) => {
    return (
        <h2 className={`text-2xl font-bold ${className}`}>{title}</h2>
    )
}

export default Title;