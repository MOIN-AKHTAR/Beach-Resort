import React, { Component } from 'react';
import Image from '../images/room-2.jpeg';
import {CustomHero} from '../components/CustomHero'
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import {Consumer} from '../Context'
import Room from '../components/Room';

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
                  <div className="form-group">
                     <label htmlFor="type">room types</label>
                     <select>
                         <option>All</option>
                         <option>Single</option>
                         <option>Double</option>
                     </select>
                  </div>
                  <div className="form-group">
                     <label htmlFor="type">guests</label>
                     <select>
                         <option>1</option>
                         <option>2</option>
                         <option>3</option>
                     </select>
                  </div>
                  <div className="form-group">
                     <label htmlFor="type">room rice $600</label>
                    <input type="range" min={0} max={600} value={600}/>
                  </div>
                  <div className="form-group">
                     <label htmlFor="type">room size</label>
                    <input type="number" min={0} max={600} value={0}/>
                    <input type="number" min={0} max={600} value={600}/>
                  </div>
                  <div className="form-group">
                   <div className="checkbox">
                   <input type="checkbox" name="" id=""/> beakfast
                   </div>
                    <div className="checkbox">
                    <input type="checkbox" name="" id=""/> pets
                    </div>
                  </div>
              </form>
            </div>
              <Consumer>
                  {
                      ({sortedRooms})=>{
                          if(sortedRooms.length===0){
                              return <div style={{textAlign:"center",margin:"30px 0px"}}>
                                  <h5>Couldn't Find Any Room With These Parameters</h5>
                              </div>
                          }else{
                              return <div className="rooms">
                                  {sortedRooms.map((room,index)=><Room key={index} room={room} />)}
                              </div>
                          }
                      }
                  }
              </Consumer>
            </React.Fragment>
        )
    }
}
