import mailService from '../mail.service.js'
import mailPreview  from './mail-preview.js'


export default {
    template: `
    <section>
        
        <ul>
            <li  v-for="mail in mails">
                <router-link :to="'/mail/'+mail.id">
                <mail-preview :mail="mail"> </mail-preview>
                </router-link>
        </li>

        </ul>

    </section>
    `

    ,
    props: ['mails'],
    data() {
        return {
        }
    },

    methods: {
        getUnreadMails() {
            console.log('this is coming from the list cmps', this.mails)
            // for(var i = 0; i < this.mails.length; i++) {
            //     console.log('dsdasdsadas' ,this.mails)
            // }
        }
    },

    components: {
        mailPreview
    },
    created(){
        this.getUnreadMails()
    }
}

