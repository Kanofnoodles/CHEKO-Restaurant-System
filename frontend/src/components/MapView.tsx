import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWphLXdvcmsiLCJhIjoiY21jdWIwaHo5MDB5bTJpc2xlcjd2dnk0ZCJ9.CtH0imy0jEBmePzzDpue3g";

const dummyRestaurants = [
  {
    id: 1,
    name: "Cheko Central",
    description: "Cheko Location in Central Riyadh",
    lat: 24.7136,
    lng: 46.6753,
  },
  {
    id: 2,
    name: "Cheko North Branch",
    description: "Cheko Location in North Riyadh",
    lat: 24.7743,
    lng: 46.7386,
  },
  {
    id: 3,
    name: "Cheko Boulevard",
    description: "Cheko Location in Boulevard",
    lat: 24.712,
    lng: 46.6835,
  },
];

export const MapView: React.FC = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [46.6753, 24.7136],
      zoom: 12,
    });

    dummyRestaurants.forEach((place) => {
      new mapboxgl.Marker()
        .setLngLat([place.lng, place.lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h3>${place.name}</h3><p>${place.description}</p>`
          )
        )
        .addTo(map);
    });

    return () => map.remove();
  }, []);

  return (
    <div className="mt-6 h-[70vh] w-full rounded-xl overflow-hidden">
      <div id="map" className="h-full w-full" />
    </div>
  );
};
