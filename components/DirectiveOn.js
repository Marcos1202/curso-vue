let DirectiveOn={
    template:`<header>
            <h1 v-text="title"> </h1>
            <p v-text="message"></p>
            <button v-on:click="decirHola">Dame clic</button>
            </header>`,
    data(){
        return{
            title:'Hola mundo',
            message:'Hola desde directiva v-on',
            welcome: 'Hola alerta',
            enter: 5
            
        }
    },
    methods: {
        decirHola: function(){
            alert(this.welcome)
        }
    }
}
