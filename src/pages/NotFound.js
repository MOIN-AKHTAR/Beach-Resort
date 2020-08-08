import React from 'react'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
    <div className="defaultTop">
          <Hero
          title="404"
          subtitle="Not Found :("
          >
            <Link to="/">
            <button className="btn-primary">back to home</button>
            </Link>
          </Hero>
         </div>
    )
}
