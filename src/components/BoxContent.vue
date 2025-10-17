<template>
  <div class="label">
    <div class="label-row">
      <span>Numéro de caisse</span>
      <span>83053</span>
    </div>
    <div class="label-row">
      <span>Référence produit</span>
      <span>518360009</span>
    </div>
    <div class="label-row">
      <span>OF</span>
      <span>978610704720</span>
    </div>
    <div class="label-row">
      <span>Numéro de Lot</span>
      <span>B3D8988EI</span>
    </div>
    <div class="label-row">
      <span>Quantité</span>
      <span>1621</span>
    </div>
  </div>
  <div class="buttons">
    <button>Valider</button>
    <button>Refuser</button>
  </div>
</template>

<style scoped>
.label {
  background-color: white;
  padding: 20px 30px;
  width: 80%;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.label-row {
  display: flex;
  justify-content: space-between;
  margin: 10px;
  font-size: 16px;
  padding: 5px 20px;
}

.label-row span:first-child {
  font-weight: 600;
}

.buttons {
  display: flex;
  gap: 10px;
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
