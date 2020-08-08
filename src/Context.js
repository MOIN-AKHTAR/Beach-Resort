import React, { Component } from 'react';
import Rooms from './data'

const myContext=React.createContext();
const Consumer=myContext.Consumer;

 class Context extends Component {
    state={
        rooms:[],
        featuredRooms:[],
        sortedRooms:[],
        loading:true
    }
    
    componentDidMount(){
       const newRooms=[...Rooms];
       const rooms=this.formatedData(newRooms);
       let featuredRooms=rooms.filter(room=>room.featured);
       this.setState({
           rooms,
           featuredRooms,
           sortedRooms:rooms,
           loading:false
       });
    }

    // This Method Will Formate Data For Us As Data Objects Are Complex And Not According To Our Intention-
    formatedData(rooms){
      let data=rooms.map(room=>{
          let id=room.sys.id;
          let images=room.fields.images.map(img=>img.fields.file.url);
          return {
            id,...room.fields,images
          }
      })
      return data;
    }


    render() {
        return (
            <myContext.Provider
            value={{
                ...this.state
            }}
            >
                {this.props.children}
            </myContext.Provider>
        )
    }
}

export {
    Consumer,
    Context,
    myContext
}
