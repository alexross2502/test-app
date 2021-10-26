import { stateUpdate } from './stateUpdate';


let state = {
    lat : '',
    lng : '',
    time : '',
    date : {
        day_string : '',
        day_number : '',
        month : '',
        year : '',
    },
    team : [],
    number_of_crew : 0,
    refresh : function () {
        stateUpdate(state);
    }
}


export default state;