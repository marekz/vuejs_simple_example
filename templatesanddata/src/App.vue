<template>
  <div class="bg-primary text-white text-center m-2 p-2">
    <h3>This is a component</h3>
    <h4>Product: {{ productName }}</h4>
    <h4>Price: {{ getTotalPrice(this.lowTaxRate).toFixed(2) }} zł (niższa stawka)</h4>
    <h4>Price: {{ getTotalPrice(this.highTaxRate).toFixed(2) }} zł (wyższa stawka)</h4>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data: function () {
    return {
      productName: "Bajtek",
      price: 203,
      lowTaxRate: 19,
      highTaxRate: 23
    }
  },
  methods: {
    getTotalPrice(taxRate) {
      return this.price + (this.price * (taxRate / 100));
    }
  }
}
</script>