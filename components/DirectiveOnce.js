//Solo para una vez
//Cuando queremos data en nuestro componente que no queremos que se actualice la data
//Deja de escuchar los cambios
let DirectiveOnce ={
    template: `<div>
                <h2 v-text="title" v-once> </h2>
            </div>
            `,
    data(){
        return{
            title: 'Directiva v-once',
        }
    }
}