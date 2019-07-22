import Vue from 'vue'
import VueRouter from 'vue-router'

    Vue.use(VueRouter)

    import App from './components/App'
    import Welcome from './components/Home'
    import Page from './components/Footer'

    const router = new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/home',
                name: 'home',
                component: Home,
                props:['title'],
            },
            {
                path: '/footer',
                name: 'footer',
                component: Footer,
                props: ['title', 'author'],

            },    
        ],
    })
    const app = new Vue({
        el: '#app',
        components: { App },
        router,
    });