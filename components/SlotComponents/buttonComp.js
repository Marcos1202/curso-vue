//La etiqueta <slot> permite agregar texo a nestro componente
//Esta etiqueta tambien permite agregar texto por defecto
//Tambien recibe un atributo llamado name, util para llamarlo desdes oto archivo por ejemplo "DirectiveSlot.js"
let buttonComp ={
    template: `<button>
                    <slot name="action">Texto por defecto </slot>
                    <slot name="element">Ventana </slot>
                </button>`
} 