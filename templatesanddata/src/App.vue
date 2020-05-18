<template>
  <div class="container-fluid text-center">
    <div class="bg-primary text-white m-2 p-3">
      <h3 v-bind:class="elemClasses">Produkt: <span v-text="name"></span></h3>
      <!--
        :class is short method v-bind
        <h3 :class="elemClasses">Produkt: <span v-text="name"></span></h3>
       -->
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
    elemClasses() {
      return this.highlight
      ? ["bg-light", "text-dark", "display-4"]
              : ["bg-dark", "text-light", "p-2"]
    }
  },
  methods: {
    handleClick() {
      this.highlight = !this.highlight;
    }
  }
}
</script>