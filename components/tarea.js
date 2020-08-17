let saludar_comp={
    template:`<div @click="upps">
                <h1 v-text="title"> </h1>
            
                <button @click.stop="saludar">saludar</button>
            </div>`,
            
    data(){
        return{
            title:'Saludo para ti',
            nombre:'Marcos',
            pais: 'México',
            clickAfuera: 'No diste click al botton'  
        }
    },
    methods: {
        upps: function(){
            alert(this.clickAfuera)
        },
        saludar(){
            alert(`Hola Mi nombre es ${this.nombre} y soy de ${this.pais}`)

        }
    }
}