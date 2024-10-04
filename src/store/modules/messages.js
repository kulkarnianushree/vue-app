export default {
    namespaced: true,
    state: function() {
      return {
        messages: [] 
      };
    },
    mutations: {
      addMessage(state, payload) {
        state.messages.push(payload); 
      }
    },
    actions: {
      addMessage(context, payload) {
        context.commit('addMessage', payload); 
      }
    },
    getters: {
      messages(state) {
        console.log( state.messages)
        return state.messages; 
      }
    }
  };
  