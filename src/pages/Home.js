import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import FeaturedRoom from '../components/FeaturedRoom'

export default function Home() {
    return (
        <React.Fragment>
        <div className="defaultTop">
          <Hero
          title="Luxurious Rooms"
          subtitle="Deluxe Rooms Starting At $299"
          >
             <button className="btn-primary">our rooms</button>
          </Hero>
         </div>
         <Services/>
         <FeaturedRoom/>
        </React.Fragment>
    )
}
