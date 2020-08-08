import React, { Component } from 'react';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from './Title'
import Service from './Service';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            }
            
        ]
    }
    render() {
        return (
        <div className="services-section">
         <Title
         title="services"
         />
         <div className="services">
        {this.state.services.map((service,index)=>(
        <Service
         key={index}
         service={service}/> 
          )
        )}
        </div>
        </div>
        )
    }
}

