import mailService  from '../mail/mail.service.js'
import mailList  from '../mail/cmps/mail-list.js'
import mailDetails  from '../mail/cmps/mail-details.js'
import mailStatus  from '../mail/cmps/mail-status.js'



export default {
    template: `
    <section>
        <h1>Mail</h1>
        <mail-status :mails="mails"></mail-status>
        <!-- {{selctedMail}} -->
        <mail-details @deletedMail="deletedMail"></mail-details>
        <mail-list :mails="mails"></mail-list>

    </section>
    `
    ,
    methods: {
        deletedMail(mailId) {
            this.mails = mailService.deleteMail(mailId);
            
        },


    },
    data() {
        return {
            mails: [],
            unreadMails: 0
            
        }
    },
    created(){
        mailService.query()
            .then(mails => {
                this.mails = mails

            })
    },
    computed:{
        // selctedMail(){
        //     return !!(this.$route.params.mailId) 
        // }
    },
    components:{
        mailList,
        mailDetails,
        mailStatus
    }
}


