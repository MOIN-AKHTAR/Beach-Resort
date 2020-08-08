import React from 'react';
import LoadingArrow from '../images/gif/loading-arrow.gif'

export default function Loading() {
    return (
        <div className="loading-section">
            <h1>please wait loading data...</h1>
            <img src={LoadingArrow} 
            alt="Loading..."
            aria-hidden
            />
        </div>
    )
}
