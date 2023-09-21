import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const { id } = useParams();
    return (
        <div className='text-center p-5 text-bold-500 bg-gray-600 text-white text-2xl'>User: {id}</div>
    )
}

export default User