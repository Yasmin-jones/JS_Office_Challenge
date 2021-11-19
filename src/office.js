'use strict'

class Office {

    constructor() {
        this.room = []; 
        this.isRoomAvailable = true; 
    }

    rooms() {
        return this.room; 
    }

    addRooms(room_in) {
        room_in = 'roomAdded'
        this.room.push(room_in)
    }; 

    roomAvailability() {
        if(this.isRoomAvailable === true){
            return "Meeting room is avaliable";
        } else {
            return "Meeting room is NOT avaliable"
        }

        // if(this.isRoomAvailable === true){
        //     return "Meeting room is avaliable";
        // } else if (this.isRoomAvailable = false) {
        //     return "Meeting room is NOT avaliable"
        // } else {
        //     return 'error, ask again please'
        // }

    }





}; 