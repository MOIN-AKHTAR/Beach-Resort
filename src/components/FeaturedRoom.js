import React from 'react'
import Title from './Title';
import {Consumer} from '../Context'
import Loading from './Loading';
import Room from './Room';

export default function FeaturedRoom() {
    return (
        <div className="featured-section">
            <Title 
            title="featured rooms"
            />
            <Consumer>
                {Values=>{
                    const {loading,featuredRooms}=Values;
                    if(loading){
                        return <Loading/>
                    }else{
                        return <div className="rooms">
                            {featuredRooms.map((room,index)=><Room
                               key={index}
                               room={room}
                             />)}
                        </div>
                    }
                }}
            </Consumer>
        </div>
    )
}
