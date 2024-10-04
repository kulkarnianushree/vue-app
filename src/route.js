import {createRouter,createWebHistory} from 'vue-router'
import CoachList from './components/coaches/CoachList.vue'
import SendMessage from './components/Messages/SendMessage.vue'
import MessageList from './components/Messages/MessageList.vue'
import NotFound from './components/nav/NotFound.vue'
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            redirect:'/coaches'
        },
        {
            path:'/coaches',
            component:CoachList
        },
        {
            path:'/register',
            component:SendMessage,
            name:'sendMessage',
            props:true
        },
        {
            path:'/requests',
            component:MessageList
        },
        {
            path:'/:notFound(.*)',
            component:NotFound
        }
    ]
})
export default router



