//compute guara toda la informacion en cache
//Utiles para hacer calculos recurrentes
//los metodos consumen mas recursos


Vue.component('computed-properties', {
    template:`
    <div>
        <h1>Computed Propierties</h1>
        <p>Hola soy {{fullName}} </p>
        <p>y tengo {{userAge}} años</p>
        <p>{{nombreCompleto()}} </p>
    </div>`,
    data(){
        return {
            user:{
                name: 'Marcos',
                lastName: 'Castro',
                year: '1997'
            }
        }
    },
    computed: {
        fullName(){
            return `${this.user.name} ${this.user.lastName}`
        },
        userAge () {
            let date = new Date()
            let currentYear = date.getFullYear() 
            //date.getFullYear() nos retorna el año
            return currentYear - Number(this.user.year)
        }
    },
    methods: {
        nombreCompleto () {
            return `${this.user.name} ${this.user.lastName}`
        }
    }

})