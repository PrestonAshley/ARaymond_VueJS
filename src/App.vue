<script setup>
import SideBar from "./components/SideBar.vue";
</script>

<template>
  <div id="app" class="app-layout">
    <SideBar />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

<style scoped>
.app-layout {
  display: flex;
}

.main-content {
  flex: 1;
}
</style>
