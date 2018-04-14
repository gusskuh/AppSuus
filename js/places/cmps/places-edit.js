import mapService from "../services/map.service.js";


export default {
    template: `
    <section class="place-edit">
        <h1>Edit</h1>
        <form @submit.prevent="saveplace">
            <input type="text" v-model="place.vendor" >
            <button type="submit"> {{(place.id)? 'Save': 'Add'}}</button>
        </form>
    </section>
    `,
    data() {
        return {
            place: { name: '', description: '', id: null }
        }
    },
    created() {
        const placeId = +this.$route.params.placeId;
        if (placeId) {
            placeService.getById(placeId)
                .then(place => {
                    this.place = place
                })
        }
    },
    methods: {
        saveplace() {
            console.log(this.place);
            placeService.saveplace(this.place)
                .then(() => {
                    console.log('Saved!');
                    this.$router.push('/place');
                })
        }
    }
}