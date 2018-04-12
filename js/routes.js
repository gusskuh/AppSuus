import home from './pages/home.js'
import mail from './pages/mail.js'
import places from './pages/places.js';
import keeper from './pages/keeper.js';


const routes = [
  {path: '/', component: home},
    {path: '/mail', component: mail},
    {path: '/places', component: places},
    {path: '/keeper', component: keeper},
    {path: '/mail/:mailId', component: mail},
  ];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes})

export default myRouter;