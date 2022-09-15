import React, { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useTranslation } from "react-i18next";

const containerStyle = {
  width: "1525px",
  height: "500px",
};

const center = {
  lat: 10.762,
  lng: 106.66,
};

const StaticGoogleMap = () => {
  const { t } = useTranslation();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY as string,
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [map, setMap] = useState(null);
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="flex flex-col mt-10 mx-[35px]">
      <h1 className="font-extrabold text-2xl pb-4 px-16 py-8">
        {t("RentalLocation")}
      </h1>
      <div className="flex  items-center justify-center lg:pl-10">
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
    </div>
  ) : null;
};

export default StaticGoogleMap;
