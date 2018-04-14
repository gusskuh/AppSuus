import placesService from '../places.service.js'
import placesPreview from './places-preview.js'

export default {
    props: ['places'],
    template: `
    <section>
        <ul>
            <li  v-for="place in places">
                <router-link :to="'/places/'">
                <places-preview :place="place" 
                @delete="$emit('delete', place.id)"
                :key="place.id" > 
                </places-preview>0
                </router-link>
            </li>

        </ul>
    </section>
`
    ,
    methods: {
        // selectPlace(placeId) {
        //     this.$emit('selected', placeId);
        // },


    },
    components: {
        placesPreview,
    }
}
//@click.native="selectPlace(place.id)"