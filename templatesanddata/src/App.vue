<template>
  <div class="container-fluid">
    <h2 class="bg-primary text-white text-center p-3">Produkt</h2>
    <table class="table table-sm table-border table-striped text-left">
      <tr><th>Nazwa</th><th>Cena</th></tr>
      <tbody>
      <tr v-for="p in products" :key = "p">
        <td>{{ p.name }}</td>
        <td>{{ p.price }}</td>
      </tr>
      </tbody>
    </table>
    <div class="text-center">
      <button v-on:click="handleClick" class="btn btn-primary">
        Wciśnij mnie
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data: function () {
    return {
      products: [
        { name: "Kajak", price: 275},
        { name: "Kamizelka ratunkowa", price: 48.95},
        { name: "Piłka nożna", price: 19.50}]
    }
  },
  methods: {
    handleClick() {
      this.highlight = !this.highlight;
    }
  }
}
</script>