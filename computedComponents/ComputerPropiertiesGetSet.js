Vue.component('computed-properties-get-set', {
    template:`
    <div>
        <h1>Computed Propierties Get y Set</h1>
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
        fullName:{
            get(){
                return `${this.user.name} ${this.user.lastName}`
            },
            set(newValue){
                let name = newValue.split(' ')

                this.user.name = name[0]
                this.user.lastName = name[1]
            }

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