import { createStore } from "vuex";
import EventService from "../services/EventService";
export default createStore({
  state: {
    user:'Alex',
    events:[],
      event:{}
  },
  mutations: {
    ADD_EVENT(state, event){
      state.events.push(event)
    },
    SET_EVENTS(state, events){
      state.events = events
    },
      SET_EVENT(state, event){
        state.event = event
      }
  },
  actions: {
    createEvent({commit}, event){
      EventService.postEvent(event)
          .then(()=>{
            //add event to vuex state
            commit('ADD_EVENT', event) //(mutation, payload)
          })
          .catch(error=>{
            console.log(error)
          })
    },
    fetchEvents({commit}){
      EventService.getEvents()
          .then(response=>{
              commit('SET_EVENTS', response.data)
          })
          .catch(error=>{
            console.log(error)
          })
    },
      fetchEvent({commit}, id){
          EventService.getEvent(id)
              .then(response=>{
                  commit('SET_EVENT', response)
              })
              .catch(error=>{
                  console.log(error)
              })
      }
  },
  modules: {},
});
