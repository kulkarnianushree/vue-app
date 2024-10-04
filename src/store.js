import { createStore } from 'vuex';
import coachesModule from './store/modules/coaches';
import messagesModule from './store/modules/messages';
const store = createStore({
    modules: {
        coach: coachesModule,
        message:messagesModule
    }
});

export default store;
