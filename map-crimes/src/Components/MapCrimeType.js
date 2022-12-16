import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import NoResults from "./404";

const mapStyles = {
  width: "100%",
  height: "100%",
  position: "relative",
};

export class MapCrimeType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedLoc: {},
      isLoading: true,
    };
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedLoc: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onInfoWindowClose = () => {
    this.setState({
      activeMarker: null,
      showingInfoWindow: false,
    });
  };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  displayMarkers = () => {
    if (this.props.articles.length) {
      return this.props.articles.map((article, index) => {
        return (
          <Marker
            key={index}
            id={index}
            title={article.title}
            source={article.url}
            date={article["published date"]}
            position={{ lat: article.lat, lng: article.long }}
            onClick={this.onMarkerClick}
          />
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
        zoom={4}
        style={mapStyles}
        mapTypeControl={false}
        streetViewControl={false}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      >
        {this.displayMarkers()}
        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h4>{this.state.selectedLoc.title}</h4>
            <p>{this.state.selectedLoc.date}</p>
            <a
              href={this.state.selectedLoc.source}
              rel="noreferrer"
              target="_blank"
            >
              View Source
            </a>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(MapCrimeType);
