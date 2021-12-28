<template>
    <h1>Events for Good</h1>
    <div class="events">
        <EventCard v-for="event in events" :key="event.id" :event="event"/>
    </div>
</template>

<script>
    import EventCard from "../../components/EventCard";
    export default {
        name:'EventList',
        components: {EventCard},
       /* data(){
            return{
                events:null
            }
        },*/

        created() {
          /*  EventService.getEvents()
            .then(response=>{
                this.events = response.data
            })
            .catch(error=>{
                console.log(error)
            })*/

            this.$store.dispatch('fetchEvents')
                .catch(error =>{
                    this.$router.push({
                        name:'ErrorDisplay',
                        params:{error:error}
                    })
                })
        },
        computed:{
            events(){
                return this.$store.state.events
            }
        },
    }
</script>


<style scoped>
.events{
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
}
</style>