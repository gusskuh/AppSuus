

export default {
    props:['mail'],
    template: `
    <section >
        <div class="mail-preview">
            <h2>{{mail.subject}}</h2>
            <h4>{{mail.body}} 
                <span>
                     {{timeToShow}}   
            </span>
            </h4> 

            </div>


    </section>
    `

    ,

    data() {
        return {
        }
    },
    computed: {
        timeToShow() {
            return moment(this.mail.sentAt).fromNow()
        }
    }

}

