describe("Meeting", function() {

    'use strict';

    let meeting; 

    beforeEach(() => {
        meeting = new Meeting();
      });

      it('Meeting rooms have a name', () => {
          expect(meeting.meetingName()).toEqual('Pink room'); 

      });
    
});