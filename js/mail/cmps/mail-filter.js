
export default {
    template: `
    <section class="container book-filter">
        <input v-model="filter.text" type="text" placeholder="serach" @input="emitFilter">
        <select v-model="filter.filterBy" @change="emitFilter">
            <option value="all">All</option>
            <option value="read">Read</option>
            <option value="unread">unRead</option>
        </select>
   
    </section>
        `
    

    ,
    props: ['mails'],
   
    data(){
        return{
            filter: {text:'',filterBy:'all'}
        }
    },
    components: {
        
    },
    methods: {
        emitFilter(){
            this.$emit('filtered',this.filter)
        }
    },
    cretaed(){
        this.emitFilter();
    }
}

