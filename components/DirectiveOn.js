let DirectiveOn={
    template:`<header>
            <h1 v-text="title" @click="decirHola"> </h1>
            <p v-text="message"></p>
            <button v-on:click="decirHola">Dame clic</button>
            <br>
            <p v-text="pelicula"></p>
            <button @click.stop="comprarEntrada"> Comprar entrada</button>
            disponibles <span v-text="enter"></span> 
            </header>`,
            /////@click.stop el estop impide que el clic se propage a active la funcion de hearder
    data(){
        return{
            title:'Hola mundo',
            message:'Hola desde directiva v-on',
            welcome: 'Hola alerta',
            pelicula: 'Ningún sistema es seguro',
            enter: 5,
           
            
        }
    },
    methods: {
        
        decirHola: function(){
            alert(this.welcome)
        },
        comprarEntrada(){
            if(this.enter >0){
                this.enter--
                return alert(`Entrada para ${this.pelicula} comprada`)
            }else{
                return alert(`Ya no hay entradas`)
            }

        }
    }
}
