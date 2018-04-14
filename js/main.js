import navBar from './cmps/nav-bar.js'
import router from './routes.js'

export const bus = new Vue();

new Vue({
    el: '#app',
    components: {
        navBar
        
      },
      router
})



