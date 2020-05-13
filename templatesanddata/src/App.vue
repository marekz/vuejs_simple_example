<template>
  <div class="bg-primary text-white text-center m-2 p-2">
    <h3>This is a component</h3>
    <h4>Product: {{ productName }}</h4>
    <h4>Price: {{ totalPrice.toFixed(2) }}</h4>
  </div>
</template>

<script>
  // import "core-js/modules/es.array.concat";
export default {
  name: 'MyComponent',
  data: function () {
    return {
      productName: "Bajtek",
      price: 203,
      taxRate: 23
    }
  },
  computed: {
    totalPrice: function() {
      let tp = this.price + (this.price * (this.taxRate / 100));
      console.log(`Obliczono: ${tp} (${this.taxRate})`);
      return tp;
    }
  }
}
</script>