import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "1000px",
  height: "500px",
};

const center = {
  lat: 10.762,
  lng: 106.66,
};

const StaticGoogleMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBo6VnpvDsGMociDgEQ4FE6R5CTVfRR9p4",
  });
  const [map, setMap] = React.useState(null);
  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className=" w-full flex justify-center items-center top-10">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker
          position={center}
          icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
        />
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default StaticGoogleMap;
