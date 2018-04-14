import mailService from '../mail.service.js'
import mailPreview  from './mail-preview.js'
import {bus} from '../../main.js'


export default {
    template: `
    <section> 
        <h1>Unread Mails: {{unreadMails}}</h1>   
        <progress class="progress is-danger" v-bind:value="unreadMails" max="100">90%</progress>
    </section>
    `

    ,
    // props: ['unreadMails'],
    
    data() {    
        return {
            unreadMails: mailService.getUnreadMails(),
            // unRMails: this.unreadMails
            
        }
    },
    components: {
        mailPreview
    },

    methods: {
        statusTest(){
            console.log(this.mails)
            console.log('unread mails are:',this.unreadMails)

        }
    },
     
    created(){
       this.statusTest();
    //    this.unreadMails = mailService.getUnreadMails()
       bus.$on('mailToggeled', (data) => {
           console.log('bus triggered')
        this.unreadMails = mailService.getUnreadMails()
       })
    //    this.getUnreadMails();
    //    mailService.getUnreadMails()
    }
}

