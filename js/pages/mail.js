import utilService from '../services/util.service.js'

import mailService from '../mail/mail.service.js'
import mailList from '../mail/cmps/mail-list.js'
import mailDetails from '../mail/cmps/mail-details.js'
import mailFilter from '../mail/cmps/mail-filter.js'
import mailSort from '../mail/cmps/mail-sort.js'
import mailCompose from '../mail/cmps/mail-compose.js'




export default {
    template: `
    <section>
        <h1>Mail</h1>
        <mail-filter @filtered="setFilter"></mail-filter>
        <mail-sort @nameSorted="sortByName" @timeSorted="sortByTime"></mail-sort>
        <mail-details ></mail-details>
        <mail-list  :mails="mails"></mail-list>
        <button @click="isCompose=!isCompose">+</button>
        <mail-compose v-if="isCompose" @emailSent="emailSent" ></mail-compose>


    </section>
    `
    ,

    data() {
        return {
            mails: [],
            isCompose:false
        }
    },
    created() {
        mailService.query()
            .then(mails => {
                this.mails = mails
            })
    },
    methods: {
        setFilter(filter) {
            mailService.query(filter)
                .then(mails => this.mails = mails)
        },
        sortByName() {
            utilService.sortByName(this.mails)
        },
        sortByTime() {
            utilService.sortByTime(this.mails)
        },
        emailSent(newEmail) {
            
            this.mails=mailService.addMail(newEmail);
            this.isCompose = false
        }

    },
    computed: {


    },
    components: {
        mailList,
        mailDetails,
        mailFilter,
        mailSort,
        mailCompose

    }
}


// @sort="sort"