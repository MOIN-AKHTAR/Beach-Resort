import React, { useContext } from 'react';
import {myContext} from '../Context'
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

export default function Room(props) {
    const {getRoom}=useContext(myContext);
    const Room=getRoom(props.match.params.slug);
    if(!Room){
       return (
           <div className="defaultTop">
          <Hero
          title="No Such Room Found :("
          >
            <Link to="/">
            <button className="btn-primary">back to home</button>
            </Link>
          </Hero>
         </div>
       )
    }
    return (
        <div>
           FOUND
        </div>
    )
}
