
let stateUpdate = async (props) => {
    
        const api_location = await fetch('http://api.open-notify.org/iss-now.json');
        const data_location = await api_location.json();
        props.lat = data_location.iss_position.latitude;
        props.lng = data_location.iss_position.longitude;
        
        const api_time = await fetch('http://worldclockapi.com/api/json/utc/now');
        const data_time = await api_time.json();
        props.date.day_string = data_time.dayOfTheWeek;
        let interim = data_time.currentDateTime;
        props.time = interim.substring(11, 16);
        interim = interim.substring(0, 10).split('-');
        props.date.year = interim[0];
        props.date.month = interim[1];
        props.date.day_number = interim[2];
        
        const api_people = await fetch('http://api.open-notify.org/astros.json');
        const data_people = await api_people.json();
        let temporary = [];
        for (let i = 0; i < data_people.people.length; i++) {
            if (data_people.people[i].craft === 'ISS') {
                temporary.push(data_people.people[i].name)
            }
        };
        props.team = temporary;
        props.number_of_crew = temporary.length;
}

export {stateUpdate};
