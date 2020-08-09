import React, { useContext } from 'react';
import {myContext} from '../Context'
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import {CustomHero} from '../components/CustomHero'


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
    else{
      const {images:[firstImage,...otherImages],name,description,price,size,capacity,
      pets,breakfast,extras}=Room;
    return (
        <React.Fragment>
        <CustomHero img={firstImage}>
        <Hero
          title={name}
          >
             <button className="btn-primary">our rooms</button>
          </Hero>
        </CustomHero>
        <section className="images-section">
         {otherImages.map((image,index)=><img src={image} alt="Image" aria-hidden key={index}/>)}
        </section>
        <section className="information-section">
          <div className="description">
            <h3>Details</h3>
             <p>{description}</p>
          </div>
          <div className="info">
          <h3>Info</h3>
          <p>Price: ${price}</p>
          <p>Size: ${size} SQFT</p>
          <p>Max Capacity: {capacity} {capacity>1?"People":"Person"}</p>
          <p>Pets: {pets?"Allowed":"Not Allowed"}</p>
          <p>{breakfast?"Free Breakfast Included":null}</p>
          </div>
        </section>
        <ul className="extras">
          {extras.map((extra,index)=><li key={index}>- {extra}</li>)}
        </ul>
        </React.Fragment>
    )
    }
}



