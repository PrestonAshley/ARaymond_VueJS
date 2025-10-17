<template>
  <div class="sidebar">
    <div class="icon-group">
      <div class="icon-item">
        <img src="@/assets/logo-araymond.svg" alt="Logo" class="logo" />
      </div>
      <div class="icon-item">
        <router-link
          to="/BoxContentCheck"
          class="icon-link"
          :class="{ active: currentPage === 'BoxContentCheck' }"
        >
          <img src="@/assets/actions_svg.svg" alt="Globe" class="icon" />
        </router-link>
      </div>
      <div class="icon-item">
        <router-link
          to="/QualityDisplay"
          class="icon-link"
          :class="{ active: currentPage === 'QualityDisplay' }"
        >
          <img src="@/assets/globe_svg.svg" alt="Globe" class="icon" />
        </router-link>
      </div>
      <div class="icon-item">
        <router-link
          to="/settings"
          class="icon-link"
          :class="{ active: currentPage === 'Settings' }"
        >
          <img src="@/assets/spanner_svg.svg" alt="Globe" class="icon" />
        </router-link>
      </div>
    </div>

    <div class="user-profile">
      <div>
        <img src="@/assets/globe_svg.svg" alt="Language" class="language" />
      </div>
      <div>
        <img
          src="@/assets/arrow-right-from-bracket-solid-full.svg"
          alt="Log Out"
          class="logoff"
        />
      </div>
      <div class="user-info">
        <img
          src="@/assets/user-regular-full.svg"
          alt="Globe"
          class="user-icon"
        />
        <div class="user-name">Langevin Jacques</div>
      </div>
      <div class="env-status">TEST</div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const currentPage = route.name;
</script>

<style scoped>
.sidebar {
  height: 100vh;
  width: 10vh;
  background-color: #0056b3;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-item {
  margin: 20px 0;
  /* background-color: silver; */
}

.logo {
  width: 80px;
  height: 50px;
  padding: 5px;
  background-color: white;
}

.icon {
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.icon-link {
  display: inline-block;
  padding: 8px;
  border-radius: 8px;
  background-color: transparent; /* default background */
  transition: background-color 0.3s ease; /* smooth transition */
}

.icon-link.active {
  background-color: #003f7f;
}

.icon-link:hover {
  background-color: #003f7f;
}

.user-profile {
  margin-top: auto;
  text-align: center;
}

.language {
  width: 30px;
  height: 30px;
  padding: 5px;
  cursor: pointer;
  background-color: #0056b3;
  margin-bottom: 10px;
}

.language:hover {
  background-color: #003f7f;
}

.logoff {
  width: 30px;
  height: 30px;
  padding: 5px;
  cursor: pointer;
  background-color: #0056b3;
  margin-bottom: 10px;
}

.logoff:hover {
  background-color: #003f7f;
}

.user-info {
  margin-bottom: 20px;
}

.user-icon {
  width: 70px;
  height: 70px;
  padding: 5px;
  cursor: pointer;
  background-color: #0056b3;
}

.user-name {
  font-size: 14px;
  font-weight: bold;
}

.env-status {
  font-size: 12px;
  color: gray;
}
</style>
