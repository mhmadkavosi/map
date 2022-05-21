import dotenv from "dotenv";
dotenv.config();

import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.MAPBOX_ACCSESS_TOKEN;

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private mapbox: mapboxgl.Map;

  constructor(elId: string) {
    this.mapbox = new mapboxgl.Map({
      container: elId, // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 0, // starting zoom
    });
  }

  addMarker(mappable: Mappable): void {
    new mapboxgl.Marker()
      .setLngLat([mappable.location.lat, mappable.location.lng])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(mappable.markerContent())
      )
      .addTo(this.mapbox);
  }
}
