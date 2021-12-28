<template>
    <div v-if="event">
        <h1>{{event.title}}</h1>
        <p>{{event.time}}</p>
        <p></p>
    </div>
</template>

<script>
    // import EventService from "../../services/EventService";

    export default {
        props:['id'],

       /* data(){
            return{
                event:null
            }
        },*/

        created() {
            /*EventService.getEvent(this.id)

            .then(response=>{
                this.event = response.data
            })
            .catch(error=>{
                console.log(error)
            })*/
            this.$store.dispatch('fetchEvent', this.id)
        },
        computed:{
            event(){
                return this.$store.state.event
            }
        }
    }
</script>

<style scoped>

</style>