<!--Vuex 1 creating the form-->
<template>
    <h1>Create an event</h1>
    <div class="form-container">
        <form @submit.prevent="onSubmit">
            <label for="">Select a Category: </label
            ><select v-model="event.category" name="" id="">
            <option
                    v-for="option in categories"
                    :value="option"
                    :key="option"
                    :selected="option == event.category"
            >
                {{ option }}
            </option>
        </select>

            <h3>Name & describe your event</h3>
            <label>Title</label>
            <input v-model="event.title" type="text" placeholder="Title" />
            <label>Description</label>
            <input
                    v-model="event.description"
                    type="text"
                    placeholder="Description"
            />

            <h3>Where is your event?</h3>
            <label for="">Location</label>

            <input v-model="event.location" type="text" placeholder="Location" />

            <h3>When is your event?</h3>
            <label for="">Date</label>

            <input v-model="event.date" type="text" placeholder="Date" />
            <label for="">Time</label>

            <input v-model="event.time" type="text" placeholder="Time" />
            <button type="submit">Submit</button>
        </form>
<!--        <div>{{$store.state.events}}</div>-->
    </div>
</template>

<script>
    import {v4 as uuidv4} from 'uuid'
    export default {
        data() {
            return {
                categories: [
                    "sustainability",
                    "nature",
                    "animal welfare",
                    "housing",
                    "education",
                    "food",
                    "community",
                ],
                event: {
                    id: "",
                    category: "",
                    title: "",
                    description: "",
                    location: "",
                    date: "",
                    time: "",
                    organizer: ''
                },
            };
        },
        methods: {
            onSubmit() {
                // this.event.id=uuidv4()
                // this.event.organizer = this.$store.state.user
                // console.log("Event:", this.event)
                //OR
                //new syntax to add new on obj
                const event ={
                    ...this.event, //spread operator
                    id:uuidv4(),
                    organizer: this.$store.state.user
                }
                //move to action
               /* EventService.postEvent(event)
                .then(()=>{
                    //add event to vuex state
                    this.$store.commit('ADD_EVENT', event) //(mutation, payload)
                })
                .catch(error=>{
                    console.log(error)
                })*/

                //call action
                this.$store.dispatch('createEvent', event)
                .then(()=>{
                    this.$router.push({
                        name:'EventDetails',
                        params: {id: event.id}
                    })
                }).catch(error =>{
                    this.$router.push({
                        name:'ErrorDisplay',
                        params:{error:error}
                    })
                })
            },
        },
    };
</script>

<style scoped>
    form{
        margin: auto;
        width: 400px;
        display: flex;
        flex-flow: column;

    }
    label{
        padding: 5px;
    }
    input, select{
        margin: 5px;
        padding: 10px;
        border-radius: 20px;
        border: 2px solid gray;
        background: white;
        box-shadow: 1px 2px rgba(193, 187, 187, 0.73);
    }
    button{
        background: #2c3e50;
        color: aliceblue;
        padding: 20px;
        border: none;
        border-radius: 20px;
        width: fit-content;
        margin: auto;
    }
    button:hover{
        background: #2c1e50;
    }
</style>
