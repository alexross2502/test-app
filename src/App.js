import React from "react";
import BottomPanel from "./components/bottomPanel/bottomPanel";
import TopPanel from "./components/topPanel/topPanel";


function App(props) {
  return (
    <div className="App" >
      <TopPanel data={props.data}/>
      <BottomPanel 
        lng={props.data.lng} lat={props.data.lat} 
        number_of_crew={props.data.number_of_crew}
        team={props.data.team}
      />
    </div>
  );
}

export default App;
