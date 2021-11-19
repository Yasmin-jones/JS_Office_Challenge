'use strict'

class Office {

    constructor() {
        this.room = []; 
    }

    rooms() {
        return this.room; 
    }

    addRooms(room_in) {
        room_in = 'roomAdded'
        this.room.push(room_in)
   

    }; 




}; 