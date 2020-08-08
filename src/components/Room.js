import React from 'react'
import { Link } from 'react-router-dom';

export default function Room({room}) {
    const {name,price,images,slug}=room;
    return (
        <section>
            <img src={images[0]} alt="Image" aria-hidden/>
            <p>{name}</p>
            <div className="price">
                <p>$ {price}</p>
                <p>per night</p>
            </div>
            <div className="hidden-section">
                <Link to={`/room/${slug}`} className="btn-primary" style={{textDecoration:"none"}}>
                features
                </Link>
            </div>
        </section>
    )
}
