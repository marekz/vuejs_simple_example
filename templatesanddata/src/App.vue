<template>
  <div class="container-fluid text-center">
    <div class="bg-primary text-white m-2 p-3">
      <h3>Produkt: <span v-text="name"></span></h3>
      <span v-html="fragment"></span>
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
      fragment: '<div class="form-group">\n                    Hasło\n                    <input class="form-control" />\n                  </div>'
    }
  },
  methods: {
    handleClick() {
    //
    }
  }
}
</script>