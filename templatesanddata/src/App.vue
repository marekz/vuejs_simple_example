<template>
  <div class="container-fluid">
    <h2 class="bg-primary text-white text-center p-3">Produkt</h2>
    <table class="table table-sm table-border table-striped text-left">
      <tr><th>Indeks</th><th>Nazwa</th><th>Cena</th></tr>
      <tbody>
      <template v-for="(p, i) in products">
        <tr v-bind:key="p.name" v-bind:odd="i % 2 == 0">
          <td>{{ i + 1 }}</td>
          <td>{{ p.name }}</td>
          <td>{{ p.price | currency }}</td>
        </tr>
      </template>
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
        { name: "Piłka nożna", price: 19.50},
        { name: "Chorągiewki narożne", price: 39.95},
        { name: "Stadion", price: 79500},
        { name: "Myśląca czapeczka", price: 16}]
    }
  },
  filters: {
    currency(value) {
      return new Intl.NumberFormat("pl-PL",
              { style: "currency", currency: "PLN", }).format(value);
    }
  },
  methods: {
    handleClick() {
      this.products[1] = { name: "Buty do biegania", price: 100 };
    }
  }
}
</script>
<style>
  [odd] {
    background-color: lightblue;
  }
  #tagged {
    background-color: coral;
  }
</style>
