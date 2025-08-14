"use client";

import { useState, useCallback, useEffect } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  useMap,
} from "@vis.gl/react-google-maps";
import { Locate } from "lucide-react";

const MapHandler = ({ onLocationChange, coordinates, setCoordinates }) => {
  const map = useMap();

  // Get user's current location on component mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCoordinates(location);
          onLocationChange(location);
          if (map) {
            map.panTo(location);
            map.setZoom(15);
          }
        },
        (error) => {
          console.warn("Error getting location:", error);
          // Fallback to default location
          const defaultLocation = { lat: 39.8283, lng: -98.5795 };
          setCoordinates(defaultLocation);
          onLocationChange(defaultLocation);
        }
      );
    }
  }, [map, onLocationChange, setCoordinates]);

  const handleCurrentLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCoordinates(location);
          onLocationChange(location);
          if (map) {
            map.panTo(location);
            map.setZoom(15);
          }
        },
        (error) => {
          alert("Error getting current location: " + error.message);
        }
      );
    }
  }, [map, onLocationChange, setCoordinates]);

  return (
    <div className="absolute top-4 right-4 z-10">
      <button
        onClick={handleCurrentLocation}
        className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
      >
        <Locate className="w-4 h-4" />
        Current Location
      </button>
    </div>
  );
};

const GoogleMapLocationPicker = ({ coordinates, setCoordinates }) => {
  // const [coordinates, setCoordinates] = useState(null);
  const [address, setAddress] = useState("");

  const handleLocationChange = useCallback(async (location) => {
    setCoordinates(location);

    // Reverse geocode to get address
    try {
      const geocoder = new window.google.maps.Geocoder();
      const result = await geocoder.geocode({ location });

      if (result.results[0]) {
        setAddress(result.results[0].formatted_address);
      }
    } catch (err) {
      console.warn("Error getting address:", err);
    }
  }, []);

  const handleMapClick = useCallback(
    (event) => {
      const location = {
        lat: event.detail.latLng.lat,
        lng: event.detail.latLng.lng,
      };
      setCoordinates(location);
      handleLocationChange(location);
    },
    [handleLocationChange]
  );

  const handleMarkerDragEnd = useCallback(
    (event) => {
      const location = {
        lat: event.latLng.lat,
        lng: event.latLng.lng,
      };
      setCoordinates(location);
      handleLocationChange(location);
    },
    [handleLocationChange]
  );

  return (
    <APIProvider apiKey={"AIzaSyCNMAEsU6BwMrrXQRvAHw42i7gd8m6zv2g"}>
      <div className="relative w-[100%] h-[300px]  rounded-xl overflow-hidden shadow-lg border border-gray-200">
        <Map
          defaultCenter={{ lat: 17.3913415, lng: 78.4491604 }}
          // 17.3913415,78.4491604,
          defaultZoom={4}
          gestureHandling="greedy"
          disableDefaultUI={false}
          onClick={handleMapClick}
          mapId="DEMO_MAP_ID"
          style={{ width: "100%", height: "100%" }}
        >
          {coordinates && (
            <AdvancedMarker
              position={coordinates}
              draggable={true}
              onDragEnd={handleMarkerDragEnd}
            />
          )}
        </Map>

        {/* <MapHandler
          onLocationChange={handleLocationChange}
          coordinates={coordinates}
          setCoordinates={setCoordinates}
        /> */}

        {/* Results display */}
        {/* <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-sm z-10">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Selected Location
          </h3>

          {coordinates ? (
            <div className="space-y-2 text-sm">
              <div className="flex items-start">
                <span className="font-medium text-gray-700 min-w-20">
                  Coordinates:
                </span>
                <span className="text-gray-600">
                  {coordinates.lat.toFixed(6)}, {coordinates.lng.toFixed(6)}
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-medium text-gray-700 min-w-20">
                  Address:
                </span>
                <span className="text-gray-600 break-words">
                  {address || "Loading address..."}
                </span>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-sm">
              Click on the map to select a location
            </p>
          )}
        </div> */}
      </div>
    </APIProvider>
  );
};

export default GoogleMapLocationPicker;
