let MovieComp = {
    template: `
        <div>
            <h2 v-text="title" > </h2>
            <img :src="cover"/>  
            <p v-text="synopsis"> </p>
            <button @click="toggleLike" v-text="like ? 'Favorita' : 'Agregar a favoritas'"> </button>
            <hr>
        </div>`,
    props:[
        'id',
        'title',
        'synopsis',
        'cover',
        'like'
    ],
    methods: {
        toogleLike (){
            this.$emit('toggleLike', !this.like)
    }
}

//otra forma de usar props

/* props{
    id:{
        type: Number,
        required: true,
    },
    titel:{
        type: String,
        required: true,

    },
    synopsis:{
        type: String,
        default: 'No disponible'
    },
    cover:{
        type: String,
        required: true,
    },
    like:{
        type: Boolean,
        required: true,
        defaul(){
            return false
        }
    }
}

*/