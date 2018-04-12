export default {
    template: `
    <section >
        <button @click="sortByTime">byTime</button>
        <button @click="sortByName">byName</button>
   
    </section>
        `
    ,
   
    data(){
        return{
        }
    },
    components: {
        
    },
    methods: {
        sortByName(){
            this.$emit('nameSorted')
        },
        sortByTime(){
            this.$emit('timeSorted')
        }
    },
    created(){
        this.sortByTime();
        this.sortByName();
    }
}

