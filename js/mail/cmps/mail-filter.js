
export default {
    template: `
    <section class="search-bar">
        
        <div class="field is-grouped">
            <p class="control is-expanded">
                <input class="input" v-model="filter.text" type="text" placeholder="serach" @input="emitFilter">
            </p>
            <p class="control">
                <a class="button is-info">
                    Search
                </a>
            </p>
        </div>
        <div class="control">
            <div class="select">
                <select v-model="filter.filterBy" @change="emitFilter">
                    <option value="all">All</option>
                    <option value="read">Read</option>
                    <option value="unread">unRead</option>
                </select>
            </div>
        </div>
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

