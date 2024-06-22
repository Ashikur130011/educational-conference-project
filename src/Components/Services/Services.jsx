import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({news}) => {
    const {title,author,img_url,details,key} = news;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='' src={img_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h4>{author.name}</h4>
                <p>{details.slice(1,200)}</p>
                <div className="card-actions justify-end">
                    <Link to={`/news/${key}`}>
                    <button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Services;