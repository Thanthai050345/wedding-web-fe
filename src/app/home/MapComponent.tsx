"use client";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Map as LeafletMap } from "leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

interface LatLng {
  lat: number;
  lng: number;
}

const MapComponent = () => {
  const [map, setMap] = useState<LeafletMap | null>(null);

  const center: LatLng = { lat: 16.177809080578434, lng: 103.29844828205967 };

  useEffect(() => {
    if (map) {
      map.invalidateSize();
    }
  }, [map]);

  const customIcon = new L.Icon({
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [30, 50],
    iconAnchor: [15, 50],
    popupAnchor: [0, -45],
  });

  const openGoogleMaps = () => {
    const url =
      "https://www.google.com/maps/place/%E0%B8%A8%E0%B8%B9%E0%B8%99%E0%B8%A2%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B8%E0%B8%A1%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C+%E0%B8%AD%E0%B8%B3%E0%B9%80%E0%B8%A0%E0%B8%AD%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87+%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%B2%E0%B8%A1/@16.177433,103.2958412,17z/data=!3m1!4b1!4m6!3m5!1s0x3122a6ee881540bb:0xaf02299a3abf9bb4!8m2!3d16.177433!4d103.2984161!16s%2Fg%2F11bxg0gh6c?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D";
    window.open(url, "_blank");
  };

  return (
    <div className="relative w-full h-full">
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={14}
        style={{ width: "100%", height: "100%" }}
        whenReady={() => setMap(map)}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[center.lat, center.lng]} icon={customIcon}>
          <Popup>
            <div className="text-center text-primary font-semibold font-sans w-[250px]">
              <p
                className="text-2xl font-bold text-primary"
                style={{ margin: 0 }}
              >
                ศูนย์ประชุมมารินทร์
              </p>
              <p className="text-lg text-primary" style={{ margin: 0 }}>
                เลขที่ 65 ซอยผดุงวิถี 8 ตำบลตลาด อำเภอเมืองมหาสารคาม
                จังหวัดมหาสารคาม ประเทศไทย 44000
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  openGoogleMaps();
                }}
                className="bg-primary text-white py-2 px-6 rounded-md w-full mt-4 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 shadow-lg transform transition duration-200 ease-in-out hover:scale-105"
                aria-label="Details about the wedding event"
              >
                เปิดใน Google Maps
              </button>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
