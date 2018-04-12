import mailService from '../mail.service.js'



export default {
    template: `
    <section>
       <h1>Unread Mails <span>{{this.unreadMails}}</span></h1>
       <progress class="progress is-success" value="10" max="100">40%</progress>
    </section>
    `
    ,
    
    props: ['mails'],
    data() {
        return {
            unreadMails: this.mails.length  
        }
    },

    methods: {
        getUnreadMails() {
            for(var i = 0; i < this.mails.length; i++) {
                console.log('dsdasdsadas' ,this.mails)
            }
        }
    },

    created(){
    }

    
}

