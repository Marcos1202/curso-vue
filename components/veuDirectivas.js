Vue.component('vue-directives',{
    template:`<div>
                    <h1 v-text="title"></h1>
                    <p v-text="text"></p>
                    <a v-bind:href="link.href" v-bind:title="link.title" v-text="link.text"></a>
                    <directive-html></directive-html>
                    <DirectiveShow/>
                    <DirectiveIf/>
                    <DirectiveFor/>
                    <DirectiveOn/>
                </div>`,
    data(){
        return{
            title: 'Directivas de Vue.js',
            text: 'Texto de pruba paa v-text',
            link: {
                text: 'VueJS Home',
                href:'https://es.vuejs.org/index.html',
                title: 'Veu Oficial'
            }
        }
    },
    components:{
        'directive-html': DirectiveHtml,
        DirectiveShow,
        DirectiveIf,
        DirectiveFor,
        DirectiveOn
        
    }
})