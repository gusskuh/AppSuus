import placesMap from "../places/cmps/places-map.js";
import placesList from "../places/cmps/places-list.js";
import placesService from "../places/places.service.js";


import locService from "../places/services/loc.service.js";
import mapService from "../places/services/map.service.js";




export default {
    template: `
     <section class="container grid-container">
        
        <div class="map"  >
            <places-map></places-map>
            <places-list :places="places" @delete="deletePlace"></places-list>
        </div>
        
    </section>
    `,
    data() {
        return {
            gLoc: null,
            places: [],
            selectedPlace: null,
        }
    },
    created() {
        placesService.query()
            .then(places => this.places = places)

    },

    methods: {
        
        deletePlace(id) {
            placesService.deletePlace(id)
                .then(places=> this.places=places);
        },
    },
    components: {
        placesMap,
        placesList
    }
}
