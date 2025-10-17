<template>
  <div class="container">
    <div class="pdf-viewer">
      <PdfEmbed
        :source="pdfUrl"
        :page="page"
        :width="scale"
        @loaded="onLoaded"
        style="border: 1px solid #ccc"
      />
      <div class="toolbar">
        <!-- <button @click="prevPage" :disabled="page <= 1">Previous</button>
      <span>Page {{ page }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="page >= totalPages">Next</button> -->
        <button @click="zoomOut">-</button>
        <button @click="zoomIn">+</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import PdfEmbed from "vue-pdf-embed";

const props = defineProps({
  pdfUrl: {
    type: String,
    required: true,
  },
});

// States
const page = ref(1);
// const totalPages = ref(0);
const scale = ref(900); // width in px

// PDF loaded event
function onLoaded() {
  console.log("PDF loaded");
}
// function onLoaded(pdf) {
//   totalPages.value = pdf.numPages;
// }

// Navigation
// function nextPage() {
//   if (page.value < totalPages.value) page.value++;
// }
// function prevPage() {
//   if (page.value > 1) page.value--;
// }

// Zoom
function zoomIn() {
  scale.value += 100;
}
function zoomOut() {
  scale.value = Math.max(200, scale.value - 100);
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f0f4f8;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
.pdf-viewer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f0f4f8;
  margin: 10px;
}
.toolbar {
  margin-top: 10px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
}

button {
  padding: 5px 10px;
  font-size: 16px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
</style>
