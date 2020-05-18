<template>
  <div class="container-fluid text-center">
    <div class="bg-primary text-white m-2 p-3">
      <h3 v-bind:class="elemClasses" class="display-4">Produkt: <span v-text="name"></span></h3>
    </div>
    <button v-on:click="handleClick" class="btn btn-primary">
      Wciśnij mnie
    </button>
    <button v-on:click="handleOtherClick" class="btn btn-primary">
      Lub mnie
    </button>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data: function () {
    return {
      name: "Kamizelka ratunkowa",
      highlight1: false,
      highlight2: false
    }
  },
  computed: {
    elemClasses() {
      return {
        "text-dark": this.highlight1,
        "bg-light": this.highlight2,
      }
    }
  },
  methods: {
    handleClick() {
      this.highlight1 = !this.highlight1;
    },

    handleOtherClick() {
      this.highlight2 = !this.highlight2;
    }
  }
}
</script>