import React, { Component } from 'react';
import Rooms from './data'

const myContext=React.createContext();
const Consumer=myContext.Consumer;

 class Context extends Component {
    state={
        rooms:[],
        featuredRooms:[],
        sortedRooms:[],
        loading:true,
        type: "All",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 600,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    }

    getRoom=slug=>this.state.rooms.find(room=>room.slug===slug);

    getUnique=(field)=>[...new Set(this.state.rooms.map(room=>room[field]))];

    handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name; 
        this.setState(()=>{

           return {
              [name]: value
            }
        },()=>{
            this.filterRooms()
        }
        );
      };
      filterRooms = () => {
        let {
          rooms,
          type,
          capacity,
          price,
          minSize,
          maxSize,
          breakfast,
          pets
        } = this.state;

        

        let tempRooms = [...rooms];
        // transform values
        capacity = parseInt(capacity);
        price = parseInt(price);
        // filter by type
        if (type !== "All") {
          tempRooms = tempRooms.filter(room => room.type === type);
          
        }
        // filter by capacity
        if (capacity !== 1) {
          tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }
        // // filter by price
        tempRooms = tempRooms.filter(room => room.price <= price);
        //filter by size
        tempRooms = tempRooms.filter(
          room => room.size >= minSize && room.size <= maxSize
        );
        //filter by breakfast
        if (breakfast) {
          tempRooms = tempRooms.filter(room => room.breakfast === true);
        }
        //filter by pets
        if (pets) {
          tempRooms = tempRooms.filter(room => room.pets === true);
        }
        this.setState({
          sortedRooms: tempRooms
        });
      };
    
    
    componentDidMount(){
       const newRooms=[...Rooms];
       const rooms=this.formatedData(newRooms);
       let featuredRooms=rooms.filter(room=>room.featured);
       let maxPrice=Math.max(...[...new Set(rooms.map(room=>room["price"]))])
       let maxSize=Math.max(...[...new Set(rooms.map(room=>room["size"]))])
       this.setState({
           rooms,
           featuredRooms,
           sortedRooms:rooms,
           loading:false,
           maxPrice,
           maxSize,
           price:maxPrice
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
                ...this.state,
                getRoom:this.getRoom,
                getUnique:this.getUnique,
                handleChange:this.handleChange
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
