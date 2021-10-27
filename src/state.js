import { stateUpdate } from "./stateUpdate";

let state = {
  lat: "",
  lng: "",
  time: "",
  date: {
    dayString: "",
    dayNumber: "",
    month: "",
    year: "",
  },
  team: [],
  numberOfCrew: 0,
  refresh: function () {
    stateUpdate(state);
  },
};

export default state;
