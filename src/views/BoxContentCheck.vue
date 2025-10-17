<template>
  <div class="container">
    <div class="top-section">
      <BoxContent />
      <ImageViewer />
    </div>
    <div class="pdf-section">
      <PDFViewer pdfUrl="/CADDrawing.pdf" />
    </div>
  </div>
</template>

<script setup>
import BoxContent from "@/components/BoxContent.vue";
import PDFViewer from "@/components/PDFViewer.vue";
import ImageViewer from "@/components/ImageViewer.vue";
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f0f4f8;
  width: 100%;
  height: 100%;
}
.top-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 60px;
  width: 30%;
}
.pdf-section {
  gap: 20px;
  padding: 20px;
}
</style>
