import { createRouter, createWebHistory } from "vue-router";
import EventCreate from "../views/event/EventCreate";
import EventList from "../views/event/EventList";
import About from "../views/About";
import EventDetails from "../views/event/EventDetails";
import ErrorDisplay from "../views/ErrorDisplay";
const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails
  },
  {
    path:"/event/create",
    name:"EventCreate",
    component: EventCreate
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: '/error/:error',
    nae: 'ErrorDisplay',
    props: true,
    component: ErrorDisplay
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
