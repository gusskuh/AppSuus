export default {
    template: `
    <section class="container book-filter">
        <form  action="">
            <input v-model="mailInfo.subject" type="text">
            <textarea v-model="mailInfo.body"  cols="30" rows="10"></textarea>
            <button @click.prevent="sendEmail" type="submit">send</button>
        </form>
    </section>
        `
    ,
   
    data(){
        return{
            mailInfo:{subject:'',body:'' ,sentAt:'' ,id:null}
        }
    },
    components: {
        
    },
    methods: {
        emitFilter(){
            this.$emit('filtered',this.filter)
        },
        sendEmail(){
            this.mailInfo.sentAt= Date.now()
            this.$emit('emailSent',this.mailInfo)
        }
    },

    cretaed(){
        sendEmail()
    }
}

