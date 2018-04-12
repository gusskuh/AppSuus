import mailService from '../mail.service.js'


export default {
    props: ['mail'],
    template: `
    <section >
        <div class="mail-preview box" :class="{ active: isActive }">
            <!-- <button @click="toggle" >Mark Unread</button> -->
            <div class="flex space-between">
                <h2>{{mail.subject}}</h2><span class="button is-info is-small" >{{timeToShow}}</span>
            </div>
                <h4>{{mail.body}} 
               
            </h4> 
            
            <a class="button is-small is-info is-outlined" @click="toggle"><i class="fas fa-map-marker"></i></a>
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

