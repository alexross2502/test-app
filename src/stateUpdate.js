let stateUpdate = async (props) => {
  const api_location = await fetch("http://api.open-notify.org/iss-now.json");
  const data_location = await api_location.json();
  props.lat = data_location.iss_position.latitude;
  props.lng = data_location.iss_position.longitude;

  let today = new Date();
  let UTCstring = today.toUTCString();
  props.time = UTCstring.substring(17, 22);
  props.date.year = UTCstring.substring(12, 16);
  props.date.month = UTCstring.substring(8, 11);
  props.date.dayNumber = UTCstring.substring(5, 7);
  props.date.dayString = UTCstring.substring(0, 3);

  const api_people = await fetch("http://api.open-notify.org/astros.json");
  const data_people = await api_people.json();
  let temporary = [];
  for (let i = 0; i < data_people.people.length; i++) {
    if (data_people.people[i].craft === "ISS") {
      temporary.push(data_people.people[i].name);
    }
  }
  props.team = temporary;
  props.numberOfCrew = temporary.length;
};

export { stateUpdate };
