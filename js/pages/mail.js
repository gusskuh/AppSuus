import utilService from '../services/util.service.js'
import mailService from '../mail/mail.service.js'
import mailList from '../mail/cmps/mail-list.js'
import mailDetails from '../mail/cmps/mail-details.js'
import mailStatus from '../mail/cmps/mail-status.js'
import mailFilter from '../mail/cmps/mail-filter.js'
import mailSort from '../mail/cmps/mail-sort.js'
import mailCompose from '../mail/cmps/mail-compose.js'

export default {
    template: `
    <section>
        
        <mail-filter @filtered="setFilter"></mail-filter>
        
        <mail-status :mails="mails"></mail-status>
        <mail-sort @nameSorted="sortByName" @timeSorted="sortByTime"></mail-sort>
        <!-- {{selctedMail}} -->
        <div class="columns is-multiline is-mobile">
            <div class="column is-one-quarter">
                <mail-list :mails="mails" ></mail-list>
                <a  @click="isCompose=!isCompose" class="button is-info is-outlined">+</a>
            </div>
            <div  class="column">
                <mail-details  v-if="!isCompose" class="mail-details content" @deletedMail="deletedMail"></mail-details>
                <mail-compose v-if="isCompose" @emailSent="emailSent" ></mail-compose>
            </div>
            
        </div>
        <!-- <button @click="isCompose=!isCompose">+</button> -->
       

    </section>
    `
    ,
    methods: {
        deletedMail(mailId) {
            this.mails = mailService.deleteMail(mailId);
        },
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

            this.mails = mailService.addMail(newEmail);
            this.isCompose = false
        }
    },
    data() {
        return {
            mails: [],
            unreadMails: 0,
            isCompose: false

        }
    },
    created() {
        mailService.query()
            .then(mails => {
                this.mails = mails

            })
    },
    computed: {
        // selctedMail(){
        //     return !!(this.$route.params.mailId) 
        // }
    },
    components: {
        mailList,
        mailDetails,
        mailStatus,
        mailFilter,
        mailSort,
        mailCompose
    }
}


