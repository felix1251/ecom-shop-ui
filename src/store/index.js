import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    currentUser: {},
    signedIn: false,
    serverUrl: "http://localhost:3020"
  },
  mutations: {
    setCurrentUser(state, {currentUser}){
      state.currentUser = currentUser
      state.signedIn = true
    },
    unsetCurrentUser(state){
      state.currentUser = {}
      state.signedIn = false
    },
  },
  actions: {
  },
  getters: {
    isSignedIn(state){
      return state.signedIn
    }
  },
  plugins: [
    createPersistedState({
      paths: [
        "currentUser",
        "signedIn",
      ]
    })
  ],
});
