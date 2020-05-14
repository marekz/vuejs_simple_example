<template>
  <div class="container-fluid text-center">
    <div class="bg-primary text-white m-2 p-3">
      <h3>Produkt: <span v-text="name"></span></h3>
      <ul class="text-left">
        <li>List element</li>
        <li v-if="showElements">{{ name }}</li>
        <li v-if="showElements">{{ price }}</li>
        <li>Another list element...</li>
      </ul>
      <h4 v-if="showElements">{{ price }}</h4>
    </div>
    <button v-on:click="handleClick" class="btn btn-primary">
      Wciśnij mnie
    </button>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data: function () {
    return {
      name: "Kamizelka ratunkowa",
      price: 275,
      showElements: false
    }
  },
  methods: {
    handleClick() {
      this.showElements = !this.showElements;
    }
  }
}
</script>