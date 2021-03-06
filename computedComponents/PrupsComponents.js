Vue.component('props-comp', {
    template:`
            <div>
                <h1>Peliculas</h1>
                <MovieComp v-for="(movie, key) in movies" 
                    :key="key" 
                    :id="movie.id" 
                    :title="movie.title" 
                    :synopsis="movie.synopsis" 
                    :cover="movie.cover"
                    :like.sync="movie.like"
                   
                    
                    />
            </div>`,
            //:like.sync="movie.like"
    data(){
        return{
            movies: [
                {
                    id: 1,
                    title: 'Titanic',
                    synopsis: 'Durante las labores de recuperación de los restos del famoso trasatlántico Titanic, una anciana norteamericana se pone en contacto con la expedición para acudir…',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/zraTDtulFw2wrpyuYf646k95MNq.jpg',
                    like: false
                },
                {
                    id: 2,
                    title: 'El Rey León',
                    synopsis: 'Un remake del clásico animado de Disney de 1994 El rey león que estará dirigido por Jon Favreu. Simba (Donald Glover) es el hijo del rey de los leones, Mufasa…',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/3A8ca8WOBacCRujSKJ2tCVKsieQ.jpg',
                    like: false
                },
                {
                    id: 3,
                    title: 'Toy Story',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/uMZqKhT4YA6mqo2yczoznv7IDmv.jpg',
                    synopsis: 'Una pelicula de jugetes…',
                    like: false
                }
            ]
        }
    },
    components:{
        MovieComp
    },
     methods: {
        onToggloeLike(data){
            let moviesLike = this.movies.find(movie => movie.id == data.id)
            moviesLike.like = data.like
            //this.like = like 
        }
    } 
})