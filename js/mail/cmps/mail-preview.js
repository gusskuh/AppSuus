

import {bus} from '../../main.js'

export default {
    props: ['mail'],
    template: `
    <section >
        <div class="mail-preview" :class="{ active: isActive }" @click="isRead">
            <!-- <button @click="tog    gle" >Mark Unread</button> -->
                <div class="flex space-between">
                    <div class="mail-header">
                        <h2>{{mail.subject}}</h2>
                    </div>
                        <span class="time-stamp button is-info is-small" >{{timeToShow}}</span>
                </div>
                <h4>{{mail.body}} </h4> 
            <div>
           
             <span  class="icon has-text-success" @click.stop="toggle"> 
            
                    <i  v-if="isActive">Read!</i>
                    <i v-if="!isActive">Unread</i>
                	<!-- <img  v-bind:src="/img/unread.png/"> -->
                <!-- <p v-if="!isMailRead">LALA</p> -->
            </span>
        </div>  
     </div>


    </section>
    `
    ,

    methods: {
        toggle() {
            this.isActive = !this.isActive;
            this.mail.isRead = !this.mail.isRead
            console.log('mail is read?', this.mail)
            // this.isMailRead = !this.isMailRead
            bus.$emit('mailToggeled')
            // console.log('this.isMail read is:', this.isMailRead)
        },
        isRead() {
            this.mail.isRead = true;
            this.isActive = true;
            bus.$emit('mailToggeled')
            // console.log('mail is read?')

        }

    },


    data() {
        return {
            isActive: null,
            isMailRead: true
        }
    },
    computed: {
        timeToShow() {
            return moment(this.mail.sentAt).fromNow()
        }
    }

}

