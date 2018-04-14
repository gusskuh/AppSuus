import mapService from "../services/map.service.js";

export default {
    template:`
    <section id="map" >
    
    </section>
    `,
    mounted(){
        mapService.initMap()
        .then(
            ()=>{
                mapService.addMarker({lat: 32.0749831, lng: 34.9120554});
            }
        );
    }
}