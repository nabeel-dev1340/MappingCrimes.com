import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import NoResults from "./404";

const mapStyles = {
  width: "100%",
  height: "100%",
  position: "relative",
};

export class MapCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      zoomMeasure: 4,
    };
  }

  onMarkerClick = (props, marker, e) =>
    this.setState((prev) => ({
      zoomMeasure: prev.zoomMeasure + 6,
      activeMarker: marker,
      showingInfoWindow: true,
    }));

  onInfoWindowClose = () => {
    this.setState({
      activeMarker: null,
      showingInfoWindow: false,
    });
  };

  displayInfoWindowContent = () => {
    if (this.props.articles.length) {
      return this.props.articles.map((article, index) => {
        return (
          <div key={index}>
            <h4>{article.title}</h4>
            <p>{article["published date"]}</p>
            <a href={article.url} rel="noreferrer" target="_blank">
              View Source
            </a>
            <hr />
          </div>
        );
      });
    }
  };

  render() {
    if (this.props.articles.length === 0) {
      return <NoResults />;
    }
    return (
      <Map
        google={this.props.google}
        zoom={this.state.zoomMeasure}
        style={mapStyles}
        mapTypeControl={false}
        streetViewControl={false}
        initialCenter={{
          lat: this.props.articles[0].lat,
          lng: this.props.articles[0].long,
        }}
      >
        <Marker
          position={{
            lat: this.props.articles[0].lat,
            lng: this.props.articles[0].long,
          }}
          onClick={this.onMarkerClick}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}
        >
          <div>{this.displayInfoWindowContent()}</div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(MapCity);
