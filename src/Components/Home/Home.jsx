import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Services from '../Services/Services';

const Home = () => {
    const news = useLoaderData()
    console.log(news)
    return (
        <div className=''>
            <div className='grid grid-cols-3 gap-6 place-items-center'>
            {
                news.map(aNews => <Services key={news.id} news={aNews}></Services>)
            }
            </div>
        </div>
    );
};

export default Home;