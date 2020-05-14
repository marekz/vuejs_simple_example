<template>
  <div class="bg-primary text-white text-center m-2 p-2">
    <h3>This is a component</h3>
    <h4>Product: {{ productName | reverse | capitalize }}</h4>
    <h4>Price: {{ getTotalPrice(this.lowTaxRate) | currency(3) }} (niższa stawka)</h4>
    <h4>Price: {{ getTotalPrice(this.highTaxRate) | currency }} (wyższa stawka)</h4>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data: function () {
    return {
      productName: "Komputer Bajtek",
      price: 203,
      lowTaxRate: 19,
      highTaxRate: 23
    }
  },
  methods: {
    getTotalPrice(taxRate) {
      return this.price + (this.price * (taxRate / 100));
    }
  },
  filters: {
    capitalize(name) {
      return name[0].toUpperCase() + name.slice(1);
    },
    reverse(name) {
      return name.split("").reverse().join("");
    }
  }
}
</script>