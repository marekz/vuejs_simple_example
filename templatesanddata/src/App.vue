<template>
  <div class="container-fluid text-center">
    <div class="bg-primary text-white m-2 p-3">
      <h3 v-bind:data-size="size" class="display-4">Produkt: <span v-text="name"></span></h3>
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
      highlight: false
    }
  },
  computed: {
    size() {
      return this.highlight ? "big": "small";
    }
  },
  methods: {
    handleClick() {
      this.highlight = !this.highlight;
    }
  }
}
</script>
<style>
  [data-size='big'] { font-size: 40pt !important; }
  [data-size='small'] { font-size: 20pt !important; }
</style>