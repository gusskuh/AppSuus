export default {
    template: `
    <section>
        
            <!-- <input v-model="mailInfo.subject" type="text">
            <textarea v-model="mailInfo.body"  cols="30" rows="10"></textarea>
            <a @click.prevent="sendEmail" type="submit" class="button is-info is-outlined">Send</a> -->
            <!-- <button @click.prevent="sendEmail" type="submit">send</button> -->
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Subject</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input v-model="mailInfo.subject" class="input is-danger" type="text" placeholder="e.g. Partnership opportunity">
                  </div>
                  <p class="help is-danger">
                    This field is required
                  </p>
                </div>
              </div>
            </div>
            
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Your Message</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <textarea v-model="mailInfo.body" class="textarea" placeholder="Explain how we can help you"></textarea>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="field is-horizontal">
              <div class="field-label">
                <!-- Left empty for spacing -->
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <button  @click.prevent="sendEmail" type="submit" class="button is-primary">
                      Send 
                    </button>
                  </div>
                </div>
              </div>
            </div>
        
    </section>
        `










    ,
   
    data(){
        return{
            mailInfo:{subject:'',body:'' ,sentAt:'' ,id:null}
        }
    },
    components: {
        
    },
    methods: {
        emitFilter(){
            this.$emit('filtered',this.filter)
        },
        sendEmail(){
            this.mailInfo.sentAt= Date.now()
            this.$emit('emailSent',this.mailInfo)
        }
    },

    cretaed(){
        sendEmail()
    }
}