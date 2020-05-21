<template>
  <div class="container-fluid">
    <div class="bg-primary text-white m-2 p-3 text-center">
      <h3>Produkt: {{ name }}</h3>
    </div>
    <div class="text-center">
      <button v-on:click="handleClick" class="btn btn-primary">
        Wciśnij mnie
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data: function () {
    return {
      name: "Kamizelka ratunkowa"
    }
  },
  methods: {
    handleClick() {
      this.highlight = !this.highlight;
    }
  }
}
</script>