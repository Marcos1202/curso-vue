let MovieComp = {
    template: `
        <div>
            <h2 v-text="title" > </h2>
            <img :src="cover"/>  
            <p v-text="synopsis"> </p>
            <button @click="" v-text="like ? 'Favorita' : 'Agregar a favoritas'"> </button>
            <hr>
        </div>
        `,
        //@click="$emit('update:like', !like)"
        props :{
            id:{
                type: Number,
                required: true,
            },
            title:{
                type: String,
                required: true,
        
            },
            synopsis:{
                type: String,
                default: 'No disponible'
            },
            cover:{
                type: String
                
            },
            like:{
                type: Boolean,
                required: true,
                defaul(){
                    return false
                }
            }
        },
       
    methods: {
        toggleLike (){
            let data ={
                id: this.id,
                like: !this.like
            }
            this.$emit('toggleLike', data)
        }
    }
}




/* otra forma de usar props

 /* props:[
        'id',
        'title',
        'synopsis',
        'cover',
        'like'
    ], */
