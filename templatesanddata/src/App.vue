<template>
  <div class="container-fluid text-center">
    <div class="bg-primary text-white m-2 p-3">
      <h3 v-if="counter % 3 == 0">Produkt: <span v-text="name"></span></h3>
      <h3 v-else-if="counter % 3 == 1">Cena: <span v-text="price"></span></h3>
      <h3 v-else>Kategoria: <span v-text="category"></span></h3>
    </div>
    <button v-on:click="handleClick" class="btn btn-primary">
      Wciśnij mnie
    </button>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data: function () {
    return {
      name: "Kamizelka ratunkowa",
      price: 275,
      showElements: true,
      category: "Sporty wodne",
      counter: 0
    }
  },
  methods: {
    handleClick() {
      this.counter++;
    }
  }
}
</script>