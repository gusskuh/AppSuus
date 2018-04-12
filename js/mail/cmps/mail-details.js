import mailService from '../mail.service.js'

export default {
    template: `
    <section class="box">
    <a class="delete is-large" @click="deleteMail">Delete</a>
    <!-- <button @click="deleteMail">Delete</button> -->
      
        <div v-if="mail">
            <h1 class="mail-detials-title">{{mail.subject}}</h1>
            <h4>{{mail.body}}</h4> 
        </div> 


    </section>
    `,

    data() {
        return {
            mail: null
        }
    },
    methods: {
        updateMail(){
            var  mailId = +this.$route.params.mailId;
            if(!mailId) mailId = 1
            mailService.getMailById(mailId)
                .then(mail => {
                    this.mail = mail
                })    
        },

        deleteMail() {
            console.log('Mail deleted!' , this.mail.id);
            this.$emit('deletedMail', this.mail.id);
            // mailService.deleteMail(this.mail.id); 
            // this.isShown = false;

        }
    },
    
    created() {
        this.updateMail()
    },
    watch: {
        '$route'(to , from){
            this.updateMail()
        }
    },

}




