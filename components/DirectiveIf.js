let DirectiveIf ={
    template:`<div>
                <h1 v-text="title"></h1>
                <p v-if="show" v-html="message"></p>
                <h2>Uso de V-if / v-else-if / v-else</h2>
                <p v-if="user.permission && user.vip">El usuario tiene permisos para ver esto y es VIP</p>
                <p v-else-if="user.permission">El usuario tiene permisos para ver esto</p>
                <p v-else-if="user.vip">El usuario es VIP</p>
                <p v-else>El usuario no tiene permiso</p>
            </div>`,
    data(){
        return{
            title: 'Directiva v-If',
            message: '<b>Hola desde directive v-If</b>',
            show: true,
            user:{
                permission:false,
                vip: true,
            }
            
        }
    }
}