import React from "react";
import BottomPanel from "./components/bottomPanel/bottomPanel";
import TopPanel from "./components/topPanel/topPanel";

function App(props) {
  return (
    <div className="App">
      <TopPanel data={props.data} />
      <BottomPanel
        lng={props.data.lng}
        lat={props.data.lat}
        numberOfCrew={props.data.numberOfCrew}
        team={props.data.team}
      />
    </div>
  );
}

export default App;
