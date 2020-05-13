<template>
  <div class="bg-primary text-white text-center m-2 p-2">
    <h3>This is a component</h3>
    <h4>Product: {{ productName }}</h4>
    <h4>Price: {{ lowTotalPrice.toFixed(2) }} zł (niższa stawka)</h4>
    <h4>Price: {{ highTotalPrice.toFixed(2) }} zł (wyższa stawka)</h4>
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
  computed: {
    lowTotalPrice: function () {
      let tp = this.price + (this.price * (this.lowTaxRate / 100));
      return tp;
    },
    highTotalPrice: function() {
      let tp = this.price + (this.price * (this.highTaxRate / 100));
      return tp;
    }
  }
}
</script>