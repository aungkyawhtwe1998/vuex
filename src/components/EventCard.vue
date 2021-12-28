<template>
    <router-link :to="{name: 'EventDetails', params:{id:event.id}}">
        <div class="event-card">
            <span>@{{ event.time }} on {{ event.date }}</span>
            <h4>{{ event.title }}</h4>
        </div>
    </router-link>


</template>

<script>
    export default {
        props: {
            event: { type: Object, required: true },
        },

        name: 'EventCard',


        data() {
            return {

            }
        },
    }
</script>

<style>
    .event-card {

        width: 400px;
        border: 3px solid #2c1e50;
        padding: 10px;
        border-radius: 20px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    .event-card:hover {
        transform: scale(1.01);
        box-shadow: 0 3px 12px rgb(0, 0, 0.2);
    }
    h4 {
        color: #2c1e50;
    }
    .event-link {
        color: #2c3e50;
        text-decoration: none;
    }
</style>
