import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

import { useEffect, useState } from "react";

function Home()
{
    const [ipData, setIpData] = useState(null);

    useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => setIpData(data))
      .catch((err) => console.log(err));
  }, []);
  
    return(
        <>
        <Navbar/>
        {ipData ? ( 
        <div className="main-container">
            <div className="container">
                <div className="form-container">
                    <h2>{ipData.ip}</h2>  
                    <output>{ipData.city}</output>
                    <output>{ipData.country_name}, {ipData.country_code}</output>
                    <output>UTC {ipData.utc_offset} {ipData.timezone}</output>
                    <output>{ipData.org}</output>
                </div>
                <div className="map-container">                  
                    <MapContainer className="mapcont" center={[ipData.latitude, ipData.longitude]} zoom={10} scrollWheelZoom={false} attributionControl={false} >
                        <TileLayer className="tilecont"
                           // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </MapContainer>                   
                </div>
            </div>
        </div>
        ) : (
            console.log("Loading IP data...")
        )}
        <Footer/>
        </>
    )
}

export default Home;


