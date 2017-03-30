import Vue from 'vue'

// import Second from './Second.vue'
// import Third from './Third.vue'
// import Animation from './Animation.vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Loader from './Loader.vue'
Vue.use(VueRouter)

const Foo = {template: '<div>foo</div>'};
const Bar = {template: '<div>Bar<router-view></router-view></div>'};
const User = {
    template: '<div>{{ $route.params.id }}ss<div></div>{{$route.params.post}}</div>',
    watch: {
        '$route' (to,from) {
            console.log(to);
            console.log(from);
        }
    }
};
const Change = {
    template: '<div>{{$route.query.user}}</div>'
}

const routes = [
    { path: '/foo', components: {
            default: Foo,
            a: Bar,
            b: Foo,
        }
    },
    { path: '/bar/:bar', component: Bar,
      children: [
          {
              path: '',
              component: App
          },
          {
              path: 'profile',
              component: App
          },
          {
              path: 'letss',
              component: Foo
          },
      ]
    },
    { path: '/user/:id', component: User},
    { path: '/user', component: User},
    { path: '/user/:id/post/:post', component: User},
    { path: '/change', component: Change, name: 'change'},

];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router,
    components: {
        'loader': Loader
    },
    methods: {
        change(){
            router.push({ name: 'change', query: { user: 900}});
            // router.go(-100);
        }
    }
}).$mount('#app');
