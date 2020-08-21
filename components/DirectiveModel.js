let DirectiveModel ={
    template:`<div>
    <h1 v-text="title"></h1>
    <p  v-html="message"></p>
    <input type="text" v-model="inputText">
    <h2>Tipo Checkbox</h2>
    <label>
        <input type="checkbox" v-model="checked">
        Activado
    </label>

    <h2> Peliculas </h2>
    <lavel v-for="(movie, key) in movies" :key="key">
        <input :value="movie" type="checkbox" v-model="favoritasMovies">
        {{ movie }}
    </lavel>
    <div v-show="favoritasMovies.length">
        <h2 >Peliculas favoritas</h2>
        <ul>
            <li v-for=" i in favoritasMovies">{{i}}</li>
        </ul>
    </div>
</div>`,
    data(){
        return{
            title: 'Directiva v-model',
            message: '<b>Hola desde directive v-model</b>',
            inputText: 'Data del input',
            checked: false,
            favoritasMovies:[],
            movies: ['Buscando a nemo', 'Toy Story', 'Titanic']
        }
    }
}