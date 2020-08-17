// Pasando contenido a nuestros componentes hijos con v-slot
//<template> para no contaminar, esta etiqueta no se mostrará
//Metodo abreviado de V-slot #action (donde action es el name del solot)
//slot nos ayuda a agregar contenido dinamico a nuestras etiquetas
let DirectiveSlot={
    template:`<div>
                <h2 v-text="title"></h2>
                <button-comp>
                    <template v-slot:action>  
                        cerrar
                    </template>
                    <template #element>  
                        Modal
                    </template>
                </button-comp>
            </div>
            `,
    data(){
        return{
            title: 'Directiva v-slot',
        }
    },
    components:{
        buttonComp,
    }
}