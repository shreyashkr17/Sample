import React,{useRef,useState,useEffect} from "react";
import Navbar from "../Navbar/navbar";
import "./location.js";
import "./map.css";

import "@tomtom-international/web-sdk-maps/dist/maps.css";
import * as tt from "@tomtom-international/web-sdk-maps";

const Map = () => {
  const mapElement = useRef();
  const [mapLongitude,setMapLongitude] = useState(77.29927929259831);
  const [mapLatitude,setMapLatitude] = useState(28.514107356629626);
  const [mapZoom,setMapZoom] = useState(3.5);
  const [map,setMap] = useState({});

  const increaseZoom = () => {
    if(mapZoom < 1000){
      setMapZoom(mapZoom+1);
    }
  };

  const decreaseZoom = () =>{
    if(mapZoom > 1){
      setMapZoom(mapZoom-1)
    }
  };

  const updateMap = () =>{
    map.setCenter([parseFloat(mapLongitude), parseFloat(mapLatitude)]);
    map.setZoom(mapZoom);
  }

  var aiia = [77.29927929259831,28.514107356629626];

  useEffect(()=>{
    let map = tt.map({
      /* 
      This key will API key only works on this Stackblitz. To use this code in your own project,
      sign up for an API key on the TomTom Developer Portal.
      */
      key: "xzM4VJw32rEsV39hbf3QMi0GMBHTW7aZ",
      container: mapElement.current,
      stylesVisibility:{
        trafficIncidents:true,
        trafficFlows:true
      },
      center: [78.9629,20.5937],
      zoom: mapZoom
    });
    
    // longitude and Latitude of Ayurveda Hospitals
    var sriVisista = [78.43476520643003,17.79711232588974];
    var VccAyur = [77.37015096209693,29.011660200681398];
    var Maharishi  = [77.12845174976101,29.39525442648405];
    var HealingEarth = [77.72405638476455,13.387204649180696];
    var Amrutkalp = [72.74207849404002,21.77177991218617];
    var jeevan = [85.00533460012866,26.141600105770358];
    var Ayurbeth = [76.19285386625076,11.083845537548928];





    var marker1 = new tt.Marker().setLngLat(aiia).addTo(map);
    var marker2 = new tt.Marker().setLngLat(sriVisista).addTo(map);
    var marker3 = new tt.Marker().setLngLat(VccAyur).addTo(map);
    var marker4 = new tt.Marker().setLngLat(Maharishi).addTo(map);
    var marker5 = new tt.Marker().setLngLat(HealingEarth).addTo(map);
    var marker6 = new tt.Marker().setLngLat(Amrutkalp).addTo(map);
    var marker7 = new tt.Marker().setLngLat(jeevan).addTo(map);
    var marker8 = new tt.Marker().setLngLat(Ayurbeth).addTo(map);
    // var marker9 = new tt.Marker().setLngLat().addTo(map);
    // var marker10 = new tt.Marker().setLngLat().addTo(map);
    // var marker11 = new tt.Marker().setLngLat().addTo(map);
    // var marker12 = new tt.Marker().setLngLat().addTo(map);
    // var marker13 = new tt.Marker().setLngLat().addTo(map);
    // var marker14 = new tt.Marker().setLngLat().addTo(map);

    var popupOffsets = {
      top: [0, 0],
      bottom: [0, -70],
      "bottom-right": [0, -70],
      "bottom-left": [0, -70],
      left: [25, -35],
      right: [-25, -35],
    }

    // PopUp Defining of Different location
    var popup1 = new tt.Popup({ offset: popupOffsets }).setHTML(
      "<div><p>All India Institute Of Ayurveda, Delhi</p><p>G77X+7R4, Mathura Rd</p></div>"
    );
    var popup2 = new tt.Popup({ offset: popupOffsets }).setHTML(
      "<div><p>Sri Visista Super Speciality Ayurveda Hospital</p><p>204,401, Concorde Apartments, Near Civil Supplies Bhavan</p></div>"
    );
    var popup3 = new tt.Popup({ offset: popupOffsets }).setHTML(
      "<div><p>VCC AYURVEDA AND MEDICAL RESEARCH LLP</p><p>B-101, Block B, Sector 52, Noida, Uttar Pradesh 201301</p></div>"
    );
    var popup4 = new tt.Popup({ offset: popupOffsets }).setHTML(
      "<div><p>Maharishi Ayurveda Hospital</p><p>West, Block BP, West Shalimar Bagh, Shalimar Bagh, Delhi, 110088</p></div>"
    );
    var popup5 = new tt.Popup({ offset: popupOffsets }).setHTML(
      "<div><p>Healing Earth Ayurveda Hospital, Bangalore</p><p>#149,HSR, Outer Ring Rd, HSR Layout 5th Sector, Bengaluru, Karnataka 560034</p></div>"
    );
    var popup6 = new tt.Popup({ offset: popupOffsets }).setHTML(
      "<div><p>Amrutkalp Ayurvedic Panchkarma Hospital</p><p>201,202,203,Sangini Magnus, Rushabh Char Rasta, Adajan Patiya, Surat, Gujarat 395005</p></div>"
    );
    var popup7 = new tt.Popup({ offset: popupOffsets }).setHTML(
      "<div><p>Jeevan Ayurveda Hospital</p><p>Jeevan Ayurved Hospital, Ayurved Nagar, Nargada, Ushri Road P.O- Jamsaut, Danapur, Bihar 801503</p></div>"
    );
    var popup8 = new tt.Popup({ offset: popupOffsets }).setHTML(
      "<div><p>Ayur Bethaniya Ayurveda Hospital</p><p>Athani - Thiruthiparambu Rd, Peringandoor, Kerala 680581</p></div>"
    );

    marker1.setPopup(popup1).togglePopup();
    marker2.setPopup(popup2).togglePopup();
    marker3.setPopup(popup3).togglePopup();
    marker4.setPopup(popup4).togglePopup();
    marker5.setPopup(popup5).togglePopup();
    marker6.setPopup(popup6).togglePopup();
    marker7.setPopup(popup7).togglePopup();
    marker8.setPopup(popup8).togglePopup();

    setMap(map);
    
    return () => map.remove();
  },[])

  return (
    <div className="Map">
      <Navbar />
      <div className="map_container">
        <div className="inner_cont">
          <div ref={mapElement} className="mapDiv"></div>
        </div>
      </div>
    </div>
  );
};

export default Map;
