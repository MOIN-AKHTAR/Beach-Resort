import React from 'react'

export default function Service({service}) {
    const {icon,title,info}=service;
    return (
        <section className="service">
            <div className="service-icon">
                {icon}
            </div>
            <h6 className="service-title">{title}</h6>
            <p className="service-info">{info}</p>
        </section>
    )
}
