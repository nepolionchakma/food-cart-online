import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-9'>
            <div>
                error
            </div>
            <button>
                <Link to='/'>Back</Link>
            </button>
        </div>
    );
};

export default Error;