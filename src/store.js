import { createStore } from 'vuex';
import coachesModule from './store/modules/coaches';

const store = createStore({
    modules: {
        coach: coachesModule
    }
});

export default store;
