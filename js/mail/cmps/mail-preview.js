import mailService from '../mail.service.js'


export default {
    props: ['mail'],
    template: `
    <section >
        <div class="mail-preview" :class="{ active: isActive }">
            <button @click="toggle" >Mark Unread</button>
            <h2>{{mail.subject}}</h2>
            <h4>{{mail.body}} 
                <span>
                     {{timeToShow}}   
            </span>
            </h4> 

            </div>


    </section>
    `,

    methods: {
        toggle() {
            this.isActive = !this.isActive;
            this.mail.isRead = this.isActive;
        },
        // deleteMail() {
        //     console.log('Mail deleted!' + this.mail.id);
        //     mailService.deleteMail(this.mail.id);
        //     this.isShown = false;

        // }

    },

    data() {
        return {
            isActive: false,
            // isShown: true
        }
    },
    computed: {
        timeToShow() {
            return moment(this.mail.sentAt).fromNow()
        }
    }

}

