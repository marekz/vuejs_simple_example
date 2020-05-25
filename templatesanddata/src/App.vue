<template>
  <div class="container-fluid">
    <h2 class="bg-primary text-white text-center p-3">Produkt</h2>
    <table class="table table-sm table-border table-striped text-left">
      <tr><th>Indeks</th><th>Nazwa</th><th>Cena</th></tr>
      <tbody>
        <tr v-for="(p, key, i) in products" v-bind:key="p.name">
          <td>{{ i + 1 }}</td>
          <td>{{ p.name }}</td>
          <td>{{ p.price | currency }}</td>
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
  import Vue from "vue";
  export default {
  name: 'MyComponent',
  data: function () {
    return {
      products: {
        1: { name: "Kajak", price: 275},
        2: { name: "Kamizelka ratunkowa", price: 48.95},
        3: { name: "Piłka nożna", price: 19.50},
        4: { name: "Chorągiewki narożne", price: 39.95}
      }
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
      Vue.set(this.products, 5, { name: "Buty do biegania", price: 100 });
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
