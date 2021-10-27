import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./googleMap.css";
import img from "./32.png";

const AnyReactComponent = () => (
  <div>
    <img src={img} alt="rocket" width="40" height="70"></img>
  </div>
);

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 50.45466,
      lng: 30.5238,
    },
    zoom: 0,
  };

  render() {
    return (
      <div className="googleMap_container">
        <div style={{ height: "100%", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyD60cG1rdjDZuYLXyJGvHe8EA4FY11iSIQ",
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={this.props.lat}
              lng={this.props.lng}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default GoogleMap;
