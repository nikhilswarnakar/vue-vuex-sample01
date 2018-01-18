import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        //TODO: implement
        isTrue : true,
        toDate: null,
        parentString: "",
        showQuotaPanel: false,      
        count: 0
    },
    getters: {
        //TODO: implement
        isTrue: function(state) {
            return state.isTrue;
        }

    },
    mutations: {
        //TODO: implement
        toggle: function(state,payload) {
            state.isTrue = !state.isTrue;
            console.log(payload.toDate);
            console.log(payload.parentString);
            console.log(payload.showQuotaPanel);
            console.log(payload.count);
        }

    },
    actions: {
        //TODO: implement
        toggle: function(context,payload) {
            context.commit('toggle',payload);
        }


    }

})