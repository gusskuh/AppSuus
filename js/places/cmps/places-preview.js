export default {
    props: ['place'],
    template: `
    <section >
        <div @click.stop="" class="place-preview">
            <h2>{{place.name}} <button @click.stop="$emit('delete')">delete</button> </h2>
            <h4>{{place.id}} 
            </h4> 

            </div>


    </section>
    `

    ,
    methods: {
        
    }
}

