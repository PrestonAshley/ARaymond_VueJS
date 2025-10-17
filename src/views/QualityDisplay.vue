<template>
  <div class="container">
    <div class="top-section">
      <PlanQuality />
      <ImageViewer />
    </div>
    <div class="pdf-section">
      <PDFViewer class="pdf-viewer" pdfUrl="/CADDrawing.pdf" />
    </div>
  </div>
</template>

<script setup>
import PlanQuality from "@/components/PlanQuality.vue";
import PDFViewer from "../components/PDFViewer.vue";
import ImageViewer from "../components/ImageViewer.vue";
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f0f4f8;
  width: 100%;
  height: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
.top-section {
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-items: center;
  align-items: center;
  gap: 60px;
}
.pdf-section {
  gap: 20px;
  padding: 20px;
}
</style>
