<template>
  <div class="bg-primary text-white text-center m-2 p-2">
    <h3>This is a component</h3>
    <h4>Product: {{ productName }}</h4>
    <h4>Price: {{ getTotalPrice(this.lowTaxRate) | currency(3) }} (niższa stawka)</h4>
    <h4>Price: {{ getTotalPrice(this.highTaxRate) | currency }} (wyższa stawka)</h4>
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
  },
  filters: {
    currency(value, places) {
      return new Intl.NumberFormat("pl-PL",
              { style: "currency", currency: "PLN",
                minimumFractionDigits: places || 2,
                maximumFractionDigits: places || 2
              }).format(value);
    }
  }
}
</script>