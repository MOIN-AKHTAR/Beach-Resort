import React from 'react'

export default function Hero({title,subtitle,children}) {
    return (
    <div className="nestedDefaultTop">
      <h1>{title}</h1>
      <div></div>
      <h6>{subtitle}</h6>
     {children}
    </div>
    )
}
