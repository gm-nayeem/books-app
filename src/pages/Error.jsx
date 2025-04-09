import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center gap-4'>
            <h2 className='text-2xl font-bold'>404! PAGE NOT FOUND</h2>
            <NavLink to="/" className="text-blue-600 hover:underline">
                Back To Home Page
            </NavLink>
        </div>
    )
}

export default Error;