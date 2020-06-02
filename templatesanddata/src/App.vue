<template>
  <div class="container-fluid">
    <div class="bg-info m-2 p-2 text-white">
      <div>LIczba: {{ amount }}, liczba + 10 = {{ amount + 10 }}</div>
    </div>
    <div class="form-group">
        <label>Liczba: </label>
        <input type="number" class="form-control" v-model.number.lazy="amount" />
      </div>
  </div>
</template>

<script>
  export default {
    name: 'MyComponent',
    data: function() {
      return {
        amount: 100
      }
    }
}
</script>
