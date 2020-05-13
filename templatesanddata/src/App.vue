<template>
  <div class="bg-primary text-white text-center m-2 p-2">
    <h3>This is a component</h3>
    <h4>Product: {{ name }}</h4>
    <h3>Price: {{ totalPrice.toFixed(2) }}</h3>
  </div>
</template>

<script>
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
      return this.price + (this.price * (this.taxRate / 100));
    }
  }
}
</script>