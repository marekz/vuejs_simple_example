<template>
  <div class="container-fluid">
    <h2 class="bg-primary text-white text-center p-3">Produkt</h2>
    <table class="table table-sm table-border table-striped text-left">
      <tr><th>Nazwa</th><th>Cena</th></tr>
      <tbody>
        <tr v-for="p in pageItems" v-bind:key="p.name">
          <td>{{ p.name }}</td>
          <td>{{ p.price | currency }}</td>
        </tr>
      </tbody>
    </table>
    <div class="text-center">
      <button class="btn btn-secondary m-1" v-on:click="toggleSort"
              v-bind:class="{'bg-primary': sort}">
        Włącz sortowanie
      </button>
      <button class="btn btn-secondary m-1" v-on:click="toggleFilter"
              v-bind:class="{'bg-primary': filter}">
        Włącz filtrowanie
      </button>
      <!-- eslint-disable-next-line vue/require-v-for-key -->
      <button v-for="i in pageCount" v-on:click="selectPage(i)"
              class="btn btn-secondary m-1"
              v-bind:class="{'bg-primary': currentPage == i}">
        {{ i }}
      </button>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'MyComponent',
  data: function () {
    return {
      pageSize: 3,
      currentPage: 1,
      filter: false,
      sort: false,
      products: [
        { name: "Kajak", price: 275 },
        { name: "Kamizelka ratunkowa", price: 48.95 },
        { name: "Piłka nożna", price: 19.50 },
        { name: "Chorągiewki narożne", price: 39.95 },
        { name: "Stadion", price: 79500 },
        { name: "Myśląca czapeczka", price: 16 },
        { name: "Chwiejne krzesło", price: 29.95 },
        { name: "Szachownica", price: 75 },
        { name: "Złoty król", price: 1200}
      ]
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.dataItems.length / this.pageSize);
    },
    pageItems() {
      let start = (this.currentPage - 1) * this.pageSize;
      return this.dataItems.slice(start, start + this.pageSize);
    },
    dataItems() {
      let data = this.filter ? this.products.filter(p => p.price > 100 ) : this.products;
      return this.sort ? data.concat().sort((p1, p2) => p2.price - p1.price) : data;
    }
  },
  filters: {
    currency(value) {
      return new Intl.NumberFormat("pl-PL",
              { style: "currency", currency: "PLN", }).format(value);
    }
  },
  methods: {
    selectPage(page) {
      this.currentPage = page;
    },
    toggleFilter() {
      this.filter = !this.filter;
      this.currentPage = 1;
    },
    toggleSort() {
      this.sort = !this.sort;
      this.currentPage = 1;
    }
  }
}
</script>
