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
    components: {
        mailPreview
    }
}

