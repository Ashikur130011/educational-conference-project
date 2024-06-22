import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetails = () => {
    const {id} = useParams()
    return (
        <div>
            <h1>Details will available here {id}</h1>
        </div>
    );
};

export default NewsDetails;