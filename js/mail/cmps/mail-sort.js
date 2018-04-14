
export default {
    template: `
    <section class="sort-bar" >
    <a @click="sortByTime" class="button is-success"><i class="fas fa-sort-amount-down"></i>
    <i class="far fa-clock"></i></a>
    <a @click="sortByName" class="button is-success"><i class="fas fa-sort-alpha-down"></i></a>
        <!-- <button @click="sortByTime">byTime</button>
        <button @click="sortByName">byName</button> -->
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
