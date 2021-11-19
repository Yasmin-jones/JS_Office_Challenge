describe("Office", function() {

    'use strict';

    let office; 
    let room_in; 

    beforeEach(() => {
        office = new Office();

        room_in = jasmine.createSpy('room_in'); //creating a spy 
    });

      it('office contains no meeting rooms by deafult', () => {
          expect(office.rooms()).toEqual([]);
    });

    it('Two rooms can be added', () => {
        office.addRooms(room_in)
        office.addRooms(room_in)
        expect(office.rooms()).toEqual(["roomAdded", 'roomAdded']);
  });

    it ('can list rooms in the office', () => {
        office.addRooms(room_in)
        expect(office.rooms()).toEqual(["roomAdded"]);
    });

    it('meeting room is avaiable to use', () => {
        expect(office.roomAvailability()).toEqual('Meeting room is avaliable')
    });

    it('meeting room is not avaliable', () =>{
        // spyOn(office,'office.isRoomAvailable').and.returnValue(false); 
        office.isRoomAvailable = false;
        expect(office.roomAvailability()).toEqual('Meeting room is NOT avaliable')
        

    });


  

}); 