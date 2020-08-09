import React, { Component } from 'react';
import Image from '../images/room-2.jpeg';
import {CustomHero} from '../components/CustomHero'
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import {Consumer} from '../Context'
import Room from '../components/Room';
import Loading from '../components/Loading'

export default class Rooms extends Component {
    render() {
        return (
            <React.Fragment>
              <CustomHero img={Image}>
               <Hero
               title="Our Rooms"
               >
             <Link to="/">
             <button className="btn-primary">Retun Home</button>
             </Link>
               </Hero>
              </CustomHero>
              <div className="search-room-section">
              <Title
               title="Search Rooms"
               />
              <form className="search-room-form">
                  <Consumer>
                      {({minSize,maxSize,minPrice,maxPrice,type,capacity,price,getUnique,handleChange,breakfast,pets})=>{
                          const types=["All",...getUnique("type")];
                          const capacities=getUnique("capacity");
                          return (
                            <React.Fragment>
                        <div className="form-group">
                     <label htmlFor="type">room types</label>
                     <select onChange={handleChange} value={type} name="type">
                        {types.map((type,index)=><option value={type} key={index}>{type}</option>)}
                     </select>
                  </div>
                  <div className="form-group">
                     <label htmlFor="capacity">guests</label>
                     <select onChange={handleChange} value={capacity} name="capacity">
                     {capacities.map((type,index)=><option value={type} key={index}>{type}</option>)}
                     </select>
                  </div>
                  <div className="form-group">
                     <label htmlFor="price">room price ${price}</label>
                    <input  type="range" min={minPrice} max={maxPrice} value={price} name="price" onChange={handleChange}/>
                  </div>
                  <div className="form-group">
                     <label htmlFor="type">room size</label>
                    <input type="number" min={minSize} max={maxSize} value={minSize} name="minSize" onChange={handleChange}/>
                    <input type="number" min={minSize} max={maxSize} value={maxSize} name="maxSize" onChange={handleChange}/>
                  </div>
                  <div className="form-group">
                   <div className="checkbox">
                   <input type="checkbox" name="breakfast" onChange={handleChange} value={breakfast}/> beakfast
                   </div>
                    <div className="checkbox">
                    <input type="checkbox" name="pets" onChange={handleChange} value={pets}/> pets
                    </div>
                  </div>
                          </React.Fragment>
                          )
                      }}
                  </Consumer>
              </form>
            </div>
              <Consumer>
                  {
                      ({sortedRooms,loading})=>{
                          if(sortedRooms.length===0){
                              return <div style={{textAlign:"center",margin:"30px 0px"}}>
                                  <h5>Couldn't Find Any Room With These Parameters</h5>
                              </div>
                          }else{
                              if(loading){
                                  return <Loading/>
                              }else{
                                return <div className="rooms">
                                  {sortedRooms.map((room,index)=><Room key={index} room={room} />)}
                              </div>
                              }
                          }
                      }
                  }
              </Consumer>
            </React.Fragment>
        )
    }
}
