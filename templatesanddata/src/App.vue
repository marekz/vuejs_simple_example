<template>
  <div class="container-fluid text-center">
    <div class="bg-primary text-white m-2 p-3">
      <h3 v-bind="attrValues" class="display-4">Produkt: <span v-text="name"></span></h3>
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
    attrValues() {
      return {
        class: this.highlight ? ["bg-light", "text-dark"] : [],
        style: {
          border: this.highlight ? "5px solid red" : ""
        },
        "data-size": this.highlight ? "big" : "small"
      }
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
  [data-size='big'] { font-size: 40pt !important; background: red }
  [data-size='small'] { font-size: 20pt !important; }
</style>