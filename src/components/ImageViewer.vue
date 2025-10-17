<template>
  <div>
    <!-- Display loading while image URL is fetched -->
    <!-- <div v-if="loading">Loading image...</div> -->

    <!-- Display error message if fetch fails -->
    <!-- <div v-if="error" class="error">{{ error }}</div> -->

    <!-- Display image when URL is loaded -->
    <img
      v-if="imageUrl"
      :src="imageUrl"
      alt="Database Image"
      class="image-from-db"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
const imageUrl = "https://picsum.photos/600/400"; // Placeholder image URL

// const imageUrl = ref(null);
// const loading = ref(true);
// const error = ref(null);

// onMounted(async () => {
//   try {
//     // Replace this URL with your actual backend API
//     const response = await fetch("https://picsum.photos/600/400");

//     if (!response.ok) {
//       throw new Error("Failed to fetch image URL");
//     }

//     const data = await response.json();
//     imageUrl.value = data.imageUrl;
//   } catch (err) {
//     error.value = err.message;
//   } finally {
//     loading.value = false;
//   }
// });
</script>

<style scoped>
.image-from-db {
  width: 50vh;
  height: auto;
}

.error {
  color: red;
  font-weight: bold;
}
</style>
