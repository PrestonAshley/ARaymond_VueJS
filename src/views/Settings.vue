<template>
  <div class="container">
    <div class="form-box">
      <h2>Plan Qualité</h2>
      <label for="reference">Article</label>
      <input
        type="text"
        id="reference"
        v-model="reference"
        placeholder="Entrez la référence"
      />
      <button @click="showReference">Afficher</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const reference = ref("230384000");

function showReference() {
  alert(`Référence: ${reference.value}`);
}
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f0f4f8;
}

.form-box {
  background-color: white;
  padding: 30px;
  border: 2px solid #ccc;
  border-radius: 10px;
  text-align: center;
  width: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

button {
  background-color: #0056b3;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #003f7f;
}
</style>
