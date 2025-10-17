import { createRouter, createWebHistory } from "vue-router";

// Import your page components
import QualityDisplay from "../views/QualityDisplay.vue";
import BoxContentCheck from "../views/BoxContentCheck.vue";
import Settings from "../views/Settings.vue";

// Define routes
const routes = [
  {
    path: "/QualityDisplay",
    name: "QualityDisplay",
    component: QualityDisplay,
  },
  {
    path: "/BoxContentCheck",
    name: "BoxContentCheck",
    component: BoxContentCheck,
  },
  { path: "/settings", name: "Settings", component: Settings },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
