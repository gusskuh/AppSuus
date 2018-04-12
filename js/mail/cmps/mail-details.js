import mailService from '../mail.service.js'

export default {
    template: `
    <section style="background: red">
        <h3>mail-details</h3>
        <div class="mail-details" v-if="mail">
            <h1>{{mail.id}}</h1>
            <h4>{{mail.body}} 
                <span>
                     {{mail.sentAt}}   
            </span>
            </h4> 
        </div> 


    </section>
    `

    ,

    data() {
        return {
            mail:null
        }
    },
    methods: {
        updateMail(){
            var mailId = +this.$route.params.mailId;
            if (!mailId) mailId = 1
            mailService.getMailById(mailId)
                .then(mail => {
                    this.mail = mail
                })    
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

