let DirectiveFor = {
    template:`<div>
                <h1 v-text="title"></h1>
                <p v-html="message"></p>
                <h3>Lista de un array</h3>
                <ul>
                    <li v-for="(color, index) in list" :key="index" v-text="color"></li>
                </ul>
                <h3>Lista de un objeto</h3>
                <ul>
                    <li v-for="(item, key, index) in object_list" :key="index" >
                        {{key}}: {{item}}
                    </li>
                </ul>
                <h3>Lista de un array con objetos</h3>
                <ul>
                    <li v-for="(item,  index) in other_list" :key="index" >
                        Nombre: {{item.name}}<br/>
                        Apellido: {{item.last_name}}<br/>
                        Edad: {{item.age}}
                    </li>
                </ul>
                </div>`,
    data(){
        return{
            title: 'Directiva v-for',
            message: '<b>Hola desde directive v-for</b>',
            list: ['Rojo', 'amarillo', 'azul', 'purpura', 'rosa'],
            object_list:{
                name:'Marcos',
                last_name: 'Castro',
                age: 23
            },
            other_list:[
                {
                name:'Marcos',
                last_name: 'Castro',
                age: 23
                },
                {
                name:'User',
                last_name: 'Castro',
                age: 21
                },
                {
                name:'Otro nombre',
                last_name: 'Castro',
                age: 20
                }
            ]
        }
    }
}