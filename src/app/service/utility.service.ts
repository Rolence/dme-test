import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class UtilityService {

    constructor(
      ) {}

    

    fetchLecturer() {
        return [
            { id: 1, label: 'Osama', busy: false },
            { id: 2, label: 'Barry', busy: false},
            { id: 3, label: 'Faheem', busy: false},
            { id: 4, label: 'Alex', busy: false },
            { id: 5, label: 'Aqeel', busy: false},
            { id: 6, label: 'Waseem', busy: false }
        ];
    }

    fetchClassRooms() {
        return [
            { id: 1, label: 'W201', capacity: 60, ecount: 0, scount: 0, vcapacity: 4, vcount: 0, vscount:0, tcount: 0, classStatus: false, roomStatus: false, lecId: null, lecName: '' },
            { id: 2, label: 'W202', capacity: 60, ecount: 0, scount: 0, vcapacity: 4, vcount: 0, vscount:0, tcount: 0, classStatus: false, roomStatus: false, lecId: null, lecName: '' },
            { id: 3, label: 'W101', capacity: 20, ecount: 0, scount: 0, vcapacity: 4, vcount: 0, vscount:0, tcount: 0, classStatus: false, roomStatus: false, lecId: null, lecName: '' },
            { id: 4, label: 'JS101', capacity: 30, ecount: 0, scount: 0, vcapacity: 4, vcount: 0, vscount:0, tcount: 0, classStatus: false, roomStatus: false, lecId: null, lecName: '' }
        ];
    }

}
